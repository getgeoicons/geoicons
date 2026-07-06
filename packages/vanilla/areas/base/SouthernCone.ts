// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.677 4.022-.607-1.94a.589.589 0 0 0-1.148.225l.302 3.553a1 1 0 0 1-.014.272l-.378 1.976a1 1 0 0 0-.016.251l.114 1.79a1 1 0 0 1-.028.306l-.49 1.96a1 1 0 0 0-.03.255l.065 5.066.216 1.423q.015.09.043.176l.541 1.566a1 1 0 0 0 .156.287l.644.828a1 1 0 0 0 .443.324l.975.36a1 1 0 0 0 .551.041l1.159-.242a.58.58 0 0 0 .015-1.134l-.617-.146a1 1 0 0 1-.718-.658l-.185-.556a.6.6 0 0 1 .068-.52l.477-.723a.6.6 0 0 0-.036-.71l-.188-.229a.6.6 0 0 1-.134-.35l-.02-.387a.6.6 0 0 1 .369-.584l.323-.135a.6.6 0 0 0 .331-.343l.879-2.34a.6.6 0 0 1 .51-.386l.784-.067a1 1 0 0 0 .648-.315l.06-.064a.6.6 0 0 0 .143-.55l-.132-.55a.627.627 0 0 1 .818-.738l.318.113a.6.6 0 0 0 .64-.157l2.932-3.14a.6.6 0 0 0 .142-.261l.403-1.578a.6.6 0 0 1 .366-.412l1.35-.518a.6.6 0 0 0 .193-1l-1.169-1.084a1 1 0 0 0-.488-.249l-.995-.194a1 1 0 0 0-1.077.517l-.53 1.012a1 1 0 0 1-1.202.484l-.996-.332a1 1 0 0 1-.626-.615l-.36-1.016a.6.6 0 0 0-.609-.398l-.757.054a.6.6 0 0 0-.546.481l-.143.721a1 1 0 0 1-.821.792l-1.25.202a.6.6 0 0 1-.668-.413Z\"/>";
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

/** Build a <SouthernCone/> icon as a live SVGSVGElement (browser only). */
export function SouthernCone(options: IconOptions = {}): SVGSVGElement {
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
