// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.762 9.96a.6.6 0 0 0-.329-.593l-4.592-2.304a1 1 0 0 0-1.01.066l-.614.417a.6.6 0 0 1-.382.101l-1.207-.09a.6.6 0 0 1-.525-.785l.254-.779a.6.6 0 0 0-.184-.645l-1.457-1.227a1 1 0 0 0-.767-.227l-2.877.356a.6.6 0 0 0-.508.742l.11.437a3 3 0 0 1 .067 1.112l-.364 2.847q-.057.452-.216.88l-.769 2.08a1 1 0 0 1-.689.622l-.51.131a1 1 0 0 1-.787-.126l-1.421-.909a.6.6 0 0 0-.729.064l-1.474 1.352a.6.6 0 0 0 .089.952l3.964 2.465a1 1 0 0 1 .413.512l.639 1.78a1 1 0 0 0 .957.663l4.092-.066a4 4 0 0 1 .652.043l1.892.281a.6.6 0 0 0 .533-.191l3.95-4.381a1 1 0 0 0 .254-.743l-.14-1.906a1 1 0 0 1 .371-.853l1.395-1.119a.6.6 0 0 1 .448-.127l.765.093a.6.6 0 0 0 .67-.54z\"/>";
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

/** Build a <SvSonsonate/> icon as a live SVGSVGElement (browser only). */
export function SvSonsonate(options: IconOptions = {}): SVGSVGElement {
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
