// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.177 20.465-.35 1.452a.75.75 0 0 1-1.039.507l-.178-.08a1 1 0 0 1-.34-.254l-.642-.738a1 1 0 0 1-.206-.374l-.342-1.164a1 1 0 0 1-.03-.43l.147-.98a1 1 0 0 0-.05-.491l-.628-1.72a1 1 0 0 1-.06-.343v-2.113a1 1 0 0 0-.187-.582l-.506-.708a1 1 0 0 0-.648-.405l-1.268-.213a1 1 0 0 1-.728-.538l-.608-1.209a.768.768 0 0 1 .505-1.09l.587-.144a.952.952 0 0 0 .594-1.41l-.015-.025a1 1 0 0 1 .162-1.225l.38-.372a1 1 0 0 0 .275-.484l.149-.627a1 1 0 0 1 .363-.562l.026-.02a1 1 0 0 1 .457-.196l1.414-.22a1 1 0 0 0 .76-.581l.133-.297a1 1 0 0 1 .46-.485l1.882-.958a1 1 0 0 1 .31-.098l.351-.051a1 1 0 0 1 .492.052l1.411.523a1 1 0 0 1 .455.341l.602.81a1 1 0 0 1 .195.529l.057.83a.804.804 0 0 0 1.25.612l.337-.226a.5.5 0 0 1 .612.042l.488.434a.5.5 0 0 1 .052.694l-2.181 2.619a1 1 0 0 0-.003 1.277l.2.241a1 1 0 0 1 .212.82l-.123.66a1 1 0 0 0 .032.49l.16.5a1 1 0 0 1-.195.96l-.538.623a1 1 0 0 0-.24.742l.113 1.27a1 1 0 0 1-.243.745l-.589.676a1 1 0 0 1-.463.3l-.773.235a1 1 0 0 0-.58.465l-.34.603a1 1 0 0 1-.415.398l-.599.307a1 1 0 0 0-.516.656Z\"/>";
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

/** Build a <Gl/> icon as a live SVGSVGElement (browser only). */
export function Gl(options: IconOptions = {}): SVGSVGElement {
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
