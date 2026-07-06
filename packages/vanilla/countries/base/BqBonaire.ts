// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.523 5.662.606 1.634a1 1 0 0 0 .408.501l.731.457a1 1 0 0 0 .634.146l1.85-.195a1 1 0 0 1 .306.015l2.34.483a1 1 0 0 1 .374.161l1.697 1.193a1 1 0 0 1 .325.381l1.152 2.375a1 1 0 0 1 .1.436v.839a1 1 0 0 1-.213.618l-.66.84a1 1 0 0 0 .01 1.247l.074.093q.123.152.18.339l.293.966c.04.135.053.277.035.417l-.133 1.041a1 1 0 0 0 .518 1.007l.194.105a1 1 0 0 1 .413.418l.258.494a1 1 0 0 0 .251.31l.574.47a1 1 0 0 0 .94.18l.247-.08a1 1 0 0 0 .577-.482l.393-.739a1 1 0 0 0 .116-.469v-.786q0-.158-.048-.309l-.32-.986a1 1 0 0 0-.485-.576l-.311-.164a1 1 0 0 1-.506-1.118l.136-.568a.8.8 0 0 1 1.42-.293l.146.194a1 1 0 0 0 1.38.213l.418-.298a1 1 0 0 0 .382-.543l.187-.665a1 1 0 0 0-.02-.604l-1.047-2.957a1 1 0 0 1 .03-.74l.618-1.387a1 1 0 0 0 .061-.633l-.03-.134a1 1 0 0 0-.916-.773l-1.912-.114a1 1 0 0 1-.195-.03l-3.16-.833a1 1 0 0 1-.28-.12L9.809 4.207a1 1 0 0 1-.316-.319l-.976-1.572a1 1 0 0 0-.519-.417l-1.456-.51a1 1 0 0 0-.981.186l-1.098.943a1 1 0 0 0-.301.453l-.653 2.037a1 1 0 0 0 .015.653Z\"/><path stroke-linejoin=\"round\" d=\"m10.594 12.165-.258.078a.733.733 0 0 0-.13 1.35l.268.142a1 1 0 0 0 .752.075l.314-.093a.772.772 0 0 0-.067-1.498l-.392-.078a1 1 0 0 0-.487.024Z\"/>";
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

/** Build a <BqBonaire/> icon as a live SVGSVGElement (browser only). */
export function BqBonaire(options: IconOptions = {}): SVGSVGElement {
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
