// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.117 8.043-2.168.212a.752.752 0 0 0-.225 1.44l1.685.725a.6.6 0 0 1 .081 1.059l-.787.494a.6.6 0 0 0 .165 1.088l1.399.372a1 1 0 0 1 .633.51l1.311 2.55a1 1 0 0 0 .805.54l2.573.218a1 1 0 0 1 .487.176l.808.563a1 1 0 0 1 .405 1.035l-.489 2.217a.687.687 0 0 0 1.223.555l.529-.716a1 1 0 0 1 .882-.404l.887.07a1 1 0 0 0 .851-.364l.286-.349a1 1 0 0 0 .226-.634l-.004-2.89a1 1 0 0 1 .377-.784l1.586-1.262c.125-.1.225-.23.29-.376l1.354-3.047a1 1 0 0 1 .822-.59l2.03-.188a.6.6 0 0 0 .533-.713l-.776-3.961a1 1 0 0 0-.27-.51l-1.062-1.076a.6.6 0 0 0-.813-.038L18.401 5.1a1 1 0 0 1-.522.226l-2.882.353a1 1 0 0 1-.726-.196l-4.31-3.27a.87.87 0 0 0-1.377.504L8.17 4.57a1 1 0 0 1-.792.764l-1.375.258a1 1 0 0 0-.788.752l-.223.935a1 1 0 0 1-.875.764Z\"/>";
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

/** Build a <LakeEyreBasin/> icon as a live SVGSVGElement (browser only). */
export function LakeEyreBasin(options: IconOptions = {}): SVGSVGElement {
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
