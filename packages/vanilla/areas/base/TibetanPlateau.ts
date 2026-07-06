// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.338 10.637-.101 1.806a1 1 0 0 0 .543.947l5.7 2.914a1 1 0 0 0 .624.095l1.288-.22q.154-.025.309-.004l1.845.262a1 1 0 0 0 .745-.194l1.171-.889a1 1 0 0 1 1.336.115l.152.162a1 1 0 0 0 .87.309l1.082-.152a1 1 0 0 1 1.018.513l.734 1.352a1 1 0 0 0 1.257.45l.182-.075a1 1 0 0 0 .577-.63l.33-1.069a1 1 0 0 0-.145-.882l-.648-.896a1 1 0 0 1-.044-1.108l.337-.55a1 1 0 0 1 .493-.412l1.376-.531a.631.631 0 0 0 .125-1.112l-1.95-1.313a1 1 0 0 1-.402-.552l-.423-1.464a1 1 0 0 0-.416-.56l-1.231-.8a1 1 0 0 0-.606-.16l-1.849.113a1 1 0 0 1-.332-.036l-1.548-.437a1 1 0 0 0-.502-.01l-2.173.515a.6.6 0 0 0-.443.733l.236.923a.6.6 0 0 1-.658.744l-1.821-.235a1 1 0 0 0-.559.089l-1.631.779a1 1 0 0 1-.475.096l-2.653-.117a1 1 0 0 0-.673.222l-.677.548a1 1 0 0 0-.37.72Z\"/>";
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

/** Build a <TibetanPlateau/> icon as a live SVGSVGElement (browser only). */
export function TibetanPlateau(options: IconOptions = {}): SVGSVGElement {
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
