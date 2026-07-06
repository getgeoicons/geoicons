// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.3 22.747-3.458-.377a.6.6 0 0 1-.512-.762l1.181-4.111a1 1 0 0 0 .022-.46l-.73-3.903a1 1 0 0 1 .059-.569l.653-1.567a1 1 0 0 0 .07-.508l-.262-2.096a1 1 0 0 1 .125-.62l.999-1.748a1 1 0 0 0 .1-.246l.563-2.182a1 1 0 0 0 .032-.25v-.773a1 1 0 0 1 .51-.872l.184-.103a1 1 0 0 1 1.245.217l.653.753a1 1 0 0 1 .243.709l-.072 1.35a1 1 0 0 0 .483.91l.576.347a1 1 0 0 1 .413.487L12.425 9q.069.174.07.362l.024 2.942q.002.175.063.34l.582 1.565a1 1 0 0 0 1.343.565l1.094-.485a1 1 0 0 1 1.077.173l2.247 2.036a1 1 0 0 1 .314.574l.58 3.425a1 1 0 0 1-.058.54l-.395.985a.6.6 0 0 1-.913.26l-.714-.527a1 1 0 0 0-.907-.145l-1.017.335a1 1 0 0 1-1.062-.286l-.15-.17a1 1 0 0 0-.72-.337l-3.778-.108a1 1 0 0 0-.982.698l-.187.59a.6.6 0 0 1-.637.415Z\"/>";
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

/** Build a <CapeYorkPeninsula/> icon as a live SVGSVGElement (browser only). */
export function CapeYorkPeninsula(options: IconOptions = {}): SVGSVGElement {
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
