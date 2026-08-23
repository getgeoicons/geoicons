// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.772 12.464a.6.6 0 0 0-.283.758l.982 2.426q.262.649.409 1.334l.332 1.558a1 1 0 0 0 .366.583l2.205 1.703q.43.332.795.738l.792.882a1 1 0 0 0 .794.33l2.008-.1a.6.6 0 0 0 .52-.36l.446-1.023a1 1 0 0 1 .741-.585l.748-.134a2 2 0 0 0 1.19-.696l.708-.858a.8.8 0 0 1 1.168-.071l.156.148a.8.8 0 0 0 1.12-.019l.716-.726a2 2 0 0 0 .539-1.018l.461-2.341a1 1 0 0 1 .54-.704l.76-.374a.6.6 0 0 0 .171-.951l-1.153-1.218q-.298-.314-.645-.572l-2.608-1.94a4 4 0 0 1-.779-.765l-1.406-1.822a2 2 0 0 0-.763-.602l-.826-.372a2 2 0 0 1-.752-.588L10.96 3.478a5 5 0 0 0-.76-.778l-.78-.64a3 3 0 0 0-1.26-.61l-.41-.09a2 2 0 0 0-1.39.205.66.66 0 0 0-.338.647l.006.053c.026.25.177.47.4.586L8.73 4.029a2 2 0 0 1 .665.55l1.285 1.646a3 3 0 0 0 .68.636l2.626 1.783a.838.838 0 0 1-.833 1.45l-1.85-.887a2 2 0 0 1-.744-.614l-1.36-1.837a.6.6 0 0 0-.906-.067l-.843.843a.6.6 0 0 0-.023.824l.63.704a.6.6 0 0 1 .07.702l-.206.354a.6.6 0 0 1-.948.116l-.195-.2a.6.6 0 0 0-.893.036l-.618.749a4 4 0 0 1-1.26 1.014z\"/>";
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

/** Build a <CuCamaguey/> icon as a live SVGSVGElement (browser only). */
export function CuCamaguey(options: IconOptions = {}): SVGSVGElement {
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
