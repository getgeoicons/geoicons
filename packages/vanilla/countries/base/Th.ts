// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.725 2.88-.41 1.11a.5.5 0 0 0 .045.44l1.62 2.561a.5.5 0 0 1 .005.525l-1.001 1.67a.5.5 0 0 0 .048.58l1.11 1.302a.5.5 0 0 1 .118.298l.118 2.276a.5.5 0 0 1-.035.212l-1.09 2.72a.5.5 0 0 0-.032.118l-.337 2.476a.5.5 0 0 0 .427.562l.978.136a.5.5 0 0 1 .35.223l.867 1.336a.5.5 0 0 0 .137.14l1.8 1.235 1.144-.554a.5.5 0 0 0 .135-.804l-.602-.602a.5.5 0 0 0-.153-.104l-1.097-.479a.5.5 0 0 1-.28-.318l-.707-2.43-1.147.018 1.4-3.92a.5.5 0 0 0 .028-.199l-.087-1.441a.5.5 0 0 1 .505-.53l.457.005a.5.5 0 0 1 .494.5v.726l2.36 1.651-.579-2.508a.5.5 0 0 1 .118-.45l.677-.742a.5.5 0 0 1 .39-.163l2.322.095a.5.5 0 0 0 .505-.378L17.7 8.68a.5.5 0 0 0-.148-.49l-.912-.833a.5.5 0 0 1-.162-.354l-.028-.932a.5.5 0 0 0-.172-.362l-1.46-1.272a.5.5 0 0 0-.545-.074l-2.28 1.09a.5.5 0 0 1-.708-.535l.278-1.63a.5.5 0 0 0-.137-.434L10.14 1.55a.5.5 0 0 0-.7-.011l-.791.753a.5.5 0 0 1-.292.135l-1.215.13a.5.5 0 0 0-.416.324Z\"/>";
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

/** Build a <Th/> icon as a live SVGSVGElement (browser only). */
export function Th(options: IconOptions = {}): SVGSVGElement {
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
