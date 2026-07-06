// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.296 10.526-.912.378a.58.58 0 0 0-.116 1.007l.572.41a1 1 0 0 1 .389.577l.175.72a1 1 0 0 0 .422.6l1.098.723a1 1 0 0 0 .426.157l1.012.127a1 1 0 0 0 .634-.132l.797-.472a1 1 0 0 1 .987-.018l.118.064a.93.93 0 0 1 .385 1.242l-.028.056a.83.83 0 0 0 1.063 1.14l.545-.232a1 1 0 0 1 .942.086l.403.266a1 1 0 0 0 .835.124l.96-.285a1 1 0 0 0 .33-.17l1.01-.785a1 1 0 0 0 .32-.427l.34-.876a1 1 0 0 0-.047-.828l-.565-1.075a.6.6 0 0 1 .175-.762l.414-.306a.6.6 0 0 1 .93.31l.19.624a.6.6 0 0 0 .852.358l.513-.268a.6.6 0 0 0 .29-.726l-.235-.683a1 1 0 0 1 .294-1.082l1.057-.91A1 1 0 0 0 19.173 9l.255-.814-1.705-.03a1 1 0 0 1-.836-.48l-.382-.626a1 1 0 0 0-.8-.479l-.296-.016a1 1 0 0 0-.964.586l-.031.069a1 1 0 0 1-.81.583l-2.03.206a1 1 0 0 1-.452-.058l-1.939-.728a1.01 1.01 0 0 0-1.094.268c-.25.276-.637.392-.997.298l-.636-.167a1 1 0 0 0-.576.02l-1.04.355a1 1 0 0 0-.203.095l-1.244.768a1 1 0 0 0-.466.717l-.023.17a1 1 0 0 1-.608.79Zm16.663 2.887-.447.524a.6.6 0 0 0-.024.749l.157.21a.6.6 0 0 0 .75.176l2.136-1.076a1 1 0 0 0 .5-.584l.91-2.793a.6.6 0 0 0-.144-.608l-.383-.387a.6.6 0 0 0-1.02.331l-.172 1.128a1 1 0 0 1-.068.239l-.449 1.058a1 1 0 0 1-.686.581l-.534.129a1 1 0 0 0-.526.323Z\"/>";
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

/** Build a <NortheastAsia/> icon as a live SVGSVGElement (browser only). */
export function NortheastAsia(options: IconOptions = {}): SVGSVGElement {
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
