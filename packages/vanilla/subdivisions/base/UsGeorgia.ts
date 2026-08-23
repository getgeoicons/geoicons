// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.044 1.525a.57.57 0 0 0-.527-.313l-9.583.329a.3.3 0 0 0-.285.351l1.534 8.78q.015.088.046.172l1.222 3.348a1 1 0 0 1-.047.796l-.347.682a4 4 0 0 0-.432 1.908l.03 1.198a4 4 0 0 0 .272 1.358l.44 1.125a.6.6 0 0 0 .494.378l10.183 1.105a.6.6 0 0 0 .65-.462l.106-.463a.6.6 0 0 1 .732-.448l1.111.282a.6.6 0 0 0 .731-.44l.746-3.085a4 4 0 0 1 .657-1.418l.418-.573a.6.6 0 0 0 .053-.622l-2.07-4.148a3 3 0 0 0-.331-.522l-4.432-5.6a2 2 0 0 0-.541-.476l-1.361-.813a.6.6 0 0 1-.189-.852l.682-1.005a.57.57 0 0 0 .037-.572Z\"/>";
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

/** Build a <UsGeorgia/> icon as a live SVGSVGElement (browser only). */
export function UsGeorgia(options: IconOptions = {}): SVGSVGElement {
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
