// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.713 2.898a.6.6 0 0 0-.585-.463H1.863a.6.6 0 0 0-.597.66l.141 1.399a.6.6 0 0 0 .626.54l2.75-.132a1 1 0 0 1 .741.28l1.774 1.71a1 1 0 0 0 1.052.215l2.394-.916a1 1 0 0 1 1.039.202l2.876 2.675a1 1 0 0 1 .306.898l-.386 2.29a2 2 0 0 0 .06.917l.303.987q.134.436.364.834l1.516 2.614c.22.38.5.72.831 1.008l1.036.904a1 1 0 0 1 .285.419l.276.778a1 1 0 0 0 1.177.637l.789-.19a1 1 0 0 0 .746-.777l.772-3.878a1 1 0 0 0-.082-.633l-1.567-3.215a1 1 0 0 1-.09-.588l.16-1.045a1 1 0 0 0-.076-.556l-.91-2.048a11 11 0 0 1-.678-2.045l-.577-2.559a.6.6 0 0 0-.386-.433l-.712-.25a.6.6 0 0 0-.766.368l-.126.362a.6.6 0 0 1-.604.402l-6.946-.423a.6.6 0 0 1-.548-.462z\"/>";
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

/** Build a <UsFlorida/> icon as a live SVGSVGElement (browser only). */
export function UsFlorida(options: IconOptions = {}): SVGSVGElement {
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
