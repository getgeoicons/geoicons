// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.918 3.282a1 1 0 0 0-.792-.268l-1.065.111a2 2 0 0 0-1.414.82L5.22 5.927a2 2 0 0 1-.679.593l-1.18.632a2 2 0 0 0-.475.355L1.57 8.83a.6.6 0 0 0-.048.79l.609.784a1 1 0 0 1 .151.95l-.158.442a1 1 0 0 0 .373 1.16l1.144.79a2 2 0 0 1 .681.812l1.186 2.583a2 2 0 0 1 .173 1.03l-.124 1.26a1 1 0 0 0 .295.81l.45.443a.6.6 0 0 0 .765.062l1.215-.853a2 2 0 0 1 .914-.349l1.982-.235c.291-.034.586-.005.864.088l2.109.698a2 2 0 0 0 1.557-.127l4.165-2.182a2 2 0 0 0 1.068-1.647l.034-.545a1 1 0 0 1 .332-.684l.683-.61a2 2 0 0 0 .666-1.42l.106-2.938a2 2 0 0 0-.767-1.648l-2.33-1.821a2 2 0 0 0-.997-.41L17.37 5.91a2 2 0 0 1-.808-.28l-.937-.571a1 1 0 0 0-1.037-.004l-1.06.638a1 1 0 0 1-1.204-.13z\"/>";
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

/** Build a <DmSaintJoseph/> icon as a live SVGSVGElement (browser only). */
export function DmSaintJoseph(options: IconOptions = {}): SVGSVGElement {
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
