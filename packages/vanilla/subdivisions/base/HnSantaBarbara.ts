// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.728 21.366a1 1 0 0 1 .333-.627l1.25-1.095a1 1 0 0 0 .268-1.127l-.92-2.274a1 1 0 0 1-.045-.606l.487-2.044a.6.6 0 0 0-.2-.6l-1.706-1.421a.6.6 0 0 1-.112-.8l.61-.891a.6.6 0 0 0 .082-.5l-.968-3.487a1 1 0 0 0-.676-.69l-1.213-.364a1 1 0 0 1-.696-.774l-.223-1.195a.8.8 0 0 0-.546-.616l-3.052-.96a.6.6 0 0 0-.548.097l-7.29 5.64a.6.6 0 0 0-.158.766l1.886 3.406a2 2 0 0 1 .106 1.716l-.85 2.111a.928.928 0 0 0 1.15 1.229l1.128-.37a1 1 0 0 1 1.173.444l1.047 1.781a.6.6 0 0 0 .513.296l2.035.016a.6.6 0 0 1 .583.48l.646 3.14a.6.6 0 0 0 .556.479l4.612.244a.6.6 0 0 0 .627-.524z\"/>";
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

/** Build a <HnSantaBarbara/> icon as a live SVGSVGElement (browser only). */
export function HnSantaBarbara(options: IconOptions = {}): SVGSVGElement {
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
