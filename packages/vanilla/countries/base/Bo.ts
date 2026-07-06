// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.589 13.534 2.486 8.46a.5.5 0 0 0 .797.246l1.154-.945a.5.5 0 0 1 .37-.11l1.918.205a.5.5 0 0 1 .308.152l1.007 1.053a.25.25 0 0 0 .375-.014l.911-1.117a.5.5 0 0 1 .376-.183l.81-.018a.5.5 0 0 0 .463-.34l1.152-3.404a.5.5 0 0 1 .387-.333l3.385-.595a.5.5 0 0 1 .346.065l1.318.8a.25.25 0 0 0 .362-.12l.855-2.126a.5.5 0 0 0-.092-.522l-1.05-1.166a.5.5 0 0 1-.128-.344l.018-.947a.5.5 0 0 0-.485-.509l-2.094-.064a.5.5 0 0 1-.483-.451l-.3-3.108a.5.5 0 0 0-.29-.406L9.627 4.545a.5.5 0 0 1-.29-.445L9.29 1.735a.5.5 0 0 0-.544-.488l-1.094.096a.5.5 0 0 0-.244.089L5.551 2.735a.5.5 0 0 1-.228.087l-2.35.282a.25.25 0 0 0-.186.375l1.155 1.945a.5.5 0 0 1 .048.402L2.92 9.314a.5.5 0 0 0 .03.37l.806 1.612a.5.5 0 0 1-.06.54l-1.015 1.24a.5.5 0 0 0-.092.458Z\"/>";
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

/** Build a <Bo/> icon as a live SVGSVGElement (browser only). */
export function Bo(options: IconOptions = {}): SVGSVGElement {
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
