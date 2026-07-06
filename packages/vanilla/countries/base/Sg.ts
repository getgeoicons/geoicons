// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.271 14.68-.06 2.275a.5.5 0 0 0 .354.492l.624.19a.5.5 0 0 0 .644-.507l-.093-1.652a.5.5 0 0 1 .488-.528l.235-.005a.5.5 0 0 1 .477.317l.662 1.687 2.88-1.97 3.5 1.697a.5.5 0 0 0 .562-.086l2.464-2.329a.5.5 0 0 1 .213-.12l3.421-.923a.5.5 0 0 1 .257-.001l1.195.313a.5.5 0 0 0 .587-.289l.75-1.764a.5.5 0 0 1 .237-.252l1.54-.768a1 1 0 0 0 .551-.842l.02-.38a1 1 0 0 0-.216-.677l-.246-.307a1 1 0 0 0-.304-.255l-.602-.327a1 1 0 0 0-.51-.121l-.873.028a.5.5 0 0 0-.365.176l-.642.754a.5.5 0 0 1-.49.163l-2.367-.535a.5.5 0 0 0-.186-.006l-1.524.23a.5.5 0 0 1-.355-.08l-3-2.029a.5.5 0 0 0-.307-.085l-.804.045a.5.5 0 0 0-.292.115l-1.33 1.103a.5.5 0 0 1-.49.086l-1.36-.495a.5.5 0 0 0-.413.032l-1.692.936a.5.5 0 0 0-.212.229l-2.882 6.27a.5.5 0 0 0-.046.196Z\"/>";
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

/** Build a <Sg/> icon as a live SVGSVGElement (browser only). */
export function Sg(options: IconOptions = {}): SVGSVGElement {
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
