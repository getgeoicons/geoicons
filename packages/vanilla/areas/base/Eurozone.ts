// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.69 19.545.69-1.61a1 1 0 0 1 1.262-.545l1.352.493a1 1 0 0 0 1.27-.566l.076-.188a1 1 0 0 0-.101-.937l-.715-1.048a.6.6 0 0 1 .47-.938L8 14.163a1 1 0 0 0 .682-.312l1.151-1.214a1 1 0 0 1 .526-.292l2.312-.471a.6.6 0 0 1 .695.418l.192.654a.6.6 0 0 1-.232.661l-.138.096a.8.8 0 0 0 .733 1.407l2.129-.78a.529.529 0 0 1 .522.902l-2.536 2.132a.6.6 0 0 0 0 .919l1.406 1.179a1 1 0 0 1 .26 1.197l-.73 1.526a.81.81 0 1 1-1.373-.842l.09-.118a.91.91 0 0 0-.19-1.292l-1.82-1.313a1 1 0 0 0-.782-.17l-1.327.265a1 1 0 0 0-.638.43l-1.41 2.133a1 1 0 0 1-.634.428l-2.104.43a1 1 0 0 1-.981-.354l-.975-1.219a1 1 0 0 1-.138-1.018Zm2.93-7.312-.07.01a1 1 0 0 1-1.13-1.09l.016-.158a1 1 0 0 1 .81-.883l.024-.004a1 1 0 0 1 1.165.787l.03.151a1 1 0 0 1-.845 1.187ZM16 11.786l-.491-.25a1 1 0 0 1-.517-1.125l.338-1.402a1 1 0 0 0-.088-.702L14.56 7.02a1 1 0 0 1-.037-.857l.336-.795a1 1 0 0 0-.035-.853l-.544-1.041a1 1 0 0 1 .133-1.121l.037-.044a1 1 0 0 1 1.643.2l1.46 2.83a1 1 0 0 1 .063.764l-.369 1.149a1 1 0 0 0-.01.578l.598 2.107a1 1 0 0 1-.108.792l-.418.687a1 1 0 0 1-1.31.371Zm2.033 7.769-.275.362a1 1 0 0 0-.17.865l.12.444a1 1 0 0 0 .322.505l.666.56a1 1 0 0 0 .615.234l.829.023a1 1 0 0 0 .824-.395l.147-.194a1 1 0 0 0 .032-1.165l-.883-1.305a1 1 0 0 1-.11-.906l.275-.745a.934.934 0 0 0-1.22-1.192l-.606.24a1 1 0 0 0-.58 1.245l.167.503a1 1 0 0 1-.153.921Z\"/>";
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

/** Build a <Eurozone/> icon as a live SVGSVGElement (browser only). */
export function Eurozone(options: IconOptions = {}): SVGSVGElement {
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
