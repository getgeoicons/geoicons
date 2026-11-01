// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.005 12.88-.807.696a2 2 0 0 0-.587.87l-1.278 3.758a2 2 0 0 0-.106.624l-.02 2.059a.6.6 0 0 0 .743.588l1.894-.463a2 2 0 0 1 1.23.09l.887.362c.233.095.482.146.734.148l5.975.062q.19.003.377.04l4.266.865a3 3 0 0 0 1.187 0l2.679-.537a.3.3 0 0 0 .142-.517l-2.094-1.894a1 1 0 0 1-.33-.747l.025-4.514a.6.6 0 0 1 .595-.596l2.454-.021a.6.6 0 0 0 .594-.558l.178-2.49a.6.6 0 0 0-.727-.63l-2.187.478a.6.6 0 0 1-.725-.528l-.587-6.045a.6.6 0 0 0-.564-.542l-2.6-.141a.6.6 0 0 0-.625.5l-.128.77a.6.6 0 0 1-.56.5l-2.203.116a.6.6 0 0 1-.571-.337L9.71 1.643a.6.6 0 0 0-.547-.338l-6.177.076a.6.6 0 0 0-.544.838l1.224 2.828a1 1 0 0 1 .044.67l-.327 1.15a1 1 0 0 0 .074.735l1.128 2.17a2 2 0 0 1 .198 1.246l-.11.671a2 2 0 0 1-.668 1.19Z\"/>";
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

/** Build a <Ao/> icon as a live SVGSVGElement (browser only). */
export function Ao(options: IconOptions = {}): SVGSVGElement {
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
