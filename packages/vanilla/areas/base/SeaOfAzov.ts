// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.269 14.565-3.44-2.15a.758.758 0 0 1 .562-1.384l2.855.62a1 1 0 0 0 .546-.035l1.718-.609q.133-.047.249-.13l1.374-.987a1 1 0 0 1 .519-.186l2.925-.19a1 1 0 0 0 .362-.093l2.796-1.32a1 1 0 0 1 .447-.096l1.867.038q.106.001.21-.019l1.857-.36a1 1 0 0 0 .375-.156l.338-.232a1 1 0 0 1 1.523.534l.085.283a1 1 0 0 1-.882 1.288l-.652.049a1 1 0 0 0-.18.03l-3.698.975a.6.6 0 0 0-.375.866l.126.233a1 1 0 0 0 .408.407l1.873 1a.735.735 0 0 1-.635 1.324l-.602-.257a1 1 0 0 0-1.195.322l-.771 1.036a1 1 0 0 0-.195.518l-.05.634a1 1 0 0 1-.915.918l-.362.03a1 1 0 0 1-.674-.191l-.966-.71a1 1 0 0 0-.525-.193l-2.094-.142a1 1 0 0 0-.428.065l-1.91.738a1 1 0 0 1-.788-.03l-.662-.313a1 1 0 0 1-.568-.991l.018-.198a1 1 0 0 0-.466-.936Z\"/>";
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

/** Build a <SeaOfAzov/> icon as a live SVGSVGElement (browser only). */
export function SeaOfAzov(options: IconOptions = {}): SVGSVGElement {
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
