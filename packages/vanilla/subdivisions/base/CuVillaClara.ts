// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.54 10.541a1 1 0 0 0 1.159.809l2.13-.377A1 1 0 0 1 9 11.896l.115 1.817a2 2 0 0 0 .53 1.233l1.18 1.275a2 2 0 0 1 .505 1.023l.6 3.524a.3.3 0 0 0 .426.22l1.343-.652a1 1 0 0 1 .716-.06l1.278.373a.3.3 0 0 0 .38-.243l.349-2.322a1 1 0 0 1 1.265-.813l1.845.532a1 1 0 0 0 .913-.19l1.944-1.6a.8.8 0 0 0 .257-.849l-.597-1.979a2 2 0 0 0-.616-.943l-1.294-1.105a2 2 0 0 1-.478-.603l-1.105-2.136a2 2 0 0 0-.897-.878L9.59 3.566a1 1 0 0 0-.785-.04l-1.984.727a1 1 0 0 1-.825-.062L4.072 3.135a1 1 0 0 0-1.044.05l-1.256.853a1 1 0 0 0-.43.705l-.079.638a1 1 0 0 0 .316.859l.469.43a1 1 0 0 0 .785.258l.111-.012a1 1 0 0 1 1.093.818z\"/>";
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

/** Build a <CuVillaClara/> icon as a live SVGSVGElement (browser only). */
export function CuVillaClara(options: IconOptions = {}): SVGSVGElement {
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
