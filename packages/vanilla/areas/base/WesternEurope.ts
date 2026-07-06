// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.711 13.577-.94 3.155a.6.6 0 0 0 .362.732l3.81 1.445a.6.6 0 0 0 .693-.202l.355-.476a1 1 0 0 1 1.24-.302l.748.365a1 1 0 0 0 1.08-.133l.602-.505a1 1 0 0 0 .345-.92l-.242-1.548a1 1 0 0 1 .713-1.116l3.559-1.02a1 1 0 0 1 .531-.005l2.13.566a1 1 0 0 0 .559-.014l1.013-.32a1 1 0 0 0 .544-.421l.652-1.036a1 1 0 0 0 .13-.75l-.048-.214a1 1 0 0 0-1.069-.779l-1.537.143a1 1 0 0 1-.873-.371l-.88-1.1a.6.6 0 0 1 .275-.942l1.285-.44a1 1 0 0 0 .65-1.177l-.834-3.505a1 1 0 0 0-1.347-.696l-1.022.413a1 1 0 0 1-.898-.075l-1.083-.665a.6.6 0 0 0-.906.409l-.126.729a1 1 0 0 1-.7.788l-1.917.57a1 1 0 0 0-.43.258L7.569 8.054a1 1 0 0 1-1.12.213l-.611-.272a.6.6 0 0 0-.843.502l-.014.187a.6.6 0 0 1-.769.53l-.88-.262a1 1 0 0 0-.32-.04l-.634.022a.935.935 0 0 0-.342 1.79l1.489.654a1 1 0 0 1 .442.38l.632.998a1 1 0 0 1 .113.82Zm9.158 6.953.064.728a1 1 0 0 0 .33.658l.344.308a.6.6 0 0 0 .959-.229l.47-1.201a1 1 0 0 0-.005-.74l-.31-.766a.6.6 0 0 0-1.002-.177l-.596.66a1 1 0 0 0-.254.758Z\"/>";
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

/** Build a <WesternEurope/> icon as a live SVGSVGElement (browser only). */
export function WesternEurope(options: IconOptions = {}): SVGSVGElement {
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
