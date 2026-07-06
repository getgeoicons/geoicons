// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.299 20.933-1.142 1.631a.5.5 0 0 1-.453.211l-.388-.033a.5.5 0 0 1-.415-.296l-.396-.895a.5.5 0 0 0-.423-.297l-2.508-.171a.5.5 0 0 1-.464-.465l-.055-.806a.5.5 0 0 1 .351-.512l.566-.175a.5.5 0 0 0 .312-.281l1.304-3.056a.5.5 0 0 0-.194-.62l-.627-.393a.392.392 0 0 0-.566.17.392.392 0 0 1-.576.163l-1.893-1.274a.5.5 0 0 1-.034-.804l.376-.303a.5.5 0 0 0 .172-.507l-.574-2.373A.5.5 0 0 1 2.9 9.3l.882-.532a.5.5 0 0 0 .239-.484l-.075-.668a.5.5 0 0 1 .17-.433l1.252-1.082a.5.5 0 0 0 .172-.406l-.104-1.911a.5.5 0 0 1 .357-.507l2.306-.685a.5.5 0 0 0 .204-.119L9.359 1.46a.5.5 0 0 1 .595-.073l3.83 2.188a.5.5 0 0 1 .243.527l-.036.194a.5.5 0 0 0 .388.582l2.36.494a.5.5 0 0 0 .387-.078l.727-.503a.5.5 0 0 1 .535-.02l2.37 1.372a.488.488 0 0 1 .12.745.49.49 0 0 0-.047.584l.826 1.306a.5.5 0 0 1-.232.729l-.447.185a.5.5 0 0 0-.2.15l-3.834 4.82a.5.5 0 0 1-.192.148l-5.214 2.258a.5.5 0 0 0-.285.332l-.88 3.373a.5.5 0 0 1-.074.16Z\"/>";
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

/** Build a <Ec/> icon as a live SVGSVGElement (browser only). */
export function Ec(options: IconOptions = {}): SVGSVGElement {
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
