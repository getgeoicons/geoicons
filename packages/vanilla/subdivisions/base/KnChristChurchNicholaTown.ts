// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.728 17.762-2.413-2.707a.3.3 0 0 1-.007-.391l5.81-6.989a1 1 0 0 0 .23-.599l.077-1.91a1 1 0 0 1 .614-.883l.732-.306a1 1 0 0 0 .603-.772l.077-.506a1 1 0 0 1 .687-.802l2.2-.697 7.033 3.617a1 1 0 0 1 .4.374l.842 1.399a1 1 0 0 1 .085.852l-.21.589a1 1 0 0 1-.84.658l-.504.051a1 1 0 0 0-.63.314l-1.732 1.86a1 1 0 0 0-.264.585l-.122 1.255a1 1 0 0 1-.24.557l-1.737 2.008a2 2 0 0 0-.467 1.019l-.407 2.776a2 2 0 0 0 .069.884l.473 1.52q.043.141.018.285l-.076.42a.6.6 0 0 1-.682.486l-1.913-.296a2 2 0 0 1-.414-.11l-7.19-2.77a.3.3 0 0 1-.189-.32l.16-1.212a.3.3 0 0 0-.073-.239Z\"/>";
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

/** Build a <KnChristChurchNicholaTown/> icon as a live SVGSVGElement (browser only). */
export function KnChristChurchNicholaTown(options: IconOptions = {}): SVGSVGElement {
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
