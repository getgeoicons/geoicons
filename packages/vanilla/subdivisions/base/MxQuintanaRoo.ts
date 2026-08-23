// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.693 21.81a.8.8 0 0 0 .7.832l.726.091a.8.8 0 0 0 .799-.405l1.428-2.568a.6.6 0 0 1 .549-.308l1.575.063a.6.6 0 0 1 .573.55l.139 1.65a.602.602 0 0 0 1.178.118l1.896-6.495a4 4 0 0 0 .15-1.413l-.21-2.876a4 4 0 0 1 .464-2.183l.239-.445c.173-.322.39-.62.643-.883l1.855-1.927a2 2 0 0 0 .556-1.281l.029-.537a2 2 0 0 0-.399-1.309l-.758-1.007a.6.6 0 0 0-.552-.235l-1.892.23a.6.6 0 0 0-.527.606l.04 2.293a1 1 0 0 1-.226.652l-2.689 3.28a1 1 0 0 1-.53.337l-1.938.484a1 1 0 0 0-.435.235l-3.899 3.59a.3.3 0 0 0-.038.399l.773 1.047a.6.6 0 0 1 .116.385z\"/>";
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

/** Build a <MxQuintanaRoo/> icon as a live SVGSVGElement (browser only). */
export function MxQuintanaRoo(options: IconOptions = {}): SVGSVGElement {
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
