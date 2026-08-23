// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.428 14.462a.3.3 0 0 0 .114.455l2.58 1.18q.291.133.608.169l3.512.395a1 1 0 0 1 .864.775l.93 4.137a.8.8 0 0 0 .682.618l2.837.351a.8.8 0 0 0 .883-.637l.275-1.377a1 1 0 0 1 .418-.63l1.182-.806a1 1 0 0 0 .433-.915l-.088-.984a2 2 0 0 1 .352-1.32l1.9-2.728a1 1 0 0 1 .386-.329l.704-.34a2 2 0 0 0 1.126-1.672l.217-3.392a1 1 0 0 1 .303-.655l.745-.72a.6.6 0 0 0 .037-.825l-2.781-3.206a1 1 0 0 0-.628-.337l-1.812-.233a1 1 0 0 0-.887.34l-.447.522a1 1 0 0 1-.854.344l-2.278-.217a1 1 0 0 0-.982.534l-.978 1.88a1 1 0 0 1-.386.404l-3.53 2.04a.3.3 0 0 0-.07.464L8.5 9.597a1 1 0 0 1 .207 1.013l-.663 1.872a1 1 0 0 1-.769.65l-2.058.365a1 1 0 0 1-.794-.2L3.35 12.45a.3.3 0 0 0-.424.053z\"/>";
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

/** Build a <NiMasaya/> icon as a live SVGSVGElement (browser only). */
export function NiMasaya(options: IconOptions = {}): SVGSVGElement {
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
