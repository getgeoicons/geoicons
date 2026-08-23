// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.807 3.81a.3.3 0 0 0-.49-.185l-1.274 1.077a1.5 1.5 0 0 1-.653.321l-.666.144a1.5 1.5 0 0 1-1.073-.172l-1.112-.65a1.5 1.5 0 0 0-.633-.2l-6.747-.557a1 1 0 0 0-.8.301L3.833 5.463a3 3 0 0 1-.755.566l-1.607.848a.3.3 0 0 0-.122.412l1.613 2.877a.97.97 0 0 1 .044.862 5.8 5.8 0 0 0-.481 2.248l-.004.33a5.6 5.6 0 0 0 .345 2.007l.191.52a.6.6 0 0 0 .639.388l.968-.122A3.39 3.39 0 0 1 8 18.028l.226.38a.67.67 0 0 0 1.235-.452l-.228-1.372a1 1 0 0 1 .187-.764l.797-1.061a1 1 0 0 1 .906-.394l1.216.13a1 1 0 0 1 .88 1.157l-.08.483a1 1 0 0 1-.755.81l-.546.13a1 1 0 0 0-.587.398l-.053.075a1 1 0 0 0 .23 1.382l.858.626a1 1 0 0 0 1.047.081l.611-.314a1 1 0 0 1 1.062.092l1.423 1.078a1 1 0 0 0 .682.2l1.377-.108a1 1 0 0 0 .71-.38l.312-.4a1 1 0 0 1 .802-.384l.544.008a.808.808 0 0 0 .613-1.349l-.803-.894a.667.667 0 0 1 .808-1.034l.064.034c.32.17.714.082.932-.206l.083-.11a.9.9 0 0 0 .163-.726l-.047-.223a1 1 0 0 0-.336-.56l-.646-.542a5 5 0 0 1-1.381-1.856l-.185-.43a5 5 0 0 1-.353-1.242z\"/>";
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

/** Build a <AgSaintPaul/> icon as a live SVGSVGElement (browser only). */
export function AgSaintPaul(options: IconOptions = {}): SVGSVGElement {
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
