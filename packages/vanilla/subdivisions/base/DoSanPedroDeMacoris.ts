// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.772 10.587a1 1 0 0 0-1.178-.07l-1.263.812a1 1 0 0 0-.457.779l-.076 1.217a1 1 0 0 1-.314.667l-1.28 1.201a.6.6 0 0 1-.942-.157l-2.49-4.728a2 2 0 0 1-.226-1.075l.099-1.38a2 2 0 0 0-.294-1.194l-.234-.38a2 2 0 0 1-.297-1.144l.075-1.61a.569.569 0 0 0-1.03-.358l-2.133 2.97a2 2 0 0 0-.35.85l-.24 1.502a2 2 0 0 1-.412.932l-1.132 1.42a1 1 0 0 0-.176.91l.376 1.258a1 1 0 0 1-.176.908L1.603 15.2a1 1 0 0 0-.105 1.082l.236.454a1 1 0 0 0 .645.51l1.868.467a1 1 0 0 1 .758.979l-.013 1.412a.6.6 0 0 0 .738.589l3.076-.726q.441-.105.894-.107l3.258-.021q.419-.003.827-.092l2.727-.595a1 1 0 0 1 1.01.372l.397.523a1 1 0 0 0 .58.371l2.86.632a.6.6 0 0 0 .721-.68l-.08-.512a2 2 0 0 0-.546-1.087l-.15-.153a1 1 0 0 1-.115-1.257l.477-.71c.19-.281.33-.593.415-.921l.534-2.061a.6.6 0 0 0-.553-.75l-2.29-.108a1 1 0 0 1-.59-.229z\"/>";
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

/** Build a <DoSanPedroDeMacoris/> icon as a live SVGSVGElement (browser only). */
export function DoSanPedroDeMacoris(options: IconOptions = {}): SVGSVGElement {
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
