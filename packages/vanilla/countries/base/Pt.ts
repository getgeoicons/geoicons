// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.14 20.365.184 1.116a.5.5 0 0 1-.21.493l-.981.675a.5.5 0 0 1-.467.053l-1.412-.558a.5.5 0 0 0-.317-.017l-2.034.561.94-2.667a.5.5 0 0 0 .027-.137l.147-2.526a.5.5 0 0 0-.48-.529l-.696-.027a.5.5 0 0 1-.32-.133l-.802-.744a.5.5 0 0 1-.157-.42l.248-2.313a.5.5 0 0 1 .125-.282l1.218-1.352a.5.5 0 0 0 .115-.221l1.139-4.872a.5.5 0 0 0 .002-.219L8.614 2.55l2.413-1.35.133 1.196a.5.5 0 0 0 .59.436l3.602-.688a.5.5 0 0 1 .588.42l.073.501a.5.5 0 0 0 .283.382l.473.22a.5.5 0 0 1 .118.83l-1.598 1.398a.5.5 0 0 0-.17.351l-.236 4.726a.5.5 0 0 1-.386.462l-1.78.414 1.908 2.313a.5.5 0 0 1 .048.568l-.737 1.281a.5.5 0 0 0 .024.536l.847 1.213a.5.5 0 0 1 .077.403l-.013.053a.5.5 0 0 1-.318.355l-.691.247a.5.5 0 0 0-.297.286l-.396.996a.5.5 0 0 0-.029.266Z\"/>";
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

/** Build a <Pt/> icon as a live SVGSVGElement (browser only). */
export function Pt(options: IconOptions = {}): SVGSVGElement {
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
