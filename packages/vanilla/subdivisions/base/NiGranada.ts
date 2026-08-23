// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.86 1.803a1 1 0 0 0-.923-.598l-2.276.016a1 1 0 0 0-.5.137L10.4 2.978a.6.6 0 0 0-.11.952l.958.915a1 1 0 0 1 .293.902l-.418 2.298a1 1 0 0 1-.27.521l-.934.953a1 1 0 0 0-.21 1.083l.172.413a1 1 0 0 1-.355 1.206L7.77 13.432a1 1 0 0 0-.432.843l.08 4.06a.6.6 0 0 1-.494.602l-.562.1a.6.6 0 0 0-.495.611l.027.778a2 2 0 0 0 .287.966l.544.9a1 1 0 0 0 .9.482l1.062-.046a2 2 0 0 0 1.01-.326l4.671-3.064a1 1 0 0 1 .595-.163l2.02.093a1 1 0 0 0 1.045-1.022l-.017-.735a1 1 0 0 0-.861-.967l-1.948-.273a1 1 0 0 1-.8-.647l-1.516-4.146a3 3 0 0 1-.099-1.734l.494-2.046a2 2 0 0 1 .303-.674l.427-.612a2 2 0 0 1 1.08-.776l2.402-.702a.6.6 0 0 0 .381-.817z\"/>";
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

/** Build a <NiGranada/> icon as a live SVGSVGElement (browser only). */
export function NiGranada(options: IconOptions = {}): SVGSVGElement {
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
