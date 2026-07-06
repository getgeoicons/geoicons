// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.566 22.089H2.59a.5.5 0 0 1-.5-.502l.045-14.52a.5.5 0 0 0-.028-.165L1.5 5.164a.5.5 0 0 1 .023-.383l.51-1.045a.5.5 0 0 0 .031-.353l-.3-1.078a.5.5 0 0 1 .09-.446l.351-.442a.5.5 0 0 1 .449-.185l2.861.33a.5.5 0 0 1 .102.023L9.863 3.01a.5.5 0 0 0 .373-.022l3.282-1.555a.5.5 0 0 1 .402-.012l2.688 1.088a.5.5 0 0 0 .288.027l2.467-.503a.5.5 0 0 1 .574.332l1.158 3.475a.5.5 0 0 1 .006.298l-.764 2.632a.5.5 0 0 1-.922.095l-1.94-3.664a.5.5 0 0 0-.842-.065l-.28.376a.5.5 0 0 0-.044.53l5.846 11.255q.038.073.05.155l.319 2.07a.5.5 0 0 1-.176.463l-3.145 2.593a.5.5 0 0 1-.568.048l-.82-.472a.5.5 0 0 0-.249-.066Z\"/>";
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

/** Build a <Eg/> icon as a live SVGSVGElement (browser only). */
export function Eg(options: IconOptions = {}): SVGSVGElement {
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
