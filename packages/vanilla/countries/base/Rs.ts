// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.097 1.245-2.269.985a.5.5 0 0 0-.293.55l.716 3.869a.5.5 0 0 0 .128.252l.777.822a.5.5 0 0 1 .095.543l-.696 1.603a.5.5 0 0 0-.01.372l1.052 2.867a.5.5 0 0 1-.053.45l-.667.999a.5.5 0 0 0 .148.699l3.361 2.136a.5.5 0 0 1 .15.695l-.653 1.003a.5.5 0 0 0-.004.54l1.667 2.648a.5.5 0 0 0 .771.093l1.152-1.116a.5.5 0 0 1 .303-.139l4.148-.372a.5.5 0 0 0 .455-.509l-.039-1.904a.5.5 0 0 1 .212-.419l1.563-1.106a.5.5 0 0 0 .107-.714l-2.048-2.654 1.16-3.732a.5.5 0 0 0-.083-.455l-.314-.404a.5.5 0 0 0-.663-.115l-.96.61a.5.5 0 0 1-.396.06l-1.61-.429a.5.5 0 0 1-.37-.518l.124-1.761a.5.5 0 0 0-.247-.467l-2.003-1.168a.5.5 0 0 1-.188-.195L9.83 1.55a.5.5 0 0 0-.42-.262l-2.093-.083a.5.5 0 0 0-.22.04Z\"/>";
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

/** Build a <Rs/> icon as a live SVGSVGElement (browser only). */
export function Rs(options: IconOptions = {}): SVGSVGElement {
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
