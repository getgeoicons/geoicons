// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.762 5.022 1.2 5.163 2.354 9.07a.5.5 0 0 0 .101.185l3.401 3.929a.5.5 0 0 0 .792-.047l.166-.244a.5.5 0 0 0-.009-.574l-3.28-4.542a.5.5 0 0 1 .124-.706l.147-.1a.5.5 0 0 1 .677.107l4.718 6.097a.5.5 0 0 1 .104.297l.029 1.57a.5.5 0 0 0 .273.436l5.562 2.838a.5.5 0 0 0 .392.026l1.086-.38a.5.5 0 0 1 .434.052l1.527.975 1.032-1.994 1.275-.02a.5.5 0 0 0 .44-.277l1.258-2.528a.25.25 0 0 0-.243-.361l-2.065.16a.5.5 0 0 0-.45.39l-.217.978a.5.5 0 0 1-.4.384l-2.254.403a.5.5 0 0 1-.5-.21l-1.497-2.178a.5.5 0 0 1-.083-.35l.326-2.442a.5.5 0 0 0-.341-.542l-.798-.259a.5.5 0 0 1-.272-.214l-1.376-2.242a.5.5 0 0 0-.675-.172l-.597.342a.5.5 0 0 1-.61-.089L8.82 5.956a.5.5 0 0 0-.381-.155l-2.791.111a.5.5 0 0 1-.18-.025l-2.5-.841a.5.5 0 0 0-.205-.024Z\"/>";
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

/** Build a <Mx/> icon as a live SVGSVGElement (browser only). */
export function Mx(options: IconOptions = {}): SVGSVGElement {
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
