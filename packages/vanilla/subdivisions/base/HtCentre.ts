// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.33 21.498a1 1 0 0 0 .71-.039l.962-.427a1 1 0 0 0 .585-.78l.507-3.771a1 1 0 0 0-.345-.896l-1.375-1.165a1 1 0 0 0-.621-.237l-1.952-.048a.768.768 0 0 1-.245-1.489l2.201-.804c.335-.122.645-.303.916-.534l2.664-2.268a2 2 0 0 0 .542-.737l.581-1.36a1 1 0 0 0-.398-1.245l-2.438-1.492a1 1 0 0 0-.61-.143l-3.353.295a1 1 0 0 1-.67-.184l-2.069-1.485a1 1 0 0 0-1.08-.056l-3.105 1.78a1 1 0 0 1-1.075-.052l-.604-.428a1 1 0 0 0-1.398.244l-.948 1.358a1 1 0 0 0-.152.806l.8 3.323a1 1 0 0 1 .026.296l-.332 5.36a1 1 0 0 1-1.037.936l-2.127-.083a.554.554 0 0 0-.276 1.046l3.53 1.82a2 2 0 0 1 .653.54l1.24 1.574a1 1 0 0 0 1.072.339l4.158-1.244a2 2 0 0 1 1.181.011z\"/>";
const NS = 'http://www.w3.org/2000/svg';
let uid = 0;

/** Options accepted by every icon factory. */
export interface IconOptions {
  /** Convenience — sets both width and height. Default 24. */
  size?: number | string;
  /** Stroke width in SVG units. Default 1. */
  strokeWidth?: number | string;
  /** Any native SVG attribute (class, style, stroke, fill, aria-label, data-*, …). */
  [attr: string]: string | number | undefined;
}

/** Build a <HtCentre/> icon as a live SVGSVGElement (browser only). */
export function HtCentre(options: IconOptions = {}): SVGSVGElement {
  // Compliance nudge: warns once if icons render without initGeoiconsLicense().
  // Client-only + deferred inside noteIconRender.
  noteIconRender();

  const { size = 24, strokeWidth = 1, ...attrs } = options;

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', String(strokeWidth));
  svg.setAttribute('fill', 'none');

  // Forwarded native attrs override the defaults above (spread-equivalent).
  const label = attrs['aria-label'];
  for (const key in attrs) {
    const value = attrs[key];
    if (value != null) svg.setAttribute(key, String(value));
  }

  // Trusted, SVGO-optimized asset body.
  svg.innerHTML = BODY;

  if (label != null) {
    // Decorative by default; aria-label promotes to role="img" + <title>.
    const id = `geo-${uid++}-title`;
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', id);
    const title = document.createElementNS(NS, 'title');
    title.id = id;
    title.textContent = String(label);
    svg.insertBefore(title, svg.firstChild);
  } else {
    svg.setAttribute('aria-hidden', 'true');
  }

  return svg;
}
