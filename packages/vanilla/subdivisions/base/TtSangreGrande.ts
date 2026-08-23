// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.424 22.528a.6.6 0 0 0 .703-.675l-.313-2.2a1 1 0 0 1 .5-1.013l.417-.234a1 1 0 0 0 .498-1.027l-1.146-7.264a1 1 0 0 1 .648-1.096l1.143-.413a1 1 0 0 0 .462-.342l3.973-5.319a1 1 0 0 0 .197-.534l.004-.07a1 1 0 0 0-.685-1.013l-.642-.212a1 1 0 0 0-.348-.05l-4.806.167a1 1 0 0 0-.183.023L7.613 2.645a.6.6 0 0 0-.449.744l.338 1.231a1 1 0 0 1-.58 1.188l-2.65 1.103a1 1 0 0 0-.538 1.311l1.504 3.572a1 1 0 0 1-.2 1.08l-.867.904a1 1 0 0 0-.226 1.01l1.053 3.14a1 1 0 0 1 .019.573l-.56 2.12a1 1 0 0 0 .083.723l.335.632A1 1 0 0 0 6 22.478l2.824-.706a1 1 0 0 1 .424-.013z\"/>";
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

/** Build a <TtSangreGrande/> icon as a live SVGSVGElement (browser only). */
export function TtSangreGrande(options: IconOptions = {}): SVGSVGElement {
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
