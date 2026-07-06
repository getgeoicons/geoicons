// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.31 14.15-1.217.404a.5.5 0 0 1-.605-.25l-1.203-2.408a.5.5 0 0 1-.037-.351l.283-1.066a.5.5 0 0 1 .402-.365l1.68-.277a.5.5 0 0 0 .39-.66l-.595-1.686a.5.5 0 0 1 .295-.634L6.786 5.69a.5.5 0 0 1 .416.027L9.737 7.09a.5.5 0 0 0 .444.016l1.661-.75a.5.5 0 0 1 .365-.018l2.202.74a.5.5 0 0 0 .467-.08l.92-.718a.5.5 0 0 1 .593-.017l1.48 1.027a.5.5 0 0 1 .137.679l-.564.888a.5.5 0 0 1-.177.168l-1.5.844a.5.5 0 0 0-.24.55l.2.86a.5.5 0 0 1-.006.255l-.179.607a.5.5 0 0 1-.327.335l-.966.31a.5.5 0 0 0-.346.44l-.097 1.36a.5.5 0 0 1-.345.44l-.935.303a.5.5 0 0 1-.653-.46l-.018-.55a.5.5 0 0 0-.174-.363l-.77-.66a.5.5 0 0 0-.662.01l-.61.554a.5.5 0 0 0-.13.193L9.071 15.2a.5.5 0 0 1-.44.323l-.206.011a.5.5 0 0 1-.514-.379l-.494-1.998a.5.5 0 0 0-.283-.338l-.923-.408a.5.5 0 0 0-.602.157l-1.058 1.408a.5.5 0 0 1-.242.174Zm12.261 1.485-1.003.706a.5.5 0 0 1-.156.073l-.948.258a.5.5 0 0 0-.309.72l.266.492a.5.5 0 0 0 .416.262l4.197.198 2.608.033a.5.5 0 0 0 .375-.838l-.334-.363a.5.5 0 0 0-.283-.155l-3.007-.515a.5.5 0 0 1-.217-.094l-1.016-.767a.5.5 0 0 0-.589-.01Z\"/>";
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

/** Build a <Asia/> icon as a live SVGSVGElement (browser only). */
export function Asia(options: IconOptions = {}): SVGSVGElement {
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
