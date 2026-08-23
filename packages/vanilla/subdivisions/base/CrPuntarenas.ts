// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.915 8.847 1.75 8.59a1 1 0 0 1-.133-.313l-.26-1.102a.853.853 0 0 1 1.007-1.03l1.149.241a1 1 0 0 1 .647.458l.138.226a1 1 0 0 1-.133 1.214L3.476 9a1 1 0 0 1-1.56-.152Zm3.76-3.189-1.439-.8a.6.6 0 0 1-.164-.915l.962-1.124a.6.6 0 0 1 .674-.169l.78.306a1 1 0 0 1 .563.557l.576 1.426a2 2 0 0 1 .128.483l.23 1.715A1 1 0 0 0 8.904 8l1.785.13a1 1 0 0 1 .578.237l3.4 2.912a1 1 0 0 0 1.508-.244l.047-.079a1 1 0 0 1 .89-.483l.883.03a1 1 0 0 1 .738.363l.895 1.085q.12.145.285.238l2.037 1.13a.6.6 0 0 1 .046 1.02l-.484.33a1 1 0 0 0-.35 1.234l.061.138a2 2 0 0 1 .05 1.507l-.182.49a1 1 0 0 0-.05.5l.335 2.157a.543.543 0 0 1-1.016.338l-.91-1.714a2 2 0 0 1-.216-.664l-.219-1.58a1 1 0 0 0-.423-.687l-.934-.643a.6.6 0 0 0-.6-.047l-.08.039a.6.6 0 0 0-.224.895l.503.686a1 1 0 0 1 .19.5l.016.17a.6.6 0 0 1-.776.628l-.825-.257a2 2 0 0 1-.804-.479l-.76-.743a.6.6 0 0 1-.12-.694l.472-.958a2 2 0 0 0 .122-1.453l-.165-.557a2 2 0 0 0-.762-1.062l-2.763-1.957a3 3 0 0 0-1.018-.465L8.22 9.54a2 2 0 0 1-.987-.58l-.287-.31a2 2 0 0 1-.494-.956L6.17 6.329a1 1 0 0 0-.494-.671Z\"/>";
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

/** Build a <CrPuntarenas/> icon as a live SVGSVGElement (browser only). */
export function CrPuntarenas(options: IconOptions = {}): SVGSVGElement {
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
