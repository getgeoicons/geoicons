// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.965 13.27 1.2 14.651l3.723 2.55a1 1 0 0 0 .562.176l2.44.008a1 1 0 0 1 .994 1.062l-.014.22a1 1 0 0 0 .392.856l1.765 1.348a1 1 0 0 0 1.555-.478l.043-.129a1 1 0 0 1 1.04-.68l3.637.336a1 1 0 0 0 .66-.173l1.445-1a1 1 0 0 1 .376-.16l2.015-.395a.6.6 0 0 0 .354-.962l-.525-.66a1 1 0 0 0-.918-.37l-.205.029a1 1 0 0 1-1.094-.71l-.4-1.36a1 1 0 0 1 .021-.63l.803-2.16a1 1 0 0 0 .054-.22l.245-1.902a1 1 0 0 1 .2-.482l.91-1.184a1 1 0 0 0 .086-1.089l-.429-.786a.6.6 0 0 0-1.076.046L19.21 7.23a1 1 0 0 1-.628.556l-1.458.437a1 1 0 0 1-1.278-.823l-.021-.155a1 1 0 0 0-.967-.865l-2.081-.05a1 1 0 0 1-.172-.02l-2.546-.509a1 1 0 0 1-.534-.297L6.503 2.278 6 8.963a1 1 0 0 1-.077.317l-1.486 3.487a1 1 0 0 1-.472.502Z\"/>";
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

/** Build a <MojaveDesert/> icon as a live SVGSVGElement (browser only). */
export function MojaveDesert(options: IconOptions = {}): SVGSVGElement {
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
