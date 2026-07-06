// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.017 12.581c-1.012-.789-2.834-2.144-3.396-2.692-.115-.113-.115-.277-.031-.414l.945-1.567a.5.5 0 0 1 .117-.133l3.12-2.477a.5.5 0 0 0 .189-.401l-.016-.8a.5.5 0 0 1 .296-.466l.953-.425a.5.5 0 0 0 .292-.395l.13-1.037a.5.5 0 0 1 .465-.437l2.038-.127a.5.5 0 0 1 .31.085l1.04.7a.5.5 0 0 1 .196.262l.818 2.55a.5.5 0 0 1 .003.297l-.374 1.24a.5.5 0 0 0 .155.525l1.104.935a.5.5 0 0 0 .528.075l.827-.371A.5.5 0 0 0 15 7.194l.71-2.4 1.332.404-.143.5a.5.5 0 0 0 .026.348l.887 1.924a.5.5 0 0 1 .037.304l-.349 1.814a.5.5 0 0 1-.142.264l-1.119 1.088a.25.25 0 0 0 .104.42l3.474 1.03a.5.5 0 0 1 .353.41l.105.743a.5.5 0 0 0 .271.378l1.198.6a.5.5 0 0 1 .258.312l.488 1.748a.5.5 0 0 1-.039.366l-.866 1.659a.5.5 0 0 0-.054.288l.3 2.638a.5.5 0 0 1-.649.532l-3.04-.973a.5.5 0 0 1-.092-.04l-5.332-2.985a.5.5 0 0 1-.097-.072L7.57 13.762a.5.5 0 0 0-.14-.092l-2.309-1.026a.5.5 0 0 1-.104-.063Z\"/>";
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

/** Build a <Lr/> icon as a live SVGSVGElement (browser only). */
export function Lr(options: IconOptions = {}): SVGSVGElement {
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
