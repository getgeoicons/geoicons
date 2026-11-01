// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.273 21.83.21-3.52a1 1 0 0 0-.493-.924l-2.531-1.478a1 1 0 0 1-.485-1.015l.345-2.249a1 1 0 0 1 .294-.568l.831-.802a.6.6 0 0 0-.137-.962l-.324-.171a.6.6 0 0 1-.276-.76l.122-.295a.6.6 0 0 1 .506-.37l.765-.063a.6.6 0 0 0 .513-.808L3.278 4.278a1 1 0 0 1 .339-1.152l.775-.58a1 1 0 0 1 1.005-.112l.946.421a.8.8 0 0 0 1-.3l.46-.723a1 1 0 0 1 .722-.455l.797-.098a.6.6 0 0 1 .673.565l.018.372a.6.6 0 0 0 .756.55l1.158-.313a1 1 0 0 1 1.12.455l.676 1.137a2 2 0 0 0 1.175.903l.562.16a1 1 0 0 0 .869-.16l.736-.548a2 2 0 0 1 1.167-.394l.78-.01a2 2 0 0 1 1.387.535l.829.77a1 1 0 0 1 .308.583l.542 3.599a1 1 0 0 1-.114.633l-2.238 4.044a2 2 0 0 0-.21 1.364l.463 2.291a.6.6 0 0 0 .422.458l.668.192a.6.6 0 0 1 .434.55l.035.793a.6.6 0 0 1-.697.62l-3.683-.611a2 2 0 0 0-.546-.015l-5.623.617a2 2 0 0 0-.57.15l-4.311 1.848a.6.6 0 0 1-.835-.587Z\"/>";
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

/** Build a <Ci/> icon as a live SVGSVGElement (browser only). */
export function Ci(options: IconOptions = {}): SVGSVGElement {
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
