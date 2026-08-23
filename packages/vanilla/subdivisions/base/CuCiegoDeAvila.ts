// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.784 10.307a.95.95 0 0 0-.647-.873l-3.62-1.208a2 2 0 0 1-1.108-.911l-.184-.325a2 2 0 0 0-.906-.832l-7.2-3.302a2 2 0 0 0-.741-.18l-1.979-.091a1 1 0 0 0-.959.59L2.963 8.7a.6.6 0 0 0 .243.763l1.283.755a.6.6 0 0 1 .28.65l-.356 1.557a.6.6 0 0 1-.612.466l-.674-.031a.6.6 0 0 0-.591.394l-1.141 3.13a.6.6 0 0 0 .327.756l2.334.999a.6.6 0 0 1 .339.724l-.319 1.06a.3.3 0 0 0 .344.38l3.81-.729a1 1 0 0 1 .866.247L10.373 21a1 1 0 0 0 1.086.177l2.79-1.248a2 2 0 0 0 .715-.54l2.837-3.38a.6.6 0 0 1 .878-.043l.508.495a.6.6 0 0 0 .795.037l.88-.709a.6.6 0 0 0 .076-.861L19.59 13.38a.6.6 0 0 1 .18-.929l2.499-1.276a.95.95 0 0 0 .516-.87Z\"/>";
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

/** Build a <CuCiegoDeAvila/> icon as a live SVGSVGElement (browser only). */
export function CuCiegoDeAvila(options: IconOptions = {}): SVGSVGElement {
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
