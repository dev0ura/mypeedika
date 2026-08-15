"use client";

import { useEffect, useRef } from "react";
import { LAND, MERIDIANS, PARALLELS } from "./globe-data";
import { fillPath, strokePath } from "./globe-projection";

/* Hero globe: a turning sphere with the brand marks in orbit around it.

   The coastlines are real Natural Earth geometry, re-projected every frame
   rather than baked in, which is what lets the thing actually rotate. One
   frame is rendered on the server too, so the globe is complete and correct
   before any JavaScript arrives - the loop only takes over the turning.

   Shopify, Instagram and Razorpay use the vendors' real vector geometry.
   Judge.me publishes no vector, so reviews are represented by a star. */

/* Brand marks from simple-icons (CC0), 24x24 viewBox, unmodified geometry. */
const SHOPIFY =
  "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z";

const INSTAGRAM =
  "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077";

const RAZORPAY_LIGHT = "M22.436 0l-11.91 7.773-1.174 4.276 6.625-4.297L11.65 24h4.391l6.395-24z";
const RAZORPAY_DARK = "M14.26 10.098L3.389 17.166 1.564 24h9.008l3.688-13.902Z";

const INK = "#212121";
const PAPER = "#fcf8f5";

const CX = 300;
const CY = 300;
const R = 196;

/* The orbit is a circle seen almost edge-on, then tipped a little so it
   does not sit dead level with the horizon. */
const ORBIT_A = 246;
const ORBIT_B = 76;
const ORBIT_TILT = (-10 * Math.PI) / 180;
const COS_ORB = Math.cos(ORBIT_TILT);
const SIN_ORB = Math.sin(ORBIT_TILT);

/** Longitude at the centre on first paint. 62E, so the Gulf faces us. */
const SPIN_START = 62;
const SPIN_PERIOD = 64_000;
const ORBIT_PERIOD = 28_000;

type Placement = { x: number; y: number; scale: number; behind: boolean };

function place(angleDeg: number): Placement {
  const t = (angleDeg * Math.PI) / 180;
  const ex = ORBIT_A * Math.cos(t);
  const ey = ORBIT_B * Math.sin(t);
  const z = Math.sin(t);
  return {
    x: CX + ex * COS_ORB - ey * SIN_ORB,
    y: CY + ex * SIN_ORB + ey * COS_ORB,
    scale: 1 + 0.16 * z,
    behind: z < 0,
  };
}

const transformFor = (p: Placement) =>
  `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${p.scale.toFixed(3)})`;

/* Parallels are unmoved by a spin about the polar axis, so they are
   projected once and left alone. */
const PARALLEL_PATH = strokePath(PARALLELS, 0, R);

const MARKS = [
  { angle: 0, r: 38, spin: -8 },
  { angle: 96, r: 31, spin: 6 },
  { angle: 190, r: 33, spin: 7 },
  { angle: 282, r: 27, spin: -10 },
] as const;

function Mark({ r, spin, children }: { r: number; spin: number; children: React.ReactNode }) {
  return (
    <g transform={`rotate(${spin})`}>
      <ellipse cx="0" cy={r * 0.24} rx={r * 0.92} ry={r * 0.2} fill={INK} opacity="0.13" />
      <circle cx="0" cy="0" r={r} fill={PAPER} />
      <circle cx="0" cy="0" r={r} fill="url(#tok-sheen)" />
      <circle cx="0" cy="0" r={r} fill="none" stroke={INK} strokeOpacity="0.13" strokeWidth="1.5" />
      {/* brand paths are 24x24; scale so the mark fills ~57% of the token */}
      <g transform={`scale(${r / 21}) translate(-12 -12)`}>{children}</g>
    </g>
  );
}

