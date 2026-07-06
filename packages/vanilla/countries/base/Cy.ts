// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.35 17.75-2.083-.892a.5.5 0 0 1-.251-.238L1.45 13.45a.25.25 0 0 1 .292-.351l1.745.495a.5.5 0 0 0 .528-.17l.68-.854a.5.5 0 0 1 .497-.178l1.45.314a.5.5 0 0 0 .541-.242l.355-.625a.5.5 0 0 0 .05-.375l-.32-1.209a.25.25 0 0 1 .313-.303l2.682.793a.5.5 0 0 0 .174.02l2.86-.186a.5.5 0 0 0 .195-.054l8.238-4.203a.5.5 0 0 1 .634.155l.118.165a.5.5 0 0 1-.154.722l-4.226 2.48a.5.5 0 0 0-.11.086l-.705.744a.5.5 0 0 1-.34.155l-.572.026a.5.5 0 0 0-.434.297l-.268.603a.5.5 0 0 0 .071.52l1.683 2.046a.25.25 0 0 1-.176.408l-1.666.118a.5.5 0 0 1-.294-.071l-.519-.315a.5.5 0 0 0-.388-.055l-.643.171a.5.5 0 0 0-.364.396l-.152.862a.5.5 0 0 1-.323.383l-4.44 1.595a.5.5 0 0 1-.338 0l-1.227-.438a.5.5 0 0 0-.378.017l-.762.353a.5.5 0 0 1-.407.006Z\"/>";
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

/** Build a <Cy/> icon as a live SVGSVGElement (browser only). */
export function Cy(options: IconOptions = {}): SVGSVGElement {
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
