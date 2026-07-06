// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.076 8.09-.681 2.194a1 1 0 0 1-.327.481l-1.914 1.548a1 1 0 0 0-.153.153l-.742.928a1 1 0 0 0-.17.314l-.226.693a1 1 0 0 0 .3 1.07l.86.738a1 1 0 0 1 .323.53l.305 1.295a1 1 0 0 0 .37.568l1.469 1.113a1 1 0 0 1 .246.27l.746 1.204a1 1 0 0 0 .116.152l1.033 1.117a1 1 0 0 0 .78.32l3.512-.161a1 1 0 0 0 .689-.32l.979-1.06a1 1 0 0 0 .197-.316l.524-1.346a1 1 0 0 0 .068-.374l-.038-3.327a1 1 0 0 1 .226-.644l.768-.942a1 1 0 0 0 .197-.394l1.005-4.101q.037-.153.027-.31l-.193-2.675a1 1 0 0 1 .196-.67l1.438-1.925a1 1 0 0 0 .175-.382l.1-.452a1 1 0 0 0-.038-.562l-.217-.59a1 1 0 0 0-.308-.431l-.28-.228a1 1 0 0 0-.996-.155l-.892.35a1 1 0 0 1-.458.065l-2.028-.188a1 1 0 0 0-.53.096l-1.688.82a1 1 0 0 1-.272.087l-2.457.41a1 1 0 0 0-.434.184L8.45 4.16a1 1 0 0 0-.402.828l.073 2.78a1 1 0 0 1-.044.322Z\"/>";
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

/** Build a <YucatanPeninsula/> icon as a live SVGSVGElement (browser only). */
export function YucatanPeninsula(options: IconOptions = {}): SVGSVGElement {
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
