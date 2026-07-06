// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.45 13.515-1.18.475a.5.5 0 0 0-.12.86l3.186 2.472a.5.5 0 0 1 .12.656l-.367.598a.5.5 0 0 0 .117.654l1.56 1.229a.5.5 0 0 0 .332.107l.972-.045a.5.5 0 0 0 .398-.77l-.972-1.516a.5.5 0 0 1-.064-.393l.39-1.538a.5.5 0 0 0-.192-.528l-1.908-1.381a.5.5 0 0 1-.207-.42l.047-1.623a.5.5 0 0 0-.448-.512l-.634-.065a.5.5 0 0 0-.542.404l-.183.965a.5.5 0 0 1-.304.37Zm-5.848-2.641L1.565 9.78a.5.5 0 0 1 .042-.727l.787-.66a.5.5 0 0 1 .687.04l1.055 1.131a.5.5 0 0 1-.06.737l-.806.623a.5.5 0 0 1-.668-.051Zm15.072-3.895-2.37-1.988a.5.5 0 0 1 .008-.772l.723-.583a.5.5 0 0 1 .554-.049l2.692 1.478a.5.5 0 0 1 .12.784l-1.045 1.093a.5.5 0 0 1-.682.037Zm4.884.163-.327.525a.5.5 0 0 1-.685.162l-.665-.407a.5.5 0 0 1-.159-.699l.375-.579a.5.5 0 0 1 .72-.128l.616.462a.5.5 0 0 1 .125.664Z\"/>";
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

/** Build a <Sc/> icon as a live SVGSVGElement (browser only). */
export function Sc(options: IconOptions = {}): SVGSVGElement {
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
