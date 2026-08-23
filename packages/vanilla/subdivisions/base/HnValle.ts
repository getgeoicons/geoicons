// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M18.411 9.33a.6.6 0 0 0-.379-.708l-8.001-2.886a1 1 0 0 1-.658-1.01l.15-2.179a.6.6 0 0 0-.468-.627l-2.38-.529a.6.6 0 0 0-.723.68l.391 2.465a1 1 0 0 1-.024.426l-2.224 7.975a1 1 0 0 0 .654 1.22l1.113.36a1 1 0 0 1 .686 1.065l-.074.647a1 1 0 0 1-.584.8l-1.493.668a1 1 0 0 0-.191 1.712l1.025.77a1 1 0 0 0 1.174.02l1.49-1.042a1 1 0 0 0 .419-.703l.107-.916a1 1 0 0 1 .513-.76l.784-.43a1 1 0 0 1 1.462.689l.256 1.331a1 1 0 0 1-.722 1.155l-.312.084a1.5 1.5 0 0 0-.743.465l-.241.278a1.2 1.2 0 0 0 .603 1.95l.953.25a1 1 0 0 0 1.218-.707l.294-1.083a1 1 0 0 1 .49-.619l3.363-1.815a1 1 0 0 1 .63-.108l2.599.409a1 1 0 0 0 1.03-.502l.355-.642a1 1 0 0 0 .093-.743l-.554-2.079c-.08-.301-.23-.58-.438-.813l-1.808-2.035a1 1 0 0 1-.223-.902z\"/>";
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

/** Build a <HnValle/> icon as a live SVGSVGElement (browser only). */
export function HnValle(options: IconOptions = {}): SVGSVGElement {
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
