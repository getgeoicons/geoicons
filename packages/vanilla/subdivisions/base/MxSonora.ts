// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.11 3.028a.6.6 0 0 0 .351.544L7.16 5.708a1 1 0 0 1 .585.866l.038.842a3 3 0 0 0 .291 1.163l2.242 4.68a4 4 0 0 0 .606.916l2.345 2.662a1 1 0 0 0 .52.312l1.006.238a1 1 0 0 1 .769.988l-.01.67a1 1 0 0 0 .348.774l3.075 2.643a1 1 0 0 0 .896.211l.287-.072a1 1 0 0 0 .569-.387l.819-1.144a1 1 0 0 0 .08-1.03l-1.55-3.096a.6.6 0 0 1 .409-.855l.64-.138a.6.6 0 0 0 .455-.73l-.598-2.425a3 3 0 0 1-.07-1.043l.294-2.698a3 3 0 0 0-.062-1.014l-.499-2.112a.6.6 0 0 0-.586-.462l-5.64.025a3 3 0 0 1-1.041-.182L2.912 1.495a.6.6 0 0 0-.806.565z\"/>";
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

/** Build a <MxSonora/> icon as a live SVGSVGElement (browser only). */
export function MxSonora(options: IconOptions = {}): SVGSVGElement {
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
