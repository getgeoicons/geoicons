// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.087 4.018-.595-1.95a.595.595 0 0 0-1.163.225l.304 3.567a1 1 0 0 1-.015.272l-.377 1.976a1 1 0 0 0-.016.251l.113 1.79a1 1 0 0 1-.027.306l-.49 1.96a1 1 0 0 0-.03.255l.064 5.066.217 1.423a1 1 0 0 0 .043.176l.54 1.566a1 1 0 0 0 .157.287l.644.828a1 1 0 0 0 .442.324l.975.36a1 1 0 0 0 .552.041l1.158-.242a.58.58 0 0 0 .015-1.134l-.617-.146a1 1 0 0 1-.717-.658l-.185-.556a.6.6 0 0 1 .068-.52l.477-.723a.6.6 0 0 0-.037-.71l-.187-.229a.6.6 0 0 1-.135-.35l-.02-.387a.6.6 0 0 1 .37-.584l.323-.135a.6.6 0 0 0 .33-.343l.88-2.34a.6.6 0 0 1 .51-.386l.784-.067a1 1 0 0 0 .647-.315l.06-.064a.6.6 0 0 0 .144-.55l-.133-.55a.627.627 0 0 1 .819-.738l.338.12a.6.6 0 0 0 .618-.135l.272-.263a.6.6 0 0 0-.032-.892l-.99-.827a.6.6 0 0 1 .02-.938l1.7-1.296a.6.6 0 0 0 .222-.608l-.063-.282a.6.6 0 0 0-.56-.468l-2.805-.117a1 1 0 0 1-.52-.172l-1.161-.79a1 1 0 0 0-.722-.16l-1.539.249a.6.6 0 0 1-.67-.417Z\"/>";
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

/** Build a <SouthernSouthAmerica/> icon as a live SVGSVGElement (browser only). */
export function SouthernSouthAmerica(options: IconOptions = {}): SVGSVGElement {
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
