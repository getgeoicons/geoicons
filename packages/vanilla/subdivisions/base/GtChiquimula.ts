// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.276 8.778a.6.6 0 0 0 .407.661l1.07.35a.6.6 0 0 1 .396.421l.557 2.181a1 1 0 0 1-.044.628L2.27 16.401a1 1 0 0 0-.06.55l.072.421a.6.6 0 0 0 .818.454l1.063-.434a.6.6 0 0 1 .802.384l.377 1.268a.6.6 0 0 0 .878.347l1.311-.768a.6.6 0 0 1 .623.01l.885.558a1 1 0 0 1 .416 1.162l-.344 1.031a.6.6 0 0 0 .733.767l2.455-.693a1 1 0 0 1 .742.08l1.248.664a.6.6 0 0 0 .879-.462l.18-1.572a1 1 0 0 1 .262-.57l3.02-3.227a1 1 0 0 1 .806-.314l1.768.136a1 1 0 0 0 1.07-.878l.483-4.038a1 1 0 0 0-.151-.659L19.97 6.516a1 1 0 0 1-.155-.455l-.075-.886a1 1 0 0 1 .359-.855l.965-.8a1 1 0 0 0 .242-1.245l-.137-.254a1 1 0 0 0-.754-.517l-.329-.041a1 1 0 0 0-.965.45l-.863 1.334a1 1 0 0 1-.852.458l-6.257-.076a1 1 0 0 0-.59.184L9.098 4.849a1 1 0 0 1-.632.182l-4.784-.26a1 1 0 0 0-.707.241l-1.016.877a1 1 0 0 0-.336.607z\"/>";
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

/** Build a <GtChiquimula/> icon as a live SVGSVGElement (browser only). */
export function GtChiquimula(options: IconOptions = {}): SVGSVGElement {
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
