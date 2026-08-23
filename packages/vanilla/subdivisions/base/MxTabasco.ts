// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.41 12.277-.14-1.378a1 1 0 0 1 .558-1l3.318-1.613a1 1 0 0 1 .477-.1l3.414.136a1 1 0 0 0 .696-.244L11.1 6.892a1 1 0 0 1 1.071-.155l1.908.872a.6.6 0 0 1 .35.545l.002 1.557a1 1 0 0 0 .585.91l3.34 1.525v-1.799l4.19 1.67a.3.3 0 0 1 .189.275l.061 4.928a.3.3 0 0 1-.306.304l-2.227-.047a1 1 0 0 1-.78-.402l-2.424-3.25a1 1 0 0 0-.706-.397l-.542-.052a1.5 1.5 0 0 0-.676.092l-1.788.68c-.216.082-.41.214-.568.384l-1.754 1.898a.6.6 0 0 1-.862.02l-.995-.982a1 1 0 0 1-.294-.795l.117-1.413a.8.8 0 0 0-.553-.829l-.931-.298a.8.8 0 0 0-1.03.611l-.307 1.602a2 2 0 0 1-.206.577l-.729 1.343a.595.595 0 0 1-1.097-.13l-.42-1.568A1 1 0 0 0 3.311 14l-1.469-.995a1 1 0 0 1-.434-.727Z\"/>";
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

/** Build a <MxTabasco/> icon as a live SVGSVGElement (browser only). */
export function MxTabasco(options: IconOptions = {}): SVGSVGElement {
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
