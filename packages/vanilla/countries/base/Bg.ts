// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.265 17.974-4.431.51a.5.5 0 0 1-.557-.528l.1-1.576a.5.5 0 0 0-.186-.421l-1.752-1.404a.5.5 0 0 1-.176-.492l.465-2.227a.5.5 0 0 1 .245-.334l1.16-.651a.5.5 0 0 0 .175-.707L1.438 7.24a.5.5 0 0 1-.031-.485l.67-1.408a.5.5 0 0 1 .602-.262l.663.21a.5.5 0 0 1 .343.548l-.062.439a.5.5 0 0 0 .44.567l8.08.895a.5.5 0 0 0 .379-.116l1.642-1.397a.5.5 0 0 1 .273-.116l3.944-.41a.5.5 0 0 1 .224.028l3.86 1.42a.5.5 0 0 1 .328.48l-.018.86a.5.5 0 0 1-.399.48l-1.555.322a.5.5 0 0 0-.396.538l.157 1.594a.5.5 0 0 1-.169.426l-.967.842a.5.5 0 0 0-.073.675l1.279 1.721a.5.5 0 0 1-.22.764l-.895.349a.5.5 0 0 1-.516-.094l-.903-.813a.5.5 0 0 0-.541-.083l-3.213 1.463a.5.5 0 0 0-.285.54l.12.695a.5.5 0 0 1-.406.578l-3.036.53a.5.5 0 0 1-.31-.044l-1.901-.951a.5.5 0 0 0-.28-.05Z\"/>";
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

/** Build a <Bg/> icon as a live SVGSVGElement (browser only). */
export function Bg(options: IconOptions = {}): SVGSVGElement {
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
