// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.813 16.868-2.482-4.846a.5.5 0 0 1 .023-.496l.38-.599a.5.5 0 0 1 .78-.081l.794.81a1.5 1.5 0 0 0 1.257.44l1.057-.132a.5.5 0 0 0 .438-.507l-.12-5.48 1.602 3.058 1.443-.565a.5.5 0 0 0 .256-.224l.56-1.017a.5.5 0 0 1 .536-.249l2.358.472a.5.5 0 0 0 .554-.285l.415-.924a.5.5 0 0 1 .12-.164l3.747-3.422a.5.5 0 0 1 .343-.13l2.552.028a.5.5 0 0 1 .47.344l.628 1.914a.5.5 0 0 1 .024.12l.203 2.804-.784-.127a.5.5 0 0 0-.568.386l-.166.757a.5.5 0 0 0 .49.607l1.483-.01a.5.5 0 0 1 .496.583l-.24 1.448a.5.5 0 0 1-.093.216l-3.268 4.38-.055.061-3.299 3.162a.5.5 0 0 1-.181.111l-2.865 1a.5.5 0 0 1-.175.027l-3.363-.067a.5.5 0 0 0-.186.032l-2.88 1.088a.5.5 0 0 1-.431-.038l-1.567-.928a.5.5 0 0 1-.207-.239l-.68-1.641a.5.5 0 0 1 .063-.492l.493-.657a.5.5 0 0 0 .045-.528Z\"/>";
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

/** Build a <Za/> icon as a live SVGSVGElement (browser only). */
export function Za(options: IconOptions = {}): SVGSVGElement {
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
