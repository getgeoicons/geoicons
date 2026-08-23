// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.93 2.606a1 1 0 0 0-.898.388L4.282 5.29a2 2 0 0 0-.392.954l-.855 6.56a1 1 0 0 1-.455.715l-.913.582a.8.8 0 0 0-.353.84l.537 2.55a.8.8 0 0 0 .575.609l2.782.747c.314.085.613.22.885.401l4.488 2.992a1 1 0 0 0 .605.167l3.993-.203a.6.6 0 0 0 .52-.837l-1.368-3.158a2 2 0 0 1-.162-.887l.11-2.376a2 2 0 0 1 .326-1.006l.863-1.312a2 2 0 0 1 .915-.753l.437-.178a2 2 0 0 1 1.468-.017l.374.143a1 1 0 0 0 .954-.132l2.703-2.014a1 1 0 0 0 .392-.95l-.166-1.11a1 1 0 0 0-.935-.85l-3.011-.162a1 1 0 0 1-.935-.852l-.287-1.925a.6.6 0 0 0-.276-.42l-.725-.452a.6.6 0 0 0-.823.187l-.164.256a.8.8 0 0 1-1.057.273l-3.19-1.735a.8.8 0 0 0-1.061.28l-.154.247a.8.8 0 0 1-.762.373z\"/>";
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

/** Build a <DoSantiagoRodriguez/> icon as a live SVGSVGElement (browser only). */
export function DoSantiagoRodriguez(options: IconOptions = {}): SVGSVGElement {
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
