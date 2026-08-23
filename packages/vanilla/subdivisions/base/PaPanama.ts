// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.585 8.832a.6.6 0 0 0-.023.812l1.235 1.42a.6.6 0 0 0 .773.113l.597-.376a2 2 0 0 1 1.102-.308l2.64.048a2 2 0 0 1 .689.135l2.362.918a2 2 0 0 1 .945.763l.349.529a2 2 0 0 0 .482.508l2.527 1.863a2 2 0 0 1 .757 1.139l.296 1.22q.06.253.184.481l.712 1.317a.75.75 0 0 0 1.387-.545l-1.175-4.546a1 1 0 0 1 .162-.841l.306-.419a1 1 0 0 1 .709-.403l1.97-.194a1 1 0 0 0 .757-.476l1.21-1.99a1 1 0 0 0 .073-.896l-.16-.392a1 1 0 0 0-.694-.597l-3.107-.74a2 2 0 0 1-.823-.415l-.706-.593a2 2 0 0 0-.952-.44l-1.7-.29a3 3 0 0 0-1.436.108l-2.286.749a2 2 0 0 1-.784.093l-2.16-.175a1 1 0 0 1-.64-.304l-1.7-1.772a.6.6 0 0 0-.418-.184l-1.052-.026a.6.6 0 0 0-.603.48l-.553 2.712a1 1 0 0 1-.263.497z\"/>";
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

/** Build a <PaPanama/> icon as a live SVGSVGElement (browser only). */
export function PaPanama(options: IconOptions = {}): SVGSVGElement {
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
