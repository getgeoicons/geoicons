// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.589 13.879-3.673 1.227a.88.88 0 0 1-1.154-.898l.05-.69a1 1 0 0 0-.069-.447l-.452-1.124a1 1 0 0 1-.067-.47l.077-.79a1 1 0 0 1 .71-.862l1.361-.405a1 1 0 0 0 .496-.333l1.195-1.493a.5.5 0 0 1 .555-.16l.406.141a.5.5 0 0 0 .55-.153l.773-.937a.5.5 0 0 1 .482-.172l.741.145a.455.455 0 0 1 .292.699.546.546 0 0 0 .187.78l.65.362a.5.5 0 0 0 .73-.323l.494-2.136 1.315 3.116a.5.5 0 0 0 .099.15l1.81 1.902a1 1 0 0 1 .26.504l.164.873a1 1 0 0 1-.044.529l-1.06 2.897a1 1 0 0 1-.667.62l-.844.238a1 1 0 0 1-.5.011l-.762-.18a.94.94 0 0 1-.689-.659.94.94 0 0 0-.647-.649l-.586-.166a1 1 0 0 1-.397-.22l-.8-.721a1 1 0 0 0-.986-.206Zm6.078 4.487-.71.08a.5.5 0 0 0-.417.659l.264.772a.5.5 0 0 0 .521.336l.348-.033a.5.5 0 0 0 .449-.439l.097-.819a.5.5 0 0 0-.552-.556ZM10.491 4.337 10.47 2.12l2.127.522a.5.5 0 0 1 .285.191l1.645 2.258-2.47-.956a.5.5 0 0 0-.268-.027zM19.089 22.7l-.619-.165a.6.6 0 0 1-.305-.964l1.91-2.284a.6.6 0 0 0 .096-.607l-.422-1.055a.578.578 0 0 1 .894-.668l1.784 1.404a.6.6 0 0 1 .011.934l-1.221 1.01a1 1 0 0 0-.197.22l-1.276 1.927a.6.6 0 0 1-.655.249Z\"/>";
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

/** Build a <Oceania/> icon as a live SVGSVGElement (browser only). */
export function Oceania(options: IconOptions = {}): SVGSVGElement {
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
