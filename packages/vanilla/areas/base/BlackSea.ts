// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.127 15.447-2.733 1.11a1 1 0 0 1-.608.046l-2.659-.634a1 1 0 0 1-.43-.224l-.828-.732a1 1 0 0 1-.316-.545l-.228-1.091a1 1 0 0 1 .355-.986l1.094-.875a1 1 0 0 0 .331-.486l.392-1.27a1 1 0 0 1 .565-.626l.513-.217a1 1 0 0 0 .583-.696l.166-.715a1 1 0 0 1 .252-.468L6.73 5.836a1 1 0 0 1 .85-.3l1.08.14a1 1 0 0 1 .326.102l1.445.74a.769.769 0 0 1-.21 1.44l-.484.09a.567.567 0 0 0-.201 1.036l.317.201a1 1 0 0 1 .423.562l.072.247a.93.93 0 0 0 1.481.455l.304-.25a1 1 0 0 1 .188-.122l1.229-.614a1 1 0 0 1 .441-.106l.782-.005a1 1 0 0 1 .466.113l.808.418a1 1 0 0 1 .265.2l.802.845a1 1 0 0 0 .368.246l.704.27a1 1 0 0 1 .41.292l1.414 1.689a1 1 0 0 0 .457.308l.743.242q.197.066.353.202l.566.501a1 1 0 0 1 .296.467l.245.833a1 1 0 0 1-.122.829l-.355.543a1 1 0 0 1-.343.323l-1.01.575a1 1 0 0 1-.678.113l-1.372-.256a1 1 0 0 0-.3-.01l-1.427.168a1 1 0 0 1-.46-.054l-1.967-.716q-.166-.061-.301-.175l-1.861-1.568a1 1 0 0 0-.542-.23l-2.326-.24a1 1 0 0 0-.479.067Z\"/>";
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

/** Build a <BlackSea/> icon as a live SVGSVGElement (browser only). */
export function BlackSea(options: IconOptions = {}): SVGSVGElement {
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
