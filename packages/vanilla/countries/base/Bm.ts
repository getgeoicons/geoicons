// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.155 17.157c-1.413 1.072-2.26 1.687-3.972 2.206-.533.161-.849.279-1.4.355-.783.108-1.332.203-2.074-.068-.453-.165-1.047-.658-1.047-.658s-.565-.502-.829-.901c-.357-.541-.543-1.476-.607-1.855a.47.47 0 0 1 .058-.314l.656-1.144a.5.5 0 0 0 .04-.41l-.366-1.077 1.798-.457a.5.5 0 0 0 .244-.145l2.163-2.336a.5.5 0 0 1 .707-.027l.418.388a.5.5 0 0 1 .04.693l-3.895 4.528.66.59a.5.5 0 0 1 .167.373v.343a.5.5 0 0 0 .09.286l.327.466a.5.5 0 0 0 .41.213h.703c.063 0 .126-.01.182-.04.283-.152.5-.468.624-.683a.57.57 0 0 1 .354-.28l1.532-.378a.5.5 0 0 0 .187-.09l1.103-.856a.5.5 0 0 0 .048-.747l-1.948-1.968h3.063s1.317-.105 2.143-.544c.522-.278.806-.518 1.135-1.01.393-.586.565-1.594.628-2.072a.53.53 0 0 1 .265-.396l1.286-.705a.5.5 0 0 0 .243-.31l.317-1.189a.5.5 0 0 1 .19-.276l3.09-2.241a.5.5 0 0 1 .641.046l2.061 2.002a.5.5 0 0 1 .135.486l-.548 2.073-1.316-1.15a.5.5 0 0 0-.18-.102l-.952-.295a.5.5 0 0 0-.326.01l-1.027.39a.5.5 0 0 0-.3.32l-.11.353a.5.5 0 0 0 .086.457l.455.578a.5.5 0 0 0 .229.163l1.492.518s-4.92 3.024-5.822 3.688c-1.437 1.057-1.83 2.12-3.25 3.199Z\"/>";
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

/** Build a <Bm/> icon as a live SVGSVGElement (browser only). */
export function Bm(options: IconOptions = {}): SVGSVGElement {
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
