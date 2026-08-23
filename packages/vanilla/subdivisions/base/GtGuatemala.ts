// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.423 3.58a.8.8 0 0 1-.598-.62l-.2-.998a.8.8 0 0 0-.918-.632l-5.365.913a2 2 0 0 0-.593.2l-1.56.819a1 1 0 0 0-.524.731l-.118.759a1 1 0 0 1-.264.536L3.846 6.796a.6.6 0 0 0-.06.755l.444.643a.6.6 0 0 0 .526.258l1.046-.055a1 1 0 0 1 .91.485l.916 1.532a1 1 0 0 1-.46 1.43l-.276.12a1 1 0 0 0-.594.793l-.245 1.956a1 1 0 0 0 .348.89L7.99 16.94a1 1 0 0 1 .342.923l-.295 1.847a1 1 0 0 0 .018.403l.5 1.972a.6.6 0 0 0 .843.393l1.398-.68a1 1 0 0 0 .509-.573l.544-1.584a1 1 0 0 1 .283-.424l1.4-1.238a1 1 0 0 0 .294-.458l.678-2.222a.6.6 0 0 1 .48-.418l2.636-.414a1 1 0 0 0 .76-.586l1.885-4.304a.6.6 0 0 0-.274-.774l-2.467-1.27a1 1 0 0 1-.536-.778l-.244-2.18a1 1 0 0 0-.76-.86z\"/>";
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

/** Build a <GtGuatemala/> icon as a live SVGSVGElement (browser only). */
export function GtGuatemala(options: IconOptions = {}): SVGSVGElement {
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
