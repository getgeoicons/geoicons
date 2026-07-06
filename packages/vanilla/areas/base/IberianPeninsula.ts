// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.33 15.731-.304 1.667a.6.6 0 0 0 .468.695l.952.198a1 1 0 0 0 .604-.062l.547-.239a1 1 0 0 1 .978.101l.333.236a1 1 0 0 1 .382.538l.234.81a1 1 0 0 0 .514.616l.249.125a1 1 0 0 0 1.118-.153l1.037-.94a1 1 0 0 1 .705-.258l2.936.1a1 1 0 0 0 .976-.662l.094-.263a1 1 0 0 1 .709-.636l.736-.177a.6.6 0 0 0 .436-.412l.285-.962a1 1 0 0 1 .336-.498l.724-.576a.6.6 0 0 0 .123-.806l-.575-.846a1 1 0 0 1-.022-1.09l1.457-2.342a1 1 0 0 1 .398-.364l3.662-1.855a.6.6 0 0 0 .324-.611l-.077-.607a.6.6 0 0 0-.682-.517l-1.949.285a1 1 0 0 1-.565-.082l-1.054-.49a1 1 0 0 0-.466-.091l-1.748.078a1 1 0 0 1-.617-.18l-1.401-.977a1 1 0 0 0-.618-.18l-3.535.162a1 1 0 0 1-.3-.032l-1.68-.442a1 1 0 0 0-.316-.03l-1.36.083a1 1 0 0 1-.596-.152l-.486-.307a1 1 0 0 0-.999-.04l-1.475.775A1 1 0 0 0 2.3 5.367l.691 4.255a1 1 0 0 1-.064.546l-1.41 3.375a.97.97 0 0 0 .376 1.194.97.97 0 0 1 .436.994Z\"/>";
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

/** Build a <IberianPeninsula/> icon as a live SVGSVGElement (browser only). */
export function IberianPeninsula(options: IconOptions = {}): SVGSVGElement {
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