export default function HeroGlobe() {
  const landRef = useRef<SVGPathElement>(null);
  const reliefRef = useRef<SVGPathElement>(null);
  const meridianRef = useRef<SVGPathElement>(null);
  /* A mark needs two nodes: an outer one to carry the clip, and an inner one
     to carry the transform. Put both on one node and the element's transform
     drags the clip along with it, which masks the wrong part of the screen. */
  const clipRefs = useRef<(SVGGElement | null)[]>([]);
  const moveRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let start = performance.now();
    let elapsed = 0;
    let onScreen = true;
    const clipped = MARKS.map((m) => place(m.angle).behind);

    const draw = (now: number) => {
      const ms = elapsed + (now - start);
      const spin = SPIN_START + (ms / SPIN_PERIOD) * 360;
      const orbit = (ms / ORBIT_PERIOD) * 360;

      const land = fillPath(LAND, spin, R);
      landRef.current?.setAttribute("d", land);
      reliefRef.current?.setAttribute("d", land);
      meridianRef.current?.setAttribute("d", strokePath(MERIDIANS, spin, R));

      for (let i = 0; i < MARKS.length; i++) {
        const move = moveRefs.current[i];
        if (!move) continue;
        const p = place(MARKS[i].angle + orbit);
        move.setAttribute("transform", transformFor(p));
        // only touched on the two crossings per lap, not every frame
        if (p.behind !== clipped[i]) {
          clipRefs.current[i]?.setAttribute("clip-path", p.behind ? "url(#g-behind)" : "none");
          clipped[i] = p.behind;
        }
      }

      frame = requestAnimationFrame(draw);
    };

    /* Stop the loop whenever nobody can see it - scrolled away, or the tab
       in the background - and pick the clock back up where it was left. */
    const resume = () => {
      if (frame || !onScreen || document.hidden) return;
      start = performance.now();
      frame = requestAnimationFrame(draw);
    };

    const pause = () => {
      if (!frame) return;
      elapsed += performance.now() - start;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) resume();
        else pause();
      },
      { rootMargin: "120px" },
    );
    if (landRef.current?.ownerSVGElement) io.observe(landRef.current.ownerSVGElement);

    const onVisibility = () => (document.hidden ? pause() : resume());
    document.addEventListener("visibilitychange", onVisibility);
    resume();

    return () => {
      pause();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const initialLand = fillPath(LAND, SPIN_START, R);
  const initialMeridians = strokePath(MERIDIANS, SPIN_START, R);

  return (
    <svg
      viewBox="0 0 600 600"
      width="600"
      height="600"
      role="img"
      aria-label="A slowly turning globe centred on India and the Gulf, orbited by the Shopify, Instagram, Razorpay and Judge.me marks"
      style={{ inlineSize: "100%", blockSize: "auto", maxInlineSize: "100%" }}
    >
      <defs>
        <radialGradient id="g-ocean" cx="33%" cy="26%" r="86%">
          <stop offset="0%" stopColor="#7defd9" />
          <stop offset="26%" stopColor="#33cbb8" />
          <stop offset="52%" stopColor="#15a89a" />
          <stop offset="78%" stopColor="#0b6a63" />
          <stop offset="100%" stopColor="#05332f" />
        </radialGradient>

        <radialGradient id="g-land" cx="33%" cy="24%" r="88%">
          <stop offset="0%" stopColor="#a8f5a8" />
          <stop offset="40%" stopColor="#5ce677" />
          <stop offset="72%" stopColor="#2fb04d" />
          <stop offset="100%" stopColor="#12522c" />
        </radialGradient>

        {/* atmosphere: a tight rim just off the limb. Widen this and it
            stops reading as air and starts reading as a green blur. */}
        <radialGradient id="g-atmo" cx="50%" cy="50%" r="50%">
          <stop offset="88%" stopColor="#3edd5c" stopOpacity="0" />
          <stop offset="94.5%" stopColor="#5ce677" stopOpacity="0.34" />
          <stop offset="97.5%" stopColor="#3edd5c" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#15a89a" stopOpacity="0" />
        </radialGradient>

        {/* terminator: deepens the lower-right limb so the ball reads round */}
        <radialGradient id="g-term" cx="34%" cy="27%" r="84%">
          <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          <stop offset="88%" stopColor="#00201e" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#00201e" stopOpacity="0.62" />
        </radialGradient>

        <radialGradient id="tok-sheen" cx="32%" cy="24%" r="80%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor={INK} stopOpacity="0.09" />
        </radialGradient>

        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="28%" stopColor="#FA7E1E" />
          <stop offset="55%" stopColor="#D62976" />
          <stop offset="78%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>

        <clipPath id="g-clip">
          <circle cx={CX} cy={CY} r={R} />
        </clipPath>

        {/* everything except the sphere, so a mark on the far side of the
            orbit slides behind the limb instead of over it */}
        <clipPath id="g-behind" clipRule="evenodd">
          <path
            d={`M0,0 H600 V600 H0 Z M${CX},${CY - R} A${R},${R} 0 1,0 ${CX},${CY + R} A${R},${R} 0 1,0 ${CX},${CY - R} Z`}
            clipRule="evenodd"
          />
        </clipPath>

        <filter id="g-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="g-soft-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* contact shadow, so the sphere sits in the page rather than on it */}
      <ellipse
        cx={CX + 6}
        cy={CY + R + 26}
        rx={R * 0.72}
        ry="20"
        fill={INK}
        opacity="0.09"
        filter="url(#g-soft-sm)"
      />

      {/* atmosphere */}
      <circle cx={CX} cy={CY} r={R * 1.09} fill="url(#g-atmo)" />

      {/* ocean */}
      <circle cx={CX} cy={CY} r={R} fill="url(#g-ocean)" />

      <g clipPath="url(#g-clip)">
        <g transform={`translate(${CX} ${CY})`}>
          {/* land shadow, offset slightly for a sense of relief */}
          <path
            ref={reliefRef}
            d={initialLand}
            fill="#04302c"
            opacity="0.5"
            transform="translate(3 4)"
          />
          <path ref={landRef} d={initialLand} fill="url(#g-land)" />

          {/* graticule, faint, over the water only */}
          <path
            d={PARALLEL_PATH}
            fill="none"
            stroke={PAPER}
            strokeOpacity="0.16"
            strokeWidth="1"
          />
          <path
            ref={meridianRef}
            d={initialMeridians}
            fill="none"
            stroke={PAPER}
            strokeOpacity="0.16"
            strokeWidth="1"
          />
        </g>

        {/* cloud wisps */}
        <g filter="url(#g-soft)" opacity="0.5">
          <ellipse cx={CX - 96} cy={CY - 108} rx="86" ry="34" fill="#ffffff" transform={`rotate(-22 ${CX - 96} ${CY - 108})`} />
          <ellipse cx={CX + 62} cy={CY - 46} rx="72" ry="26" fill="#ffffff" transform={`rotate(14 ${CX + 62} ${CY - 46})`} />
          <ellipse cx={CX - 30} cy={CY + 116} rx="96" ry="30" fill="#e8fff8" transform={`rotate(-8 ${CX - 30} ${CY + 116})`} />
        </g>

        {/* terminator */}
        <circle cx={CX} cy={CY} r={R} fill="url(#g-term)" />

        {/* specular highlight */}
        <ellipse
          cx={CX - 74}
          cy={CY - 92}
          rx="62"
          ry="40"
          fill="#ffffff"
          opacity="0.34"
          filter="url(#g-soft-sm)"
          transform={`rotate(-30 ${CX - 74} ${CY - 92})`}
        />

        {/* bounce light along the lower-right limb */}
        <circle
          cx={CX + 16}
          cy={CY + 20}
          r={R - 3}
          fill="none"
          stroke="#7defd9"
          strokeOpacity="0.4"
          strokeWidth="7"
          filter="url(#g-soft-sm)"
        />
      </g>

      {/* ── brand marks in orbit ───────────────────────────────── */}
      {MARKS.map((m, i) => {
        const p = place(m.angle);
        return (
          <g
            key={m.angle}
            ref={(el) => {
              clipRefs.current[i] = el;
            }}
            clipPath={p.behind ? "url(#g-behind)" : "none"}
          >
            <g
              ref={(el) => {
                moveRefs.current[i] = el;
              }}
              transform={transformFor(p)}
            >
              <Mark r={m.r} spin={m.spin}>
                {i === 0 && <path d={SHOPIFY} fill="#7AB55C" />}
                {i === 1 && <path d={INSTAGRAM} fill="url(#ig-grad)" />}
                {i === 2 && (
                  <>
                    <path d={RAZORPAY_LIGHT} fill="#3395FF" />
                    <path d={RAZORPAY_DARK} fill="#02042B" />
                  </>
                )}
                {/* Judge.me has no published vector, so reviews get a star */}
                {i === 3 && (
                  <>
                    <circle cx="12" cy="12" r="11.5" fill="#25B36B" />
                    <path
                      d="M12 4.6l2.3 4.6 5.1.8-3.7 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1-3.7-3.6 5.1-.8z"
                      fill="#fff"
                    />
                  </>
                )}
              </Mark>
            </g>
          </g>
        );
      })}

      {/* loose punctuation, as the reference scatters */}
      <circle cx="52" cy="126" r="9" fill={INK} opacity="0.85" />
      <circle cx="566" cy="196" r="7" fill="none" stroke={INK} strokeWidth="2.5" opacity="0.6" />
    </svg>
  );
}
