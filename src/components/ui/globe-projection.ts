import type { Ring } from "./globe-data";

/* Orthographic projection, evaluated per frame so the globe can turn.

   Two clipping modes, because filled and stroked geometry want opposite
   things at the limb. A coastline is a solid: its visible runs have to be
   sewn back into closed shapes, following the limb itself between a run's
   exit and the next run's entry, or the fill leaks. A graticule line is
   not a solid, so its runs are simply cut and the hidden part is absent.

   The sewing only works because every ring winds the same way (the data
   is generated that way), which fixes which way round the limb to travel. */

const D2R = Math.PI / 180;
const TAU = Math.PI * 2;

/** Viewing latitude. 16N puts India and the Gulf square in front. */
const VIEW_LAT = 16;

const SIN_T = Math.sin(VIEW_LAT * D2R);
const COS_T = Math.cos(VIEW_LAT * D2R);

/** Which way round the limb to travel from an exit. Set by the data's winding. */
const SWEEP = 1;

const round = (v: number) => Math.round(v * 10) / 10;

type Run = {
  pts: number[];
  /** limb angle where the ring became visible, and where it stopped */
  entry: number;
  exit: number;
};

export function fillPath(rings: Ring[], spinDeg: number, radius: number): string {
  const s0 = Math.sin(spinDeg * D2R);
  const c0 = Math.cos(spinDeg * D2R);
  const out: string[] = [];

  for (const ring of rings) {
    const n = ring.length / 4;
    const runs: Run[] = [];
    let run: Run | null = null;
    let startedVisible = false;
    let px = 0;
    let py = 0;
    let pd = 0;

    for (let i = 0, o = 0; i < n; i++, o += 4) {
      const sinLat = ring[o];
      const cosLat = ring[o + 1];
      const sinLon = ring[o + 2];
      const cosLon = ring[o + 3];

      const cosD = cosLon * c0 + sinLon * s0;
      const sinD = sinLon * c0 - cosLon * s0;

      const depth = SIN_T * sinLat + COS_T * cosLat * cosD;
      const x = radius * cosLat * sinD;
      const y = -radius * (COS_T * sinLat - SIN_T * cosLat * cosD);

      if (depth > 0) {
        if (!run) {
          run = { pts: [], entry: NaN, exit: NaN };
          if (i === 0) startedVisible = true;
          else {
            const t = pd / (pd - depth);
            const cx = px + (x - px) * t;
            const cy = py + (y - py) * t;
            const m = Math.hypot(cx, cy) || 1;
            const ex = (cx / m) * radius;
            const ey = (cy / m) * radius;
            run.entry = Math.atan2(ey, ex);
            run.pts.push(ex, ey);
          }
          runs.push(run);
        }
        run.pts.push(x, y);
      } else if (run) {
        const t = pd / (pd - depth);
        const cx = px + (x - px) * t;
        const cy = py + (y - py) * t;
        const m = Math.hypot(cx, cy) || 1;
        const ex = (cx / m) * radius;
        const ey = (cy / m) * radius;
        run.exit = Math.atan2(ey, ex);
        run.pts.push(ex, ey);
        run = null;
      }

      px = x;
      py = y;
      pd = depth;
    }

    if (!runs.length) continue;

    /* The ring is closed, so a run spanning the seam is stored as two.
       Glue the tail back onto the head before stitching. */
    const last = runs[runs.length - 1];
    if (runs.length > 1 && startedVisible && Number.isNaN(last.exit)) {
      const head = runs[0];
      head.pts = last.pts.concat(head.pts);
      head.entry = last.entry;
      runs.pop();
    }

    // wholly visible: no limb involved, emit the polygon as it stands
    if (runs.length === 1 && Number.isNaN(runs[0].entry)) {
      out.push("M", polyline(runs[0].pts), "Z");
      continue;
    }

    const open = runs.filter((r) => !Number.isNaN(r.entry) && !Number.isNaN(r.exit));
    if (!open.length) continue;

    const used = new Array<boolean>(open.length).fill(false);
    for (let start = 0; start < open.length; start++) {
      if (used[start]) continue;
      out.push("M");
      let cur = start;
      for (let step = 0; step <= open.length; step++) {
        used[cur] = true;
        // after an arc the pen is mid-command, so the next run needs an explicit L
        out.push(step === 0 ? polyline(open[cur].pts) : "L" + polyline(open[cur].pts));
        const next = nextEntry(open, open[cur].exit);
        out.push(arc(open[cur].exit, open[next].entry, radius));
        if (next === start) break;
        cur = next;
      }
      out.push("Z");
    }
  }

  return out.join("");
}

/** The run whose entry comes soonest travelling from `from` in SWEEP's direction. */
function nextEntry(runs: Run[], from: number): number {
  let best = 0;
  let bestDelta = Infinity;
  for (let i = 0; i < runs.length; i++) {
    let d = SWEEP === 1 ? runs[i].entry - from : from - runs[i].entry;
    d = ((d % TAU) + TAU) % TAU;
    if (d < bestDelta) {
      bestDelta = d;
      best = i;
    }
  }
  return best;
}

function arc(from: number, to: number, radius: number): string {
  let d = SWEEP === 1 ? to - from : from - to;
  d = ((d % TAU) + TAU) % TAU;
  const large = d > Math.PI ? 1 : 0;
  const x = round(Math.cos(to) * radius);
  const y = round(Math.sin(to) * radius);
  return `A${radius},${radius} 0 ${large},${SWEEP} ${x},${y}`;
}

function polyline(pts: number[]): string {
  let s = "";
  for (let i = 0; i < pts.length; i += 2) {
    s += round(pts[i]) + "," + round(pts[i + 1]) + " ";
  }
  return s;
}

export function strokePath(rings: Ring[], spinDeg: number, radius: number): string {
  const s0 = Math.sin(spinDeg * D2R);
  const c0 = Math.cos(spinDeg * D2R);
  const out: string[] = [];

  for (const ring of rings) {
    const n = ring.length / 4;
    let open = false;
    let px = 0;
    let py = 0;
    let pd = 0;

    for (let i = 0, o = 0; i < n; i++, o += 4) {
      const sinLat = ring[o];
      const cosLat = ring[o + 1];
      const sinLon = ring[o + 2];
      const cosLon = ring[o + 3];

      const cosD = cosLon * c0 + sinLon * s0;
      const sinD = sinLon * c0 - cosLon * s0;

      const depth = SIN_T * sinLat + COS_T * cosLat * cosD;
      const x = radius * cosLat * sinD;
      const y = -radius * (COS_T * sinLat - SIN_T * cosLat * cosD);

      if (depth > 0) {
        if (!open) {
          // enter on the limb itself, so lines do not start mid-air
          if (i > 0) {
            const t = pd / (pd - depth);
            out.push("M" + round(px + (x - px) * t) + "," + round(py + (y - py) * t) + " ");
          } else {
            out.push("M");
          }
          open = true;
        }
        out.push(round(x) + "," + round(y) + " ");
      } else if (open) {
        const t = pd / (pd - depth);
        out.push(round(px + (x - px) * t) + "," + round(py + (y - py) * t) + " ");
        open = false;
      }

      px = x;
      py = y;
      pd = depth;
    }
  }

  return out.join("");
}
