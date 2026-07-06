// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.656 7.549-1.244-1.38a.615.615 0 0 1 .548-1.02l1.244.186a1 1 0 0 0 .373-.014l1.98-.457a1 1 0 0 0 .482-.267l.483-.483a1 1 0 0 0 .29-.63l.095-1.235a.726.726 0 0 1 1.414-.17l.213.655a1 1 0 0 0 .218.37l1.338 1.44a1 1 0 0 0 1.006.282l1.702-.484a.6.6 0 0 1 .755.68l-.112.639q-.035.197-.142.365L16.881 8.25a1 1 0 0 1-.236.258l-2.518 1.921a1 1 0 0 0-.324.428l-.447 1.132a1 1 0 0 0-.062.493l.501 3.946a1 1 0 0 1-.388.923l-1.599 1.211a1 1 0 0 0-.392.886l.11 1.231a1 1 0 0 1-.153.627l-.763 1.196a.54.54 0 0 1-.985-.184l-.292-1.452a1 1 0 0 0-.535-.697l-.494-.246a1 1 0 0 1-.381-.332l-.85-1.246a1 1 0 0 0-.36-.322l-.883-.463a1 1 0 0 1-.535-.907l.014-.696a1 1 0 0 1 .319-.711l.313-.292a1 1 0 0 1 1.005-.214l.33.113a1 1 0 0 0 1.137-.365l.515-.719a1 1 0 0 0 .116-.95l-.374-.947a1 1 0 0 1-.07-.363l-.006-1.114a1 1 0 0 1 .09-.421l.313-.684a1 1 0 0 0-.62-1.373l-.268-.08a1 1 0 0 1-.453-.288Z\"/>";
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

/** Build a <EastAfricaSimplified/> icon as a live SVGSVGElement (browser only). */
export function EastAfricaSimplified(options: IconOptions = {}): SVGSVGElement {
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
