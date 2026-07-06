// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.478 18.817-.855.284a.5.5 0 0 1-.605-.25l-.9-1.803a.5.5 0 0 1-.037-.352l.22-.832a.5.5 0 0 1 .275-.326l.549-.252a.5.5 0 0 0 .264-.616l-.409-1.195a.5.5 0 0 0-.258-.29l-.801-.38a.5.5 0 0 1-.25-.268l-.391-.984a.5.5 0 0 1 .012-.397l.335-.713a.5.5 0 0 0 .022-.371l-.365-1.096a.5.5 0 0 1-.025-.135l-.056-1.185.469-.124a.5.5 0 0 1 .375.049l1.265.718a.5.5 0 0 0 .31.061l2.172-.276a.5.5 0 0 0 .41-.334l.323-.94a.5.5 0 0 1 .335-.317l2.08-.595a.5.5 0 0 0 .152-.072l1.079-.765 1.018-.747a.5.5 0 0 1 .632.033l.547.498a.5.5 0 0 1 .164.365l.007.77a.5.5 0 0 0 .297.452l1.462.65a.5.5 0 0 0 .336.025l1.38-.38a.5.5 0 0 1 .337.024l2.436 1.086a.5.5 0 0 0 .215.043l1.688-.04a.5.5 0 0 1 .302.093l1.202.86a.5.5 0 0 1-.023.828l-1.647 1.046a.5.5 0 0 0-.187.213l-.69 1.499-.04.07-.832 1.236a.5.5 0 0 1-.427.22l-.43-.01.113-2.037.01-.079.125-.573a.5.5 0 0 0-.712-.553l-1.422.711a.5.5 0 0 0-.246.618l.36.994a.5.5 0 0 1-.075.476l-.932 1.202a.5.5 0 0 1-.183.147l-1.255.587a.5.5 0 0 0-.283.525l.134.915a.5.5 0 0 1-.307.536l-.796.323a.5.5 0 0 0-.311.427l-.07.972a.5.5 0 0 1-.345.44l-.55.178a.5.5 0 0 1-.653-.46l-.008-.257a.5.5 0 0 0-.174-.364l-.511-.437a.5.5 0 0 0-.662.01l-.4.364a.5.5 0 0 0-.131.193l-.314.828a.5.5 0 0 1-.44.322l-.013.001a.5.5 0 0 1-.514-.379l-.36-1.46a.5.5 0 0 0-.284-.337l-.615-.272a.5.5 0 0 0-.602.157l-.774 1.03a.5.5 0 0 1-.242.174Z\"/>";
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

/** Build a <AsiaRussiaSimplified/> icon as a live SVGSVGElement (browser only). */
export function AsiaRussiaSimplified(options: IconOptions = {}): SVGSVGElement {
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
