// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.76 1.861-.28.976a.644.644 0 0 0 .438.795.644.644 0 0 1 .451.74l-.564 2.922a1 1 0 0 0-.018.223l.06 1.805a1 1 0 0 0 .826.95l.413.074a.93.93 0 0 1 .703.572.932.932 0 0 0 1.418.404l.147-.108a1 1 0 0 1 1.047-.086l1.168.596c.333.17.74.023.889-.319a.65.65 0 0 1 .815-.35l.62.225a1 1 0 0 0 .672.003l.27-.095a.55.55 0 0 0 .355-.631.73.73 0 0 0-.187-.353l-.203-.212a.68.68 0 0 1 .438-1.147l.424-.033a1 1 0 0 0 .92-.912l.059-.701a1 1 0 0 0-.514-.96l-.952-.525a1 1 0 0 0-.414-.122l-1.228-.083a1 1 0 0 1-.768-.448l-.782-1.19a1 1 0 0 0-.35-.325L10.69 2.467a1 1 0 0 0-.486-.126H8.911a.84.84 0 0 1-.775-.51l-.025-.057a.719.719 0 0 0-1.35.087Zm3.716 20.075-.286-.411a1 1 0 0 1-.159-.766l.027-.134a1 1 0 0 1 1.136-.792l1.345.213a.763.763 0 0 1 .346 1.359l-.977.753a1 1 0 0 1-1.432-.222Z\"/>";
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

/** Build a <Nf/> icon as a live SVGSVGElement (browser only). */
export function Nf(options: IconOptions = {}): SVGSVGElement {
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
