// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.968 19.244-.609.89a.5.5 0 0 0 .306.77l7.097 1.555a.5.5 0 0 0 .604-.542l-.082-.768a.5.5 0 0 1 .247-.486l1.155-.667a.5.5 0 0 1 .42-.037l3.07 1.11a.5.5 0 0 0 .504-.097l1.965-1.763a.5.5 0 0 0-.092-.81l-.874-.484a.5.5 0 0 1-.256-.478l.24-2.984a.5.5 0 0 0-.25-.474l-.87-.497a.5.5 0 0 1-.092-.801l2.11-1.952a.5.5 0 0 0 .139-.223l.962-3.186a.5.5 0 0 0-.311-.616l-5.035-1.785a.5.5 0 0 1-.157-.091l-3.84-3.272a.5.5 0 0 0-.437-.106l-.689.159a.5.5 0 0 0-.387.48l-.019 1.543a.5.5 0 0 1-.164.364L9.648 5.789a.5.5 0 0 1-.497.103L6.89 5.12a.5.5 0 0 0-.658.537l.207 1.617a.5.5 0 0 1-.356.543L4.98 8.14a.5.5 0 0 1-.52-.155l-.463-.541c-.13-.153-.338-.213-.53-.153l-1.737.545a.5.5 0 0 0-.309.677l.504 1.16a.5.5 0 0 0 .384.296l2.178.33a.5.5 0 0 1 .381.29l.64 1.436a.5.5 0 0 0 .136.18l1.697 1.423a.5.5 0 0 1 .176.437c-.089.81-.355 3.295-.463 4.929a.5.5 0 0 1-.086.25Z\"/>";
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

/** Build a <FrMainland/> icon as a live SVGSVGElement (browser only). */
export function FrMainland(options: IconOptions = {}): SVGSVGElement {
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
