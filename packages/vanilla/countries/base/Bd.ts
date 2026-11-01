// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.371 19.112 6.047 12.66a2 2 0 0 1 .086-1.105l.241-.642a1 1 0 0 0-.58-1.285l-1.231-.47a.78.78 0 0 1 .072-1.48l2.203-.604a.887.887 0 0 0 .222-1.616L4.854 4.134a.8.8 0 0 1-.352-.925l.435-1.39a.6.6 0 0 1 .797-.377l3.714 1.491a1 1 0 0 1 .627.948l-.034 1.73a.8.8 0 0 0 .567.782l1.115.338a3 3 0 0 0 1.093.121l4.416-.328a2 2 0 0 1 1.042.206l.566.283a1 1 0 0 1 .433 1.368l-.416.773a2 2 0 0 1-.965.887l-2.446 1.06a1 1 0 0 0-.575 1.148l.51 2.16a.838.838 0 0 0 1.647-.085l.203-1.559a.773.773 0 0 1 1.522-.058l.9 4.293a11 11 0 0 1 .218 1.695l.104 2.029a1 1 0 0 1-.248.71l-.641.73a.6.6 0 0 1-.974-.101L17.1 20.265a2 2 0 0 1-.225-.621l-.291-1.588a1 1 0 0 0-1.581-.622l-1.173.874a3 3 0 0 1-1.048.5L8.6 19.88a1 1 0 0 1-1.228-.768Z\"/>";
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

/** Build a <Bd/> icon as a live SVGSVGElement (browser only). */
export function Bd(options: IconOptions = {}): SVGSVGElement {
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
