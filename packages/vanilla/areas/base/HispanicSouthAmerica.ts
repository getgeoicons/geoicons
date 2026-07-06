// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.64 10.504-.973-.508a1 1 0 0 1-.355-.312L7.726 7.428a1 1 0 0 1-.182-.555l-.025-1.247a1 1 0 0 1 .225-.654l.405-.494a1 1 0 0 0 .224-.684l-.045-.899a1 1 0 0 1 .53-.935l1.054-.557a1 1 0 0 1 .792-.063l.78.268a1 1 0 0 0 .374.053l1.42-.07a1 1 0 0 1 .635.188l.39.282a.6.6 0 0 1 .245.557l-.08.675a.6.6 0 0 1-.209.388l-.793.669a1 1 0 0 1-.586.234l-1.146.066a.6.6 0 0 0-.564.574l-.026.604a.6.6 0 0 1-.227.444l-.523.415a.6.6 0 0 0-.082.862l.547.634a.6.6 0 0 0 .664.17l.84-.314a.6.6 0 0 1 .636.139l1.953 1.962a1 1 0 0 1 .197.282l.852 1.82a1 1 0 0 1-.08.988l-.437.64a.6.6 0 0 0 .066.756l.51.525a.6.6 0 0 1-.023.86l-2.07 1.911a1 1 0 0 0-.228.314l-.884 1.908a1 1 0 0 0 .143 1.065l.363.43a.6.6 0 0 1-.295.964l-.492.14a.6.6 0 0 1-.396-.024l-.651-.273a1 1 0 0 1-.53-.524l-.334-.767a1 1 0 0 1-.082-.453l.198-3.604a1 1 0 0 1 .03-.197l.335-1.288a1 1 0 0 0 .032-.252v-3.97a1 1 0 0 0-.537-.887Z\"/>";
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

/** Build a <HispanicSouthAmerica/> icon as a live SVGSVGElement (browser only). */
export function HispanicSouthAmerica(options: IconOptions = {}): SVGSVGElement {
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
