// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.165 10.626 2.69 13.903a1 1 0 0 0-.313.778l.186 3.631a.6.6 0 0 0 .348.514l.948.439a.6.6 0 0 0 .592-.05l1.25-.858a.6.6 0 0 1 .86.196l1.848 3.224a1 1 0 0 0 1.5.277l.376-.307a1 1 0 0 0 .364-.855l-.15-1.872a1 1 0 0 1 .29-.787l.814-.814a.6.6 0 0 0-.034-.88l-.85-.73a1 1 0 0 1-.328-.548l-.401-1.86a1 1 0 0 1 .045-.57l1.61-4.17a1 1 0 0 1 .84-.634l.306-.029a1 1 0 0 1 .96.5l.324.566a1 1 0 0 1 .019.957l-1.08 2.078a1 1 0 0 0-.101.62l.315 1.969a1 1 0 0 0 .616.77l.847.34a.6.6 0 0 0 .616-.104l1.485-1.287a1 1 0 0 1 .723-.242l1.183.08a.6.6 0 0 0 .516-.232l1.868-2.429a1 1 0 0 0 .207-.61V9.09a1 1 0 0 0-.77-.974l-1.152-.27a1 1 0 0 1-.488-.276l-1.217-1.25a.6.6 0 0 1 .44-1.018l2.2.032a1 1 0 0 0 .962-.678l.07-.21a1 1 0 0 0-.596-1.258l-1.892-.707a1 1 0 0 0-.314-.062l-2.34-.085a1 1 0 0 1-.366-.083l-2.035-.892a1 1 0 0 0-.73-.03l-2.01.7a1 1 0 0 0-.419.28l-2.43 2.733A1 1 0 0 0 8 5.396l-1.57 4.812a1 1 0 0 1-.265.418Z\"/>";
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

/** Build a <Fennoscandia/> icon as a live SVGSVGElement (browser only). */
export function Fennoscandia(options: IconOptions = {}): SVGSVGElement {
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
