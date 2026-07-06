// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.884 11.625-.087.128a1 1 0 0 0 .306 1.42l1.87 1.135a1 1 0 0 1 .272.243l.661.856a1 1 0 0 0 1.463.129l.019-.017a1 1 0 0 1 .974-.213l.084.027a1 1 0 0 1 .662.687l.189.682a1 1 0 0 0 .963.734h.13a1 1 0 0 1 .404.085l.975.431a1 1 0 0 0 .992-.105l.592-.43a.93.93 0 0 1 1.074-.01l.056.04a.83.83 0 0 1 .32.918l-.033.111a.755.755 0 0 0 1.322.678l1.038-1.345a1 1 0 0 0 .18-.371l.61-2.474a1 1 0 0 1 .266-.47l.3-.298a1 1 0 0 0 .125-1.268l-.416-.618a1 1 0 0 1-.069-.998l.154-.315a1 1 0 0 0-.287-1.231l-.154-.12a1 1 0 0 1-.389-.79V8.74a1 1 0 0 1 .457-.84l.173-.112a.75.75 0 0 0 .266-.96l-.496-1.01a1 1 0 0 0-.898-.56H14.72a1 1 0 0 0-.3.047l-.726.229a1 1 0 0 0-.675.729l-.222.963a1 1 0 0 1-1.087.77l-.418-.048a1 1 0 0 0-.856.324l-.839.932a1 1 0 0 0-.23.899l.14.594a1 1 0 0 1-.12.752l-.426.696a1 1 0 0 1-.853.478h-.845a1 1 0 0 1-.979-.795l-.1-.479a.5.5 0 0 0-.775-.308l-.656.456a1 1 0 0 1-1.003.081l-.607-.29a1 1 0 0 0-1.258.336Zm20.263-5.242-1.277.578a.806.806 0 0 1-.695-1.454l1.253-.63a.835.835 0 1 1 .719 1.506Z\"/>";
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

/** Build a <Sx/> icon as a live SVGSVGElement (browser only). */
export function Sx(options: IconOptions = {}): SVGSVGElement {
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
