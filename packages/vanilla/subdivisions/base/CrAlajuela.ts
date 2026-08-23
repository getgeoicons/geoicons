// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.799 6.88a1 1 0 0 0-.257-.671l-2.57-2.859a1 1 0 0 0-1.1-.266l-.415.158a1 1 0 0 1-.823-.052l-3.017-1.6a1 1 0 0 0-.999.037l-2.938 1.84a1 1 0 0 1-.899.083l-4.46-1.764a1 1 0 0 0-.5-.061l-1.292.173a1 1 0 0 0-.577.286L1.89 3.254a1 1 0 0 0-.011 1.399l1.82 1.892a1 1 0 0 0 .463.273l3.7.988a1 1 0 0 1 .614.478l.652 1.165a1 1 0 0 0 .437.412l2.509 1.212a1 1 0 0 1 .552 1.06l-.331 2.063c-.037.227.01.46.129.658l.128.21a.67.67 0 0 0 .81.28.672.672 0 0 1 .909.61l.029.957a2 2 0 0 0 .42 1.167l.803 1.032a1 1 0 0 1-.288 1.48L14 21.303a.528.528 0 0 0 .16.975l1.504.303a1 1 0 0 0 .855-.227l.708-.617a2 2 0 0 1 1.204-.49l2.357-.129a1 1 0 0 0 .512-.175l1.03-.71a1 1 0 0 0 .433-.82z\"/>";
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

/** Build a <CrAlajuela/> icon as a live SVGSVGElement (browser only). */
export function CrAlajuela(options: IconOptions = {}): SVGSVGElement {
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
