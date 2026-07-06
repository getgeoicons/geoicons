// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.696 4.841-.413.98a1 1 0 0 0-.071.512l.144 1.164a1 1 0 0 0 .687.83l1.569.502a1 1 0 0 1 .674.748l.473 2.273a1 1 0 0 1-.032.527l-.33.968a1 1 0 0 0 .331 1.112l1.8 1.403a1 1 0 0 1 .24.27l.851 1.403a1 1 0 0 1-.19 1.266l-.023.02a1 1 0 0 1-1.398-.07l-.584-.631a1 1 0 0 1-.211-.353l-.2-.577a1 1 0 0 0-.8-.664l-.574-.084a.587.587 0 0 0-.544.95l.894 1.117a.884.884 0 0 1-.02 1.129l-.156.181a.654.654 0 0 0 .596 1.072l.042-.006a.75.75 0 0 1 .848.579l.097.437a1 1 0 0 0 .857.776l.424.051a1 1 0 0 0 .89-.354l.22-.266a.795.795 0 0 1 1.226.004.795.795 0 0 0 1.179.055l.074-.075a.89.89 0 0 0-.097-1.338l-.532-.4a1 1 0 0 1-.05-1.558l.684-.588a1 1 0 0 0 .337-.611l.097-.647a1 1 0 0 1 .294-.572l.326-.314a1 1 0 0 0-.042-1.477l-.816-.702a1 1 0 0 1-.34-.637l-.003-.021a1 1 0 0 1 .14-.643l.126-.205 2.305-3.15a1 1 0 0 0 .161-.84l-.1-.394a1 1 0 0 0-.622-.689l-2.839-1.05a1 1 0 0 0-.938.132l-.194.142a1 1 0 0 1-1.358-.166l-.118-.14a1 1 0 0 1-.187-.345l-.243-.784a1 1 0 0 0-.317-.473l-.77-.64a.815.815 0 0 1-.07-1.187l.07-.075a.714.714 0 1 0-1.056-.962l-1 1.14L4.817 4.63a1 1 0 0 0-.12.21Zm13.607 3.833-.867.913a.5.5 0 0 0-.05.626l.967 1.419a.5.5 0 0 0 .89-.135l.498-1.614a.5.5 0 0 0-.093-.467l-.599-.718a.5.5 0 0 0-.747-.024Z\"/>";
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

/** Build a <Yt/> icon as a live SVGSVGElement (browser only). */
export function Yt(options: IconOptions = {}): SVGSVGElement {
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
