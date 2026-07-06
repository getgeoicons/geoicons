// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.428 8.324.55 1.645a.84.84 0 0 1-.275.92.84.84 0 0 0-.248.988l.813 1.88a1 1 0 0 0 .727.584l.356.069a1 1 0 0 1 .802.859l.387 3.137a1 1 0 0 0 .183.464l1.486 2.05a.783.783 0 0 0 1.414-.388l.217-2.353a1 1 0 0 1 .193-.505l.325-.437a1 1 0 0 0 .185-.441l.475-3.02a.707.707 0 0 1 1.363-.134l.669 1.825c.069.188.08.392.031.586l-.243.973a1 1 0 0 0 .582 1.164l.429.18a1 1 0 0 0 1.232-.384l.69-1.086a1 1 0 0 0 .02-1.04l-2.429-4.166a1 1 0 0 0-.197-.242L9.516 9.977a1 1 0 0 1-.175-.206l-.173-.27a.848.848 0 0 1 1.128-1.196l2.16 1.212a1 1 0 0 0 .74.096l1.427-.37a1 1 0 0 0 .629-.492l1.024-1.89a1 1 0 0 0 .12-.532l-.052-.912a1 1 0 0 0-.707-.9l-.75-.23a1 1 0 0 1-.446-.28l-.603-.657a1 1 0 0 0-1.305-.147l-.82.566a1 1 0 0 1-1.35-.199l-.03-.037a1 1 0 0 0-1.488-.083l-.218.218a1 1 0 0 0-.276.527l-.086.465a1 1 0 0 1-.899.816l-.708.06a1 1 0 0 0-.64.308l-.553.581a1 1 0 0 1-.851.303l-1.952-.25a1 1 0 0 0-1.085.708l-.16.536a1 1 0 0 0 .01.602Zm19.415-4.411-.656.383a.885.885 0 0 0 .871 1.54l.666-.364a.895.895 0 1 0-.881-1.559Z\"/>";
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

/** Build a <Sj/> icon as a live SVGSVGElement (browser only). */
export function Sj(options: IconOptions = {}): SVGSVGElement {
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
