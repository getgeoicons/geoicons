// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.693 20.935a.3.3 0 0 0 .398.337l2.778-1.014a.3.3 0 0 1 .4.244l.224 1.745a.577.577 0 0 0 1.006.306l3.03-3.473a1 1 0 0 0 .228-.46l.433-2.147a1 1 0 0 1 .577-.717l1.376-.607a1 1 0 0 0 .557-.637l1.577-5.444a1 1 0 0 1 .301-.473l1.642-1.442a.8.8 0 0 0 .269-.677l-.102-1.079a.8.8 0 0 1 .553-.838l2.12-.674a.793.793 0 0 0-.088-1.534l-4.08-.801a11 11 0 0 0-1.923-.204l-7.317-.131a1 1 0 0 0-.996.795l-.58 2.77a1 1 0 0 1-.486.666l-.877.495a1 1 0 0 0-.483.647l-.226.985a1 1 0 0 0 .052.608l.408.978a1 1 0 0 1-.055.88l-1.198 2.102a4 4 0 0 0-.515 1.689l-.381 5.203a.3.3 0 0 0 .212.309l1.13.342a.3.3 0 0 1 .207.343z\"/>";
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

/** Build a <GtChimaltenango/> icon as a live SVGSVGElement (browser only). */
export function GtChimaltenango(options: IconOptions = {}): SVGSVGElement {
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
