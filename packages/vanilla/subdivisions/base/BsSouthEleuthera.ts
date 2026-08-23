// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.533 1.218a.6.6 0 0 0-.452.16l-2.176 2.033a1 1 0 0 0-.307.585l-.558 3.787a1 1 0 0 0 .215.777l1.127 1.383a1 1 0 0 1-.019 1.285l-.262.305-.602.637a1.93 1.93 0 0 1-2.22.422l-1.51-.709a3 3 0 0 1-.775-.524l-1.32-1.236a.714.714 0 0 0-1.167.748l.668 2.003a1 1 0 0 0 .632.632l1.16.388a5 5 0 0 1 1.757 1.023l.545.49a5 5 0 0 1 1.325 1.926l.534 1.39c.145.379.336.739.569 1.071l1.79 2.563a1 1 0 0 0 .807.428l.374.005a.6.6 0 0 0 .588-.753l-.694-2.643a3 3 0 0 0-.53-1.076l-.803-1.034a2 2 0 0 1-.412-1.062l-.036-.429a2 2 0 0 1 .25-1.143l2.216-3.944c.215-.383.343-.808.376-1.246l.055-.746a3 3 0 0 0-.074-.922l-.68-2.84a2 2 0 0 1 .017-.997l.536-1.95a.6.6 0 0 0-.536-.758z\"/>";
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

/** Build a <BsSouthEleuthera/> icon as a live SVGSVGElement (browser only). */
export function BsSouthEleuthera(options: IconOptions = {}): SVGSVGElement {
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
