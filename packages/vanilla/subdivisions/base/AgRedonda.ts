// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.324 17.35 6.83 20.775a1 1 0 0 0 .27 1.163l.017.014a2 2 0 0 0 1.327.474l1.102-.018a3 3 0 0 0 1.13-.242l.203-.087a2.66 2.66 0 0 0 1.6-2.192l.051-.54a1 1 0 0 1 .492-.77l.609-.355a2.87 2.87 0 0 0 1.426-2.525l-.029-1.942a2 2 0 0 1 .133-.747l.481-1.253a2 2 0 0 0 .128-.577l.248-3.54a2 2 0 0 1 .37-1.026l.51-.708a2.28 2.28 0 0 0-.22-2.923l-.112-.114a2.6 2.6 0 0 0-1.284-.72l-1.76-.401a2 2 0 0 0-1.5.25l-.739.459c-.43.267-.818.598-1.149.982l-.34.395a5 5 0 0 0-1.04 1.957l-.262.962a5 5 0 0 0-.16.935l-.405 5.382a2 2 0 0 0 .077.719l.448 1.512a3 3 0 0 1-.127 2.053Z\"/>";
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

/** Build a <AgRedonda/> icon as a live SVGSVGElement (browser only). */
export function AgRedonda(options: IconOptions = {}): SVGSVGElement {
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
