// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.1 13.31.602.232a1 1 0 0 1 .527 1.399l-.53 1.008a.6.6 0 0 0 .484.877l1.367.108a1 1 0 0 0 .575-.128l1.252-.716a1 1 0 0 1 .8-.084l.879.28a1 1 0 0 1 .59.506l.642 1.285a1 1 0 0 1 .05.773l-.285.828a1 1 0 0 0 .407 1.169l1.52.97a1 1 0 0 0 .573.157l1.393-.05a1 1 0 0 1 .384.062l1.26.468a1 1 0 0 0 1.283-.582l1.219-3.211a1 1 0 0 0-.06-.838l-.836-1.519a1 1 0 0 1-.034-.898l.314-.687a1 1 0 0 0-.013-.858l-.684-1.386a1 1 0 0 0-1.265-.488l-.904.358a.6.6 0 0 1-.604-.096l-.74-.615a.6.6 0 0 1 .004-.927l1.478-1.205a1 1 0 0 0 .215-1.308l-.296-.47a1 1 0 0 1 .078-1.173l.547-.655a1 1 0 0 0 .083-1.167l-1.596-2.581a.6.6 0 0 0-1.055.063l-.654 1.412a1 1 0 0 1-.538.51L9.529 5.72a1 1 0 0 0-.615.748l-.137.746a1 1 0 0 1-1.054.816l-1.434-.1a1 1 0 0 0-.636.172l-1.2.822a1 1 0 0 0-.412.608l-.228 1.025a1 1 0 0 0 .053.601l.669 1.605a1 1 0 0 0 .565.549Z\"/>";
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

/** Build a <Rhineland/> icon as a live SVGSVGElement (browser only). */
export function Rhineland(options: IconOptions = {}): SVGSVGElement {
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
