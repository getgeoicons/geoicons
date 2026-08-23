// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.548 13.531a.3.3 0 0 1 .352-.036l.74.435a.3.3 0 0 0 .397-.086l2.548-3.61a.6.6 0 0 0 .04-.627l-1.332-2.52a.6.6 0 0 0-.918-.177l-1.088.917a2 2 0 0 0-.622.941l-.24.78a2 2 0 0 1-.736 1.03l-.246.18a1.54 1.54 0 0 1-2.231-.465L13.113 8.42a2 2 0 0 1-.275-1.012v-1.49a1 1 0 0 0-.88-.992l-1.4-.171a1 1 0 0 1-.833-.69l-.278-.878a1 1 0 0 0-.683-.661L4.573 1.348a.6.6 0 0 0-.723.364L2.506 5.234a4 4 0 0 0-.262 1.372L2.212 9a1 1 0 0 0 .616.937l2.304.958a1 1 0 0 1 .516 1.36l-1.146 2.357a1 1 0 0 0-.032.804l.596 1.512a1 1 0 0 1-.205 1.054l-2.184 2.305a.6.6 0 0 0 .038.863l1.459 1.287a.6.6 0 0 0 .808-.013l3.655-3.445a2 2 0 0 1 1.046-.518l2.349-.388a2 2 0 0 0 1.012-.487z\"/>";
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

/** Build a <LcSoufriere/> icon as a live SVGSVGElement (browser only). */
export function LcSoufriere(options: IconOptions = {}): SVGSVGElement {
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
