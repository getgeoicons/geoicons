// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.49 12.607a1 1 0 0 0 .398.68l2.167 1.6q.218.161.403.358l1.833 1.95c.287.305.62.563.986.764l3.482 1.917 3.435 2.542a.6.6 0 0 0 .862-.159l2.472-3.861a1 1 0 0 0 .085-.915l-.696-1.716a3 3 0 0 1-.212-1.341l.022-.302a1 1 0 0 1 .844-.917l.637-.099a.6.6 0 0 0 .508-.591l.011-5.075a.6.6 0 0 0-.504-.594l-2.239-.362a1 1 0 0 1-.832-.86l-.28-2.175a1 1 0 0 0-.736-.84l-5.003-1.317a.6.6 0 0 0-.601.182l-1.49 1.68a4 4 0 0 0-.643.988L6.495 8.299a2 2 0 0 1-.68.812L3.77 10.526a1 1 0 0 0-.423.948z\"/>";
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

/** Build a <NiCarazo/> icon as a live SVGSVGElement (browser only). */
export function NiCarazo(options: IconOptions = {}): SVGSVGElement {
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
