// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.8 15.877a.671.671 0 0 0-.207 1.274l1.46.687a.6.6 0 0 1 .13 1.002l-.56.47a.724.724 0 0 0 .422 1.277l2.612.157a1 1 0 0 0 .463-.083l4.474-1.97a4 4 0 0 1 1.832-.334l9.57.527a.6.6 0 0 0 .631-.555l.127-1.73a1 1 0 0 0-.499-.94l-.86-.494a1 1 0 0 1-.395-.418l-1.514-3.014a1 1 0 0 0-.736-.538l-.2-.032a1 1 0 0 1-.806-.724l-.174-.633a1 1 0 0 1 .349-1.052l.567-.443a1 1 0 0 0 .101-1.484L15.405 3.55a1 1 0 0 0-.732-.303l-.403.006a1 1 0 0 0-.616.224l-1.164.947c-.26.211-.553.378-.867.492L8.226 6.154a1 1 0 0 0-.655.857l-.189 2.293a2 2 0 0 1-.355.984l-.413.589a1 1 0 0 0-.164.76l.157.831a3 3 0 0 1-.086 1.46l-.26.827a1 1 0 0 1-.837.693z\"/>";
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

/** Build a <DoPeravia/> icon as a live SVGSVGElement (browser only). */
export function DoPeravia(options: IconOptions = {}): SVGSVGElement {
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
