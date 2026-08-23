// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.67 12.524a.3.3 0 0 0-.258-.399l-4.085-.337a.6.6 0 0 1-.46-.28l-1.102-1.77a.6.6 0 0 0-.822-.194l-.654.4a1 1 0 0 1-1.024.01l-.143-.083a1 1 0 0 1-.49-.979L13.7 8.3a1 1 0 0 0-.864-1.106l-.244-.032a1 1 0 0 1-.757-.53l-.654-1.259a1 1 0 0 0-.672-.515l-.074-.017a.8.8 0 0 0-.921.499l-.374.988a1 1 0 0 1-.65.605l-1.95.579a.6.6 0 0 1-.662-.232l-.407-.583a.6.6 0 0 0-.548-.254l-.228.022a.6.6 0 0 0-.483.333l-.412.839a1 1 0 0 1-.77.55l-.803.104a.95.95 0 0 0-.7 1.423l1.578 2.703a1 1 0 0 1-.034 1.062l-1.439 2.14a.6.6 0 0 0 .299.9l6.489 2.288c.461.162.941.268 1.429.314l.486.046a6 6 0 0 0 2.862-.43l2.738-1.134a6 6 0 0 1 2.161-.456l.635-.014a6 6 0 0 1 1.53.163l1.443.345a.3.3 0 0 0 .368-.33l-.258-2.039a1 1 0 0 1 .05-.458z\"/>";
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

/** Build a <MxOaxaca/> icon as a live SVGSVGElement (browser only). */
export function MxOaxaca(options: IconOptions = {}): SVGSVGElement {
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
