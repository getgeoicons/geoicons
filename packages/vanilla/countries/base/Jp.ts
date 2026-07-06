// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.012 22.33-.509-1.973a.5.5 0 0 1 .168-.512l3.495-2.857a.5.5 0 0 1 .257-.11l2.765-.333a.5.5 0 0 0 .4-.3l.735-1.724a.5.5 0 0 1 .634-.273l.778.29a.5.5 0 0 0 .573-.168l1.213-1.603a.5.5 0 0 0 .098-.247l.316-2.819a.5.5 0 0 1 .263-.386l.76-.402a.5.5 0 0 1 .692.242l.877 2.005a.5.5 0 0 1-.017.437l-.945 1.754a.5.5 0 0 0-.051.148l-.702 3.885a.5.5 0 0 1-.421.406l-3.233.465a.5.5 0 0 0-.297.157l-1.22 1.328a.5.5 0 0 1-.303.158l-3.406.448a.5.5 0 0 0-.392.293l-.812 1.835a.5.5 0 0 1-.5.296l-.774-.067a.5.5 0 0 1-.442-.373ZM18.054 3.18l-1.432-1.76a.5.5 0 0 0-.46-.179l-.099.015a.5.5 0 0 0-.42.581l.28 1.589a.5.5 0 0 1-.17.468l-1.692 1.435a.5.5 0 0 0-.174.329l-.214 1.995 2.358-1.33a.5.5 0 0 1 .444-.024l.917.394a.5.5 0 0 0 .631-.21l.46-.801a.5.5 0 0 1 .384-.249l.862-.086a.5.5 0 0 0 .45-.498V3.812a.5.5 0 0 0-.522-.5l-1.194.052a.5.5 0 0 1-.41-.184Z\"/>";
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

/** Build a <Jp/> icon as a live SVGSVGElement (browser only). */
export function Jp(options: IconOptions = {}): SVGSVGElement {
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
