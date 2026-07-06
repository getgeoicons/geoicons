// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.233 6.342 4.11 8.918a1 1 0 0 0-.152 1.387l.48.616a1 1 0 0 0 .598.366l2.19.426a.75.75 0 0 1 .363 1.29l-.877.801a1 1 0 0 1-.675.262H3.904a1 1 0 0 0-.745.332l-1.596 1.78a1 1 0 0 0-.22.931l.118.434a1 1 0 0 0 1.293.681l2.644-.919a.75.75 0 0 1 .877.303l.254.394a1 1 0 0 0 1.28.357l.573-.28a1 1 0 0 0 .556-.99l-.205-2.23a1 1 0 0 1 .306-.814l.684-.653a1 1 0 0 1 .856-.262l.873.146a.75.75 0 0 1 .552 1.065l-.848 1.764a1 1 0 0 0-.098.481l.062 1.302a1 1 0 0 0 .577.86l.136.062a1 1 0 0 0 1.096-.168l1.114-1.017a.75.75 0 0 1 1.134.144l1.25 1.917a1 1 0 0 0 1.413.271l.048-.034a1 1 0 0 0 .373-1.134l-.509-1.527a.75.75 0 0 1 .058-.605l1.34-2.378a1 1 0 0 1 .719-.498l.935-.144a1 1 0 0 0 .823-.767l.479-2.113q.04-.175.138-.326l.393-.603a1 1 0 0 0 .163-.546V8.72a1 1 0 0 0-.221-.627l-.951-1.182a1 1 0 0 0-.37-.285l-1.112-.498a1 1 0 0 1-.588-.823l-.076-.849a1 1 0 0 0-.977-.91l-5.05-.095a1 1 0 0 0-.451.098L7.438 6.212a1 1 0 0 0-.205.13Z\"/>";
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

/** Build a <Hk/> icon as a live SVGSVGElement (browser only). */
export function Hk(options: IconOptions = {}): SVGSVGElement {
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
