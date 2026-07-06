// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.036 16.548.884-2.432a.6.6 0 0 0-.51-.803l-1.768-.16a1 1 0 0 1-.377-.113l-.903-.478a1 1 0 0 1-.367-.332l-.564-.854a1 1 0 0 0-.678-.436l-1.638-.26a.583.583 0 0 1-.028-1.145l1.136-.238a.847.847 0 0 0 .542-1.282l-.54-.852a1 1 0 0 1-.136-.724l.077-.4a1 1 0 0 1 .217-.455L7.956 2.53l.896.772a1 1 0 0 0 .471.225l1.109.204a1 1 0 0 0 .51-.04l2.112-.739a1 1 0 0 0 .43-.293l1.02-1.192a.634.634 0 0 1 1.051.134l.78 1.6a1 1 0 0 1 .073.204l.362 1.511a1 1 0 0 0 .345.546l.95.766a1 1 0 0 1 .202.218L19.58 8.39a1 1 0 0 1 .147.34l.487 2.163a1 1 0 0 1-.476 1.086l-.465.269a1 1 0 0 0-.45.556l-.4 1.223a1 1 0 0 0 .018.671l.52 1.344a1 1 0 0 1 .063.444l-.106 1.272q-.017.204-.113.386l-.653 1.229a1 1 0 0 1-1.114.504l-1.126-.267a1 1 0 0 0-1.004.338l-1.216 1.48a1 1 0 0 1-.385.288l-2.194.923a1 1 0 0 1-.772.001l-2.34-.975a1 1 0 0 1-.56-.594l-.235-.677a1 1 0 0 1 .055-.786l.87-1.694a1 1 0 0 1 .539-.48l.776-.29a1 1 0 0 0 .589-.595Z\"/>";
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

/** Build a <ThePacificPlate/> icon as a live SVGSVGElement (browser only). */
export function ThePacificPlate(options: IconOptions = {}): SVGSVGElement {
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
