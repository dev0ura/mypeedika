# The hero globe is projected per frame, not animated as art

The hero globe turns, with the Shopify, Instagram, Razorpay and Judge.me marks in orbit around it. Three ways to build that were tried, and only the third survives.

**WebGL.** A three.js point-cloud globe looked the part but was rejected outright: it adds a ~150KB dependency and a second rendering model to a marketing site whose whole point is loading fast. The dependency is gone; the attempt is kept at the `archive/webgl-globe` tag.

**A scrolling texture.** The usual CSS trick — a wide equirectangular map slid sideways behind a circular mask — is cheap, but it is a cylinder wearing a sphere's clothes. Continents do not foreshorten towards the edges and the poles are nonsense. Against a reference bar of "premium and rich", it reads as fake.

**Projecting the real geometry each frame.** What ships. `globe-data.ts` holds Natural Earth 110m coastlines as lon/lat rings; `globe-projection.ts` turns them into an SVG path at whatever rotation the clock asks for. Measured: 60fps at 4x CPU throttle, 4.6% of main-thread script time, ~11KB of encoded geometry.

The consequence worth knowing about is in `globe-projection.ts`. Filled and stroked geometry need opposite treatment at the limb. A coastline is a solid, so its visible runs must be sewn back into closed shapes that follow the limb between one run's exit and the next run's entry — the earlier, simpler approach of pushing hidden vertices out onto the limb produced spurious winding, and the globe rendered inside-out, with green oceans. A graticule line is not a solid, so its runs are simply cut and the hidden part is absent.

That sewing only works because every ring winds the same way, which is why the generator keeps exterior rings only and normalises their orientation. Change the data and the `SWEEP` constant has to be re-checked.

One frame is rendered on the server, so the globe is complete and correct before any JavaScript arrives — the loop only takes over the turning. Under `prefers-reduced-motion` the loop never starts and that server-rendered frame is what stays on screen.
