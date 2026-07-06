// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.334 4.029 8.74 2.08a.595.595 0 0 0-1.162.225L7.88 5.87a1 1 0 0 1-.014.272L7.49 8.117a1 1 0 0 0-.016.251l.114 1.789a1 1 0 0 1-.028.306l-.49 1.958a1 1 0 0 0-.03.255l.064 5.063.217 1.422a1 1 0 0 0 .043.176l.54 1.565q.056.155.157.287l.643.827a1 1 0 0 0 .443.324l1.066.394a1 1 0 0 0 .367.062l1.036-.021a.6.6 0 0 0 .239-1.146l-.775-.357a1 1 0 0 1-.53-.592l-.224-.673a.6.6 0 0 1 .069-.52l.476-.722a.6.6 0 0 0-.037-.71l-.187-.229a.6.6 0 0 1-.135-.35l-.019-.387a.6.6 0 0 1 .369-.583l.322-.135a.6.6 0 0 0 .332-.343l.878-2.338a.6.6 0 0 1 .51-.387l.783-.066a1 1 0 0 0 .647-.315l.06-.065a.6.6 0 0 0 .145-.548l-.44-1.85a.6.6 0 0 1 .015-.33l.478-1.424a.6.6 0 0 1 .25-.317l1.762-1.102a.6.6 0 0 0 .278-.44l.028-.242a.6.6 0 0 0-.373-.627l-4.344-1.74a1 1 0 0 0-.532-.059l-1.656.268a.6.6 0 0 1-.67-.417Z\"/>";
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

/** Build a <Patagonia/> icon as a live SVGSVGElement (browser only). */
export function Patagonia(options: IconOptions = {}): SVGSVGElement {
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
