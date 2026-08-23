// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M19.362 6.372a.6.6 0 0 0-.157-.706l-2.81-2.391a1 1 0 0 0-.581-.237l-2.708-.181a1 1 0 0 0-.617.163L9.917 4.717a.8.8 0 0 1-.593.118l-.648-.126a.6.6 0 0 1-.483-.64l.175-2.039a.6.6 0 0 0-.46-.635l-.39-.092a.6.6 0 0 0-.658.285L4.967 4.88a.6.6 0 0 0 .052.673l2.949 3.691a.6.6 0 0 1-.061.815l-1.293 1.199a1 1 0 0 0-.32.696l-.203 5.555a3 3 0 0 1-.295 1.192l-1.097 2.275a.7.7 0 0 0 .21.864l.868.652a.7.7 0 0 0 .825.013l1.516-1.072a.7.7 0 0 0 .062-1.095l-.339-.301a.7.7 0 0 1-.111-.92l.888-1.288a1 1 0 0 1 .777-.431l4.193-.194a1 1 0 0 0 .924-.757l.455-1.82a2 2 0 0 1 .543-.946l1.391-1.36a1 1 0 0 0 .3-.666l.062-1.268a1 1 0 0 0-.133-.548l-.303-.525a1 1 0 0 1 .55-1.448l1.289-.432a.6.6 0 0 0 .355-.32z\"/>";
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

/** Build a <GtSanMarcos/> icon as a live SVGSVGElement (browser only). */
export function GtSanMarcos(options: IconOptions = {}): SVGSVGElement {
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
