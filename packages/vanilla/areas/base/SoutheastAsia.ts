// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.246 4.562 1.364 6.36a1 1 0 0 0-.07.693L1.76 8.84a1 1 0 0 0 .614.683l.244.092a1 1 0 0 1 .626.738l.697 3.464-1.25-.297a.523.523 0 0 0-.502.866l4.486 4.776a1 1 0 0 0 .55.3l5.157.934 2.194.588a1 1 0 0 0 .709-.074l1.318-.664a.25.25 0 0 0 .02-.435l-1.5-.945a.9.9 0 0 1-.29-.29l-.08-.126a.731.731 0 0 1 .859-1.08l1.089.375q.075.025.151.04l2.15.38q.075.015.146.038l1.314.444a1 1 0 0 1 .552.459l.646 1.153a1 1 0 0 0 .692.494l.152.028a.25.25 0 0 0 .295-.246l-.009-2.443a1 1 0 0 0-.786-.973l-3.724-.815a1 1 0 0 1-.618-.423l-.013-.018a1 1 0 0 0-1.216-.37l-.688.286a1 1 0 0 1-.338.075l-1.413.067a.954.954 0 0 1-.543-1.767l.562-.344a1 1 0 0 1 .932-.059l.313.14a.934.934 0 0 0 1.294-1.051l-.381-1.739a1 1 0 0 0-.418-.614l-.68-.459a1 1 0 0 1-.441-.81l-.01-.532a.774.774 0 0 0-1.535-.124l-.075.416a1 1 0 0 0 .002.369l.239 1.231a1 1 0 0 1-.112.684l-1.09 1.926a1 1 0 0 1-.161.212l-1.396 1.404a1 1 0 0 1-.362.232l-.764.284a1 1 0 0 0-.646.82l-.053.453a.828.828 0 0 1-1.162.659l-.096-.043a.98.98 0 0 1-.561-.73l-.368-2.206a1 1 0 0 0-.194-.445l-.786-1.023a1 1 0 0 1-.186-.403l-.195-.927a.541.541 0 0 1 .95-.452l.566.701a1 1 0 0 0 1.323.21l.463-.3a1 1 0 0 0 .455-.839v-.404a1 1 0 0 0-.123-.48l-.214-.39a1 1 0 0 0-.175-.232l-.592-.583a.92.92 0 0 1-.082-1.215l.016-.02a.885.885 0 0 0-1.12-1.322l-.77.413a1 1 0 0 1-1.2-.195l-.308-.326a1 1 0 0 1-.234-.962l.22-.764a.726.726 0 0 0-1.23-.695l-.654.7a1 1 0 0 0-.166.242Z\"/>";
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

/** Build a <SoutheastAsia/> icon as a live SVGSVGElement (browser only). */
export function SoutheastAsia(options: IconOptions = {}): SVGSVGElement {
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
