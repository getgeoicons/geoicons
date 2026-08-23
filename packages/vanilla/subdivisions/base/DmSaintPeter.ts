// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.563 9.369a.6.6 0 0 0-.52-.472l-3.21-.356a1.97 1.97 0 0 1-1.65-1.328l-.177-.524a1 1 0 0 0-.445-.544l-1.467-.854a4 4 0 0 0-.917-.39l-1.462-.415a3 3 0 0 1-.974-.482L8.27 2.159a3 3 0 0 0-1.516-.583l-3.447-.322a1 1 0 0 0-.908.415l-.293.412a1 1 0 0 0-.185.605l.032 1.297a2 2 0 0 0 .122.638L3.74 9.168a3 3 0 0 1 .07 1.848l-.45 1.591a2 2 0 0 0 .153 1.473l1.785 3.404q.298.568.47 1.188l1.002 3.63a.55.55 0 0 0 .939.222l2.887-3.19q.111-.122.255-.203l2.3-1.282a2 2 0 0 0 .808-.837l1.357-2.658q.134-.261.336-.473l1.424-1.489a2 2 0 0 1 1.476-.617l2.781.043a.6.6 0 0 0 .596-.725z\"/>";
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

/** Build a <DmSaintPeter/> icon as a live SVGSVGElement (browser only). */
export function DmSaintPeter(options: IconOptions = {}): SVGSVGElement {
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
