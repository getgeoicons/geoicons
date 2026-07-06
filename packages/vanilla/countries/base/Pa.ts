// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.538 10.325-3.323-2.41a.5.5 0 0 0-.261-.093l-.736-.048a.5.5 0 0 0-.532.517l.087 2.3a.5.5 0 0 1-.046.23l-.493 1.062a.5.5 0 0 0-.024.358l.451 1.455 1.114-.931a.5.5 0 0 1 .42-.107l2.294.466a.5.5 0 0 1 .347.263l.563 1.105a.5.5 0 0 0 .323.258l1.613.406a.5.5 0 0 1 .36.356l.249.93a.5.5 0 0 0 .656.34l2.617-.963a.5.5 0 0 0 .194-.809l-1.431-1.541a.5.5 0 0 1 .075-.747l3.592-2.567a.5.5 0 0 1 .527-.033l3.17 1.704a.5.5 0 0 1 .218.649l-.524 1.146a.5.5 0 0 0 .035.48l1.5 2.315a.5.5 0 0 0 .784.07l2.287-2.437a.5.5 0 0 0 .11-.5l-.814-2.458a.5.5 0 0 0-.143-.217L19.6 8.929a.5.5 0 0 0-.181-.103l-5.365-1.692a.5.5 0 0 0-.55.176l-.847 1.122a.5.5 0 0 1-.171.144l-3.865 1.98a.5.5 0 0 1-.289.052l-1.561-.191a.5.5 0 0 1-.233-.092Z\"/>";
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

/** Build a <Pa/> icon as a live SVGSVGElement (browser only). */
export function Pa(options: IconOptions = {}): SVGSVGElement {
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
