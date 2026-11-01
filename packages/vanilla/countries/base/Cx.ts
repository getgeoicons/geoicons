// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.37 14.784 1.008-.955a1 1 0 0 1 .755-.273l2.002.134a2 2 0 0 1 1.056.387l.24.178a2 2 0 0 0 1.001.383l2.264.214a2 2 0 0 1 1.443.834l.073.104a3 3 0 0 1 .55 1.581l.08 1.556c.017.329.088.653.21.959l.247.616a1.44 1.44 0 0 0 1.458.902l.965-.08a.93.93 0 0 0 .84-1.08l-.114-.69a2 2 0 0 1-.014-.557l.178-1.547c.038-.332.159-.65.351-.923l.496-.704a1 1 0 0 0 .166-.76l-.172-.92a2 2 0 0 1 .375-1.58l1.258-1.65a2 2 0 0 1 1.05-.712l.873-.246a1 1 0 0 0 .726-1.042l-.173-2.161a1 1 0 0 0-.1-.364l-.723-1.462a2 2 0 0 1-.185-1.186l.078-.51a.564.564 0 0 0-.618-.645l-1.975.212a2 2 0 0 0-1.283.66l-.793.894a2 2 0 0 0-.421.758l-.137.461a3 3 0 0 1-.775 1.286l-.159.156a3 3 0 0 1-.869.594L11.952 8.8a3 3 0 0 1-.818.236l-.462.065a3 3 0 0 1-1.446-.155L6.45 7.928a2 2 0 0 1-1.059-.905l-.166-.298a1 1 0 0 0-.305-.336l-.392-.27a.75.75 0 0 0-1.177.613l-.004.842a1 1 0 0 0 .285.705l.36.368a1.83 1.83 0 0 1 .302 2.145l-.424.786a2 2 0 0 1-.443.556l-1.375 1.203a.98.98 0 1 0 1.319 1.447Z\"/>";
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

/** Build a <Cx/> icon as a live SVGSVGElement (browser only). */
export function Cx(options: IconOptions = {}): SVGSVGElement {
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
