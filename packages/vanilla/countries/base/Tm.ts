// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m19.267 17.513-2.62 1.844a.5.5 0 0 1-.49.048l-1.345-.597a.5.5 0 0 1-.296-.467l.025-1.266a.5.5 0 0 0-.51-.51l-.706.015a.5.5 0 0 1-.372-.154l-1.546-1.614a.5.5 0 0 0-.202-.128l-2.67-.897a.5.5 0 0 0-.175-.026l-2.224.074a.5.5 0 0 0-.372.186l-.645.798a.5.5 0 0 1-.256.168l-1.54.424.243-2.949a.5.5 0 0 0-.056-.273l-.576-1.101a.5.5 0 0 0-.19-.199l-.91-.537a.5.5 0 0 1-.228-.566l.316-1.12a.5.5 0 0 0-.016-.318l-.583-1.493a.5.5 0 0 1 .123-.546l.688-.648a.5.5 0 0 1 .308-.135l1.33-.095a.5.5 0 0 1 .435.197l1.388 1.838a.5.5 0 0 0 .382.199l1.832.061a.5.5 0 0 0 .515-.454l.07-.764a.5.5 0 0 1 .171-.332l1.716-1.484a.5.5 0 0 1 .54-.075l1.549.728a.5.5 0 0 1 .279.362l.268 1.458a.5.5 0 0 0 .435.407l1.953.22a.5.5 0 0 1 .413.322l.77 2.067a.5.5 0 0 0 .182.235l4.051 2.835a.5.5 0 0 0 .126.064l1.594.543a.5.5 0 0 1 .338.46l.016.784a.493.493 0 0 1-.508.5l-2.03-.053a.5.5 0 0 0-.5.389l-.29 1.277a.5.5 0 0 1-.2.298Z\"/>";
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

/** Build a <Tm/> icon as a live SVGSVGElement (browser only). */
export function Tm(options: IconOptions = {}): SVGSVGElement {
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
