// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.643 13.551a.3.3 0 0 1 .148.237l.123 1.663a1 1 0 0 1-.54.964l-.582.298a1 1 0 0 0-.536.764l-.027.214a1 1 0 0 0 .365.906l1.4 1.125a1 1 0 0 0 .344.18l1.346.396a1 1 0 0 1 .69.728l.27 1.134a.64.64 0 0 0 1.093.288l1.605-1.731c.461-.497.87-1.04 1.222-1.62l3.184-5.256a2 2 0 0 0-.014-2.095l-1.163-1.864a1 1 0 0 1 .077-1.165l.84-1.022a1 1 0 0 1 1.19-.273l.768.353a1 1 0 0 1 .349.266l.935 1.116a.3.3 0 0 0 .506-.075l.432-1.017a1 1 0 0 0-.012-.81l-.446-.968a1 1 0 0 0-.551-.516l-.913-.348a1 1 0 0 1-.574-1.299l.601-1.54a1 1 0 0 0-.891-1.363l-.181-.007a1 1 0 0 0-.643.201l-3.875 2.927a1 1 0 0 0-.387.94l.096.667a1 1 0 0 1-.42.965l-2.025 1.4a1 1 0 0 1-1.051.054l-1.66-.915a.3.3 0 0 0-.377.072l-.638.777a.3.3 0 0 0 .028.41l.475.442a.3.3 0 0 1 .09.285l-.336 1.505a.3.3 0 0 1-.334.232l-.898-.124a.3.3 0 0 0-.341.297v1.309a.3.3 0 0 0 .149.26z\"/>";
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

/** Build a <DoBarahona/> icon as a live SVGSVGElement (browser only). */
export function DoBarahona(options: IconOptions = {}): SVGSVGElement {
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
