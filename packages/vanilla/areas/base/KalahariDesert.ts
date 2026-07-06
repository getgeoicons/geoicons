// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.796 20.796-1.198.12a.6.6 0 0 1-.425-.121l-2.036-1.562a1 1 0 0 0-.412-.187l-.503-.1a1 1 0 0 0-.985.366l-.61.784a1 1 0 0 1-.677.38l-2.492.279.706-1.76a1 1 0 0 0 .037-.634l-.057-.21a1 1 0 0 0-.373-.543l-.874-.642a1 1 0 0 1-.383-.584l-.23-1.012a1 1 0 0 0-.32-.532l-.85-.738a1 1 0 0 1-.33-.589l-.346-2.06a1 1 0 0 1 .028-.453l.178-.596a1 1 0 0 0-.355-1.085l-.438-.332a1 1 0 0 1-.391-.687l-.231-2.074a1 1 0 0 1 .072-.5l.506-1.2a1 1 0 0 1 .376-.451l1.291-.839a1 1 0 0 1 .585-.16l1.674.066a1 1 0 0 1 .509.163l1.045.685a1 1 0 0 0 .549.164h3.627a1 1 0 0 0 .336-.058l1.541-.549a1 1 0 0 1 .878.101l3.24 2.089a1 1 0 0 1 .439.644l.315 1.576a1 1 0 0 0 .396.615l4.192 3.022-4.03 4.887a1 1 0 0 1-.6.35l-1.144.198a1 1 0 0 0-.773.655l-.95 2.715a.6.6 0 0 1-.507.399Z\"/>";
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

/** Build a <KalahariDesert/> icon as a live SVGSVGElement (browser only). */
export function KalahariDesert(options: IconOptions = {}): SVGSVGElement {
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
