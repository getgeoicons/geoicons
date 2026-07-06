// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m20.907 7.3-.607.326a.727.727 0 0 0 .546 1.339l1.088-.315a.768.768 0 0 0-.291-1.501l-.364.037a1 1 0 0 0-.372.114Zm-6.254.183-1.039.395a1 1 0 0 0-.639.826l-.063.58a1 1 0 0 1-.507.765l-.264.148a.84.84 0 0 1-.803.007.84.84 0 0 0-1.083.262l-.675.972a1 1 0 0 0-.113.925l.11.292a1 1 0 0 1-.024.77l-.16.353a1 1 0 0 1-.336.405l-.648.454a1 1 0 0 1-.905.126l-.888-.311a.78.78 0 0 1-.505-.57.78.78 0 0 0-1.227-.46l-.258.191a.99.99 0 0 1-.926.136l-.636-.232a1 1 0 0 0-1.173.384l-.244.364a.75.75 0 0 0 .25 1.068l1.178.676a1 1 0 0 0 .498.133h2.695a1 1 0 0 1 .313.05l1.996.657a1 1 0 0 0 .715-.035l.997-.44a1 1 0 0 0 .355-.262l.85-.988a1 1 0 0 1 .623-.339l.531-.073a1 1 0 0 1 .645.13l1.163.686c.13.076.275.123.425.135l2.65.223a.25.25 0 0 0 .24-.368l-.682-1.26a1 1 0 0 1 .047-1.03l.46-.691a.5.5 0 0 0-.163-.709l-.51-.298a1 1 0 0 1-.411-.46l-.24-.542a.5.5 0 0 1 .264-.664l1.27-.531-.746-1.302a1 1 0 0 0-.774-.498l-1.184-.111a1 1 0 0 0-.449.06Z\"/>";
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

/** Build a <Mf/> icon as a live SVGSVGElement (browser only). */
export function Mf(options: IconOptions = {}): SVGSVGElement {
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
