// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.598 22.698-.035-.01a1 1 0 0 1-.72-.85l-.163-1.466a1 1 0 0 0-.187-.48l-1.439-1.966a1 1 0 0 1-.147-.293l-.73-2.341a1 1 0 0 0-.085-.194L6.78 12.774a1 1 0 0 1-.118-.345l-.265-1.792a1 1 0 0 1 .08-.56l.79-1.737a1 1 0 0 0 .083-.302l.015-.132a1 1 0 0 0-1.1-1.106l-1.476.159a1 1 0 0 1-.74-.22l-.915-.746a1 1 0 0 1-.36-.901l.07-.56a1 1 0 0 1 .743-.842l3.05-.787a1 1 0 0 1 .87.185l.61.482a1 1 0 0 0 .753.208l.299-.04a.6.6 0 0 0 .472-.831l-.279-.652a.662.662 0 0 1 .867-.87l1.668.708q.09.037.171.093l1.649 1.12a1 1 0 0 1 .336 1.267l-.181.369a1 1 0 0 0 .28 1.226l.503.394a1 1 0 0 0 1.281-.038l.721-.64a1 1 0 0 1 .456-.23l.295-.063a1 1 0 0 1 .784.16l1.343.946a1 1 0 0 1 .422.773l.157 3.461a1 1 0 0 0 .162.502l.809 1.239a.6.6 0 0 1 .005.648l-.378.598a.6.6 0 0 1-.884.146l-1.46-1.176a1 1 0 0 0-.914-.18l-.675.203a1 1 0 0 1-1.064-.329l-1.24-1.53a.682.682 0 0 0-1.128.753l1.242 2.287.59.872a.92.92 0 0 0 1.183.304l.201-.103q.132-.067.239-.17l.44-.423a.25.25 0 0 1 .345-.002l1.48 1.399a1 1 0 0 1 .248 1.084l-.494 1.292a2 2 0 0 1-.654.876l-2.274 1.735a1 1 0 0 1-.188.113l-3.413 1.576a1 1 0 0 1-.694.053Z\"/>";
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

/** Build a <WestAsia/> icon as a live SVGSVGElement (browser only). */
export function WestAsia(options: IconOptions = {}): SVGSVGElement {
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
