// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.522 14.337-.737.819a.25.25 0 0 1-.435-.152l-.137-2.277a.5.5 0 0 1 .126-.363l1.635-1.832a.5.5 0 0 1 .373-.167l7.225.009a.5.5 0 0 0 .491-.404l.157-.802a.5.5 0 0 1 .423-.4l2.483-.338a.5.5 0 0 1 .39.114L16.05 9.84a.5.5 0 0 0 .291.117l.994.062a.5.5 0 0 1 .333.157l.954 1.016a.5.5 0 0 0 .51.136l2.302-.705a.5.5 0 0 1 .602.272l.534 1.178a.5.5 0 0 1-.298.681l-3.424 1.13a.5.5 0 0 1-.419-.049l-4.746-2.918a.5.5 0 0 0-.678.149l-.872 1.31a.5.5 0 0 1-.422.222l-2.836-.034a.5.5 0 0 0-.506.504l.005.587a.5.5 0 0 1-.499.504l-4.983.013a.5.5 0 0 0-.37.165Z\"/>";
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

/** Build a <Gm/> icon as a live SVGSVGElement (browser only). */
export function Gm(options: IconOptions = {}): SVGSVGElement {
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
