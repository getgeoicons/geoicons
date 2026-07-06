// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.728 18.043-.71.97a.6.6 0 0 0 0 .709l1.89 2.586a.6.6 0 0 0 .845.126l.527-.398a1 1 0 0 1 .635-.2l2.36.077a1 1 0 0 0 .654-.216l.586-.466a1 1 0 0 0 .286-.362l.487-1.05a1 1 0 0 1 .547-.512l1.039-.401a1 1 0 0 0 .639-.98l-.255-5.356a1 1 0 0 0-.075-.334l-1.269-3.072a1 1 0 0 1-.076-.395l.034-2.578q0-.081-.011-.161l-.546-3.64c-5.327-.089-9.46-.83-10.862-1.19l1.15 3.545a1 1 0 0 0 .795.68l.413.065a1 1 0 0 1 .638.38l.927 1.21a1 1 0 0 1 .2.497l.74 6.587a1 1 0 0 1-.23.757l-.91 1.076a1 1 0 0 0-.235.62l-.02.86a1 1 0 0 1-.193.566Z\"/>";
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

/** Build a <GreatPlainsUs/> icon as a live SVGSVGElement (browser only). */
export function GreatPlainsUs(options: IconOptions = {}): SVGSVGElement {
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
