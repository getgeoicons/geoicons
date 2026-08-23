// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.298 1.432a2 2 0 0 0-.938-.23l-6.103.023a.6.6 0 0 0-.598.586l-.068 3.044a1 1 0 0 1-.802.958l-2.428.489a1 1 0 0 0-.785 1.166l.066.351a1 1 0 0 0 .567.724l.734.335a1 1 0 0 1 .58.819l.162 1.782a1 1 0 0 0 .656.85l1.146.413a1 1 0 0 1 .66.934l.016 2.031a1 1 0 0 1-.474.858l-3.166 1.958a2 2 0 0 0-.858 1.108l-.195.626a2 2 0 0 0-.05.994l.098.474a1 1 0 0 0 1.27.757L10 20.9a1 1 0 0 0 .71-.956l.004-3.143a1 1 0 0 1 .348-.757l4.667-4.013a2 2 0 0 0 .456-.566l1.198-2.22a2 2 0 0 1 .894-.853l1.358-.653a1 1 0 0 0 .395-1.462l-2.204-3.25a2 2 0 0 0-.724-.647z\"/>";
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

/** Build a <HnIntibuca/> icon as a live SVGSVGElement (browser only). */
export function HnIntibuca(options: IconOptions = {}): SVGSVGElement {
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
