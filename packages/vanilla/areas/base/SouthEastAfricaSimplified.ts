// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.523 13.94-.067-.16a.6.6 0 0 1 .495-.83l.02-.002a1 1 0 0 1 .234.005l3.954.55.017-2.472.96-.968 1.937.327V8.368l.326-2.918a1 1 0 0 1 .038-.183l.946-3.077a1 1 0 0 1 .75-.685l1.143-.241a1 1 0 0 1 .588.054l.86.355a1 1 0 0 0 .557.06l1.614-.287a.49.49 0 0 1 .446.815l-.515.557a.98.98 0 0 0-.252.787l.15 1.168-.782.915a1 1 0 0 0-.2.37l-.204.7a1 1 0 0 0-.038.35l.063.906c.01.144.05.285.12.411l.426.78a1 1 0 0 1 .123.47l.018 1.779a1 1 0 0 1-.07.375l-.244.625a1 1 0 0 1-.455.514l-.89.482a1 1 0 0 0-.278.222l-.685.785a1 1 0 0 0-.244.73l.082 1.136a1 1 0 0 1-.473.924l-.386.237a1 1 0 0 0-.462.688l-.147.879a1 1 0 0 1-.163.403l-1.057 1.534a1 1 0 0 1-.24.244l-1.289.928a1 1 0 0 1-.569.189l-1.032.015a1 1 0 0 0-.225.03l-.934.23a1 1 0 0 1-1.093-.45l-.07-.113a.82.82 0 0 1-.077-.683.82.82 0 0 0-.039-.614l-.447-.926a1 1 0 0 0-.088-.149l-.564-.785a1 1 0 0 1-.17-.392l-.248-1.278a1 1 0 0 1-.016-.253l.04-.649a1 1 0 0 0-.133-.564z\"/>";
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

/** Build a <SouthEastAfricaSimplified/> icon as a live SVGSVGElement (browser only). */
export function SouthEastAfricaSimplified(options: IconOptions = {}): SVGSVGElement {
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
