// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.782 18.128.394-.742a1.9 1.9 0 0 0 .226-.811c.061-1.197.08-2.566.086-3.253a1.5 1.5 0 0 0-.238-.815l-1.4-2.169a2 2 0 0 0-1.381-.892l-.98-.148a1 1 0 0 1-.767-.59l-.168-.387a.8.8 0 0 1 .494-1.082l.862-.27a.93.93 0 0 1 .983.282c.237.278.614.39.965.288l.223-.065a1 1 0 0 0 .712-1.087l-.091-.718a.6.6 0 0 1 .788-.644l1.464.499a1 1 0 0 0 .994-.206l1.333-1.21a1 1 0 0 0 .328-.729l.011-1.005a.6.6 0 0 1 .466-.577l.416-.096a.6.6 0 0 1 .524.128l2.993 2.55a3 3 0 0 0 .943.544L19.85 6.3a.6.6 0 0 1 .374.74l-.768 2.543a1 1 0 0 1-.278.445l-1.608 1.487a.6.6 0 0 0 .11.962l.503.287a.6.6 0 0 1 .3.57l-.176 2.195a1 1 0 0 0 .511.954l.272.151a.6.6 0 0 1 .11.972l-1.335 1.197a1 1 0 0 1-1.008.196l-2.172-.785a1 1 0 0 0-.84.074l-.489.282a1 1 0 0 0-.494.972l.011.109a.6.6 0 0 1-.724.65l-5.965-1.307a.6.6 0 0 1-.402-.867Zm14.244 2.545.031.546a.909.909 0 0 0 1.745.302l.653-1.548a.884.884 0 0 0-1.321-1.07l-.376.263a1.72 1.72 0 0 0-.732 1.507Z\"/>";
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

/** Build a <Fr/> icon as a live SVGSVGElement (browser only). */
export function Fr(options: IconOptions = {}): SVGSVGElement {
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
