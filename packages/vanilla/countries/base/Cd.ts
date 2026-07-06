// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.979 14.225H2.113a.5.5 0 0 1-.5-.528l.06-1.063a.5.5 0 0 1 .432-.468l3.193-.43a.5.5 0 0 0 .431-.453l.145-1.704a.5.5 0 0 1 .14-.307l1.264-1.295a.5.5 0 0 0 .128-.23l1.446-5.855a.5.5 0 0 1 .663-.348l2.73 1.037a.5.5 0 0 0 .35.002l3.559-1.31a.5.5 0 0 1 .39.02l2.11 1.023a.5.5 0 0 0 .31.042l1.551-.287a.5.5 0 0 1 .52.235l1.235 2.06a.5.5 0 0 1 .014.49L19.66 9.812a.5.5 0 0 0-.029.403l1.986 5.52a.5.5 0 0 1-.358.657l-1.152.264a.5.5 0 0 0-.385.436l-.244 2.346a.5.5 0 0 0 .292.507l1.18.533a.5.5 0 0 1 .293.437l.034.928a.5.5 0 0 1-.276.466l-.642.321a.5.5 0 0 1-.595-.112l-1.8-1.993a.5.5 0 0 0-.315-.162l-4.676-.527a.5.5 0 0 1-.442-.451l-.337-3.712a.5.5 0 0 0-.4-.446l-1.562-.312a.5.5 0 0 0-.587.386l-.152.71a.5.5 0 0 1-.453.393l-1.323.096a.5.5 0 0 1-.49-.287l-.795-1.7a.5.5 0 0 0-.453-.288Z\"/>";
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

/** Build a <Cd/> icon as a live SVGSVGElement (browser only). */
export function Cd(options: IconOptions = {}): SVGSVGElement {
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
