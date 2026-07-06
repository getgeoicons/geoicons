// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.56 7.614 1.938 2.765a1 1 0 0 1 .153.338l.563 2.322a1 1 0 0 1-.01.512l-.309 1.073a1 1 0 0 1-.398.55l-.782.532a.6.6 0 0 0 .059 1.027l.762.401a1 1 0 0 0 .718.083l.677-.177a1 1 0 0 0 .513-.325l.345-.411a.862.862 0 0 1 1.493.774.88.88 0 0 0 .553 1.05l.671.238a.908.908 0 0 0 1.156-1.175l-.385-1.026a1.434 1.434 0 0 1 .775-1.82l.024-.011c.178-.077.37-.119.565-.122l.554-.01a2 2 0 0 1 .747.132l.472.18a1.615 1.615 0 0 1 .968 1.98l-.156.512a.83.83 0 0 0 1.454.743l.145-.191a1 1 0 0 1 1.6.006l.411.551a1 1 0 0 0 1.212.314l.647-.291a1 1 0 0 1 .848.012l1.128.548a.74.74 0 0 0 1.007-.953l-.548-1.305a1 1 0 0 1-.071-.504l.116-.984c.04-.345.26-.645.575-.791.551-.257.754-.944.424-1.454l-.273-.42a1 1 0 0 1-.023-1.051l.28-.475a1 1 0 0 0 .07-.867l-.17-.443a1 1 0 0 0-.384-.475l-1.471-.967a1 1 0 0 0-1.059-.025l-.846.5a1 1 0 0 1-.448.138l-.103.007a1 1 0 0 1-1.021-.718l-.191-.653a1 1 0 0 0-.276-.449l-.383-.36a1 1 0 0 0-1.357-.01l-.11.1a1 1 0 0 1-.864.241l-1.438-.28a1 1 0 0 1-.433-.2l-.72-.577a1 1 0 0 0-1.345.086l-.893.926a1 1 0 0 1-.58.295l-1.418.199a1 1 0 0 1-.77-.216L4.245 5.624a1 1 0 0 0-.786-.213l-.96.15a1 1 0 0 0-.72.501l-.274.491a1 1 0 0 0 .055 1.061Z\"/>";
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

/** Build a <Je/> icon as a live SVGSVGElement (browser only). */
export function Je(options: IconOptions = {}): SVGSVGElement {
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
