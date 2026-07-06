// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.312 7.985-.471-2.361a.5.5 0 0 1 .647-.573l1.108.366a.5.5 0 0 1 .335.383l.363 1.938a.5.5 0 0 1-.462.591l-1 .058a.5.5 0 0 1-.52-.402Zm1.744 4.04-.348-1.767a.25.25 0 0 1 .398-.246l1.838 1.424a.25.25 0 0 1-.049.425l-1.14.522a.5.5 0 0 1-.699-.358Zm3.564 4.665-.642-.779a.5.5 0 0 1 .091-.722l.604-.44a.5.5 0 0 1 .693.1l.652.857a.5.5 0 0 1-.144.733l-.614.363a.5.5 0 0 1-.64-.112ZM9.345 3.557 9.155 1.8a.5.5 0 0 1 .468-.553l.324-.019a.5.5 0 0 1 .524.424l.264 1.734a.5.5 0 0 1-.44.572L9.897 4a.5.5 0 0 1-.552-.443Zm3.635 5.646-.55-3.44a.5.5 0 0 0-.536-.42l-.327.029a.5.5 0 0 0-.451.579l.56 3.421a.5.5 0 0 0 .51.42l.316-.01a.5.5 0 0 0 .477-.58Zm.76 3.985h-.653a.5.5 0 0 1-.496-.435l-.067-.515a.5.5 0 0 1 .48-.565l.603-.017a.5.5 0 0 1 .503.391l.118.532a.5.5 0 0 1-.488.608Zm1.965 9.151-1.454-3.125a.5.5 0 0 1 .283-.68l.518-.188a.5.5 0 0 1 .622.257l1.443 3.065a.5.5 0 0 1-.233.662l-.506.247a.5.5 0 0 1-.673-.239Z\"/>";
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

/** Build a <Vu/> icon as a live SVGSVGElement (browser only). */
export function Vu(options: IconOptions = {}): SVGSVGElement {
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
