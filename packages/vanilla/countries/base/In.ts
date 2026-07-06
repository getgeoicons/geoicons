// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.577 21.21-1.113 1.18a.5.5 0 0 1-.735-.007l-.46-.508a.5.5 0 0 1-.089-.137l-2.034-4.691a.5.5 0 0 1-.037-.135l-.487-3.764a.5.5 0 0 0-.735-.375l-.755.413a.5.5 0 0 1-.657-.162l-1.087-1.643a.25.25 0 0 1 .14-.378l1.59-.458a.5.5 0 0 0 .359-.428l.01-.087a.5.5 0 0 0-.128-.389l-.83-.913a.5.5 0 0 1-.069-.577l.321-.584a.5.5 0 0 1 .448-.26l.841.016a.5.5 0 0 0 .408-.199l1.667-2.203a.5.5 0 0 0 .053-.517L5.366 2.66a.5.5 0 0 1 .55-.705l.779.156a.5.5 0 0 0 .351-.06l.984-.578a.5.5 0 0 1 .689.185L9.51 3.06a.5.5 0 0 1-.013.513l-.379.601a.5.5 0 0 0 .17.699l4.234 2.477a.5.5 0 0 0 .189.065l4.272.55a.5.5 0 0 0 .333-.074l2.398-1.528a.5.5 0 0 1 .577.027l.935.731a.5.5 0 0 1-.05.823l-1.012.607a.5.5 0 0 0-.229.312l-.294 1.221a.5.5 0 0 1-.066.155L18.722 13.1l-.149-2.629a.5.5 0 0 0-.332-.443l-1.249-.441a.5.5 0 0 0-.468.072l-.556.421a.5.5 0 0 0-.184.519l.352 1.426a.5.5 0 0 1-.175.512l-5.971 4.73a.5.5 0 0 0-.19.378l-.087 3.235a.5.5 0 0 1-.136.33Z\"/>";
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

/** Build a <In/> icon as a live SVGSVGElement (browser only). */
export function In(options: IconOptions = {}): SVGSVGElement {
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
