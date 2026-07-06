// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m16.467 20.561-3.953 2.093a.5.5 0 0 1-.528-.037l-2.292-1.664a.5.5 0 0 1-.18-.243l-.976-2.863a.5.5 0 0 1 .036-.402l1.484-2.696a.5.5 0 0 0-.127-.632l-1.228-.977a.5.5 0 0 1-.18-.485l.272-1.424a.5.5 0 0 0-.484-.594l-1.814-.025a.5.5 0 0 1-.373-.175L4.709 8.782a.5.5 0 0 1-.11-.427l.302-1.45a.5.5 0 0 1 .285-.355l2.12-.95a.5.5 0 0 0 .229-.705l-.678-1.187a.5.5 0 0 1 .135-.65l2.196-1.632a.5.5 0 0 1 .604.005l3.016 2.325a.5.5 0 0 1 .195.404l-.025 1.546a.5.5 0 0 0 .464.507l1.403.1a.5.5 0 0 1 .304.132l1.768 1.643a.5.5 0 0 1 .154.436l-.324 2.327a.5.5 0 0 1-.337.405l-1.315.438a.5.5 0 0 0-.326.35l-.505 1.961a.5.5 0 0 0 .046.365l.862 1.576a.5.5 0 0 0 .315.245l1.17.299a.5.5 0 0 1 .3.22l1.97 3.165a.5.5 0 0 1-.462.762l-1.726-.132a.5.5 0 0 0-.272.056Z\"/>";
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

/** Build a <Gy/> icon as a live SVGSVGElement (browser only). */
export function Gy(options: IconOptions = {}): SVGSVGElement {
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
