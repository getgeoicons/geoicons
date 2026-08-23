// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.708 7.966a.3.3 0 0 0-.168.491l2.734 3.14a.3.3 0 0 1-.224.497l-1.597.013a.3.3 0 0 0-.26.447l1.218 2.17a.6.6 0 0 1-.071.689l-.795.908a.6.6 0 0 0-.027.757l2.032 2.684a1 1 0 0 0 .663.387l.634.086a1 1 0 0 0 1.057-.605l.138-.332a1 1 0 0 0 .05-.622l-.208-.854a1 1 0 0 1 .363-1.03l.406-.31a1 1 0 0 1 .68-.205l3.592.26a2 2 0 0 0 1.107-.243l1.16-.637a2 2 0 0 1 1.162-.237l2.854.285c.286.029.576-.005.848-.099l2.673-.918a1 1 0 0 0 .668-.832l.365-3.178a1 1 0 0 0-.129-.616l-1.238-2.133a1 1 0 0 1 .146-1.197l.48-.497a1 1 0 0 0 .28-.752l-.023-.406a1 1 0 0 0-.523-.823l-.825-.447a1 1 0 0 0-.572-.116l-3.091.296a1 1 0 0 0-.62.296l-1.27 1.298a2 2 0 0 1-.699.462L11.806 7.17a2 2 0 0 1-.676.138l-2.246.061a.6.6 0 0 0-.457.231l-.65.833a.6.6 0 0 1-.73.173L4.824 7.551a1 1 0 0 0-.622-.077z\"/>";
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

/** Build a <GtZacapa/> icon as a live SVGSVGElement (browser only). */
export function GtZacapa(options: IconOptions = {}): SVGSVGElement {
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
