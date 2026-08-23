// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.33 21.738a.6.6 0 0 0 .91.512l1.102-.667c.2-.121.421-.206.651-.251l8.358-1.638a.6.6 0 0 0 .484-.613l-.117-2.982a1 1 0 0 1 .23-.68l1.018-1.221a2 2 0 0 0 .464-1.245l.051-2.864a1.5 1.5 0 0 1 1.167-1.436l4.468-1.018a.3.3 0 0 0 .13-.52l-2.867-2.458a2 2 0 0 1-.517-.685l-.597-1.303a1 1 0 0 0-.522-.506l-1.763-.739a1 1 0 0 0-.995.128l-1.134.868a1 1 0 0 0-.365.564l-.468 1.984a2 2 0 0 1-.448.865L9.037 8.701a1 1 0 0 1-1.324.157l-2.352-1.65a1 1 0 0 0-.902-.127l-1.483.514a1 1 0 0 0-.672.947z\"/>";
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

/** Build a <BzOrangeWalk/> icon as a live SVGSVGElement (browser only). */
export function BzOrangeWalk(options: IconOptions = {}): SVGSVGElement {
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
