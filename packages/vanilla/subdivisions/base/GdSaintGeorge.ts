// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M20.254 2.348a1 1 0 0 0-.812-.598l-4.93-.53a1 1 0 0 0-.383.034l-1.687.485a1 1 0 0 0-.602.481l-1.767 3.233a1 1 0 0 0 .164 1.18l.82.834a1 1 0 0 1 .18 1.15L10.695 9.7a1 1 0 0 0-.1.565l.473 4.067a1.5 1.5 0 0 1-.632 1.404l-.575.4a1.5 1.5 0 0 1-.838.27l-1.036.014a1 1 0 0 0-.713.313l-.884.934a1 1 0 0 1-.369.247l-3.057 1.171a.786.786 0 0 0 .16 1.512l2.368.368q.195.03.386-.015l.826-.197a1 1 0 0 1 .757.121l2.57 1.585a1 1 0 0 0 1.088-.024l1.649-1.125a1 1 0 0 0 .397-.547l.241-.832a1 1 0 0 1 1.667-.43l1.28 1.276a.6.6 0 0 0 .267.154l1.708.461a.6.6 0 0 0 .722-.377l.264-.74a.6.6 0 0 0-.1-.58L18.15 18.39a3 3 0 0 1-.361-.561l-1.046-2.107a1 1 0 0 1 .278-1.231l.502-.395a1 1 0 0 0 .376-.897l-.3-2.689a1 1 0 0 1 .407-.921l2.144-1.552a1 1 0 0 0 .383-.564l.632-2.497a1 1 0 0 0-.052-.642z\"/>";
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

/** Build a <GdSaintGeorge/> icon as a live SVGSVGElement (browser only). */
export function GdSaintGeorge(options: IconOptions = {}): SVGSVGElement {
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
