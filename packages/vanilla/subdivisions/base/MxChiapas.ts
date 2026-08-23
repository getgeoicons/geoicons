// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.904 1.895a.88.88 0 0 0-1.429.386l-.86 2.734a1 1 0 0 1-.504.592l-.909.459a1 1 0 0 0-.485.54l-1.354 3.601a2 2 0 0 0-.119.894l.1 1.057a1 1 0 0 0 .438.735l1.872 1.259a21 21 0 0 1 2.645 2.108l2.098 1.967 3.61 3.797a.3.3 0 0 0 .512-.152l.544-2.886a.3.3 0 0 0-.063-.247l-.9-1.09a.3.3 0 0 1-.029-.34l2.493-4.356a.3.3 0 0 1 .27-.15l6.755.21a1 1 0 0 0 1.019-.842l.104-.655a1 1 0 0 0-.333-.913L16.061 5.13a2 2 0 0 1-.585-.867l-.496-1.457a1 1 0 0 0-.606-.618l-.36-.131a1 1 0 0 0-.975.166L9.753 4.917a1 1 0 0 1-1.226.033l-.344-.253a1 1 0 0 1-.395-.64l-.212-1.262a1 1 0 0 0-.314-.575z\"/>";
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

/** Build a <MxChiapas/> icon as a live SVGSVGElement (browser only). */
export function MxChiapas(options: IconOptions = {}): SVGSVGElement {
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
