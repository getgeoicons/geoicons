// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.581 8.704 1.65 10.2c-.132.212.093.465.318.359l3.794-1.786a.5.5 0 0 1 .33-.034l.845.204a.5.5 0 0 1 .374.391l.08.415a.5.5 0 0 0 .426.4l2.198.288a.5.5 0 0 1 .16.049l3.09 1.557a.5.5 0 0 1 .262.33l.334 1.398a.5.5 0 0 0 .533.382l1.336-.125a.5.5 0 0 1 .497.282l.296.618a.5.5 0 0 1-.053.518l-.808 1.065a.5.5 0 0 0 .414.802l4.173-.134a.5.5 0 0 0 .238-.07l1.597-.945a.5.5 0 0 0 .005-.857l-2.036-1.239a.5.5 0 0 1-.235-.354l-.098-.662a.5.5 0 0 0-.313-.393l-1.34-.521a.5.5 0 0 1-.178-.118l-3.064-3.153a.5.5 0 0 0-.398-.15l-1.473.115a.5.5 0 0 1-.328-.09L9.943 6.84a.5.5 0 0 0-.277-.092l-3.803-.091a.5.5 0 0 0-.28.078L2.736 8.547a.5.5 0 0 0-.156.157Z\"/><path stroke-linejoin=\"round\" d=\"m4.907 13.867.752.209a.5.5 0 0 0 .618-.357l.188-.726a.5.5 0 0 0-.354-.607l-.751-.203a.5.5 0 0 0-.614.355l-.19.72a.5.5 0 0 0 .35.61Z\"/>";
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

/** Build a <Cu/> icon as a live SVGSVGElement (browser only). */
export function Cu(options: IconOptions = {}): SVGSVGElement {
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
