// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.64 11.932 5.142 10.17a1 1 0 0 0-.682-.349l-1.872-.15a.6.6 0 0 1-.54-.72l.156-.751a1 1 0 0 0-.173-.793l-.219-.3a1 1 0 0 1-.162-.344l-.358-1.406a1 1 0 0 1 .075-.694l.222-.444a1 1 0 0 1 .43-.439l1.622-.85a1 1 0 0 1 .695-.086l.708.168a1 1 0 0 0 .782-.138l.624-.411a.796.796 0 0 1 1.116.247c.167.272.48.418.795.37l.857-.126a1 1 0 0 1 .685.146l.658.42a1 1 0 0 0 .668.15l.47-.062a.75.75 0 0 1 .781 1.053l-.217.48a1 1 0 0 0 .384 1.263l2.382 1.474a1 1 0 0 0 .612.146l1.578-.136a1 1 0 0 1 .303.02l1.09.243a1 1 0 0 0 .686-.094l1.39-.738a1 1 0 0 1 1.066.08l.045.034a.75.75 0 0 1-.125 1.28l-.572.272a1 1 0 0 0-.438.405l-1.066 1.86a1 1 0 0 1-.922.502l-1.7-.092a1 1 0 0 0-.761.291l-2.12 2.12a1 1 0 0 1-.275.195l-.742.355a1 1 0 0 0-.559 1.037l.074.538a1 1 0 0 1-.01.327l-.194.995a1 1 0 0 1-.12.317l-.63 1.07a.703.703 0 0 1-1.253-.08l-.769-1.795-.94-2.469a1 1 0 0 1-.05-.175l-.26-1.417a.89.89 0 0 0-.963-.726.89.89 0 0 1-.764-.31Zm6.306 8.109.293-.664a.501.501 0 0 1 .859-.195l.132.15a.6.6 0 0 1 .135.26l.224.93a1 1 0 0 1-.003.481l-.092.363a.792.792 0 0 1-1.4.282l-.112-.149a1 1 0 0 1-.187-.782l.082-.451q.021-.116.07-.225Z\"/>";
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

/** Build a <SouthAsia/> icon as a live SVGSVGElement (browser only). */
export function SouthAsia(options: IconOptions = {}): SVGSVGElement {
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
