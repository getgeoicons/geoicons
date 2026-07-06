// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.703 15.337 2.163 2.911a1 1 0 0 0 .599.383l1.905.397a1 1 0 0 1 .625.42l1.659 2.465a1 1 0 0 0 1.442.232l3.987-3.088a.6.6 0 0 0-.278-1.068l-1.025-.154a1 1 0 0 1-.844-1.106l.013-.112a1 1 0 0 1 .562-.785l.891-.426a1 1 0 0 0 .513-.57l1.075-3.065a1 1 0 0 1 .398-.506l4.305-2.804a1 1 0 0 0 .316-1.346l-.401-.68a1 1 0 0 0-.845-.492l-2.982-.05a.6.6 0 0 1-.587-.652l.076-.888a1 1 0 0 0-.366-.862l-1.297-1.053a1 1 0 0 0-.384-.193l-3.841-.976a1 1 0 0 0-.542.014l-4.43 1.37a.6.6 0 0 0-.353.854l.45.849a1 1 0 0 1-.383 1.334l-.436.252a1 1 0 0 0-.446.544l-1.683 4.947a1 1 0 0 0-.053.322v2.985a1 1 0 0 0 .197.597Z\"/>";
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

/** Build a <GibsonDesert/> icon as a live SVGSVGElement (browser only). */
export function GibsonDesert(options: IconOptions = {}): SVGSVGElement {
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
