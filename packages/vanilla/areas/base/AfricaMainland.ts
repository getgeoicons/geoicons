// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.272 22.3-.05-.068a1 1 0 0 1-.118-.206l-.632-1.504a1 1 0 0 1-.069-.25l-.166-1.198a1 1 0 0 0-.094-.305l-.538-1.09a1 1 0 0 1-.046-.774l.326-.928a1 1 0 0 0 .04-.52l-.222-1.155a1 1 0 0 0-.204-.44l-.513-.636a1 1 0 0 1-.209-.789l.048-.29a1 1 0 0 0-.602-1.084l-.665-.278a1 1 0 0 0-.667-.037l-1.108.325a1 1 0 0 1-.194.036l-1.138.1a1 1 0 0 1-.735-.235l-.968-.824a1 1 0 0 1-.172-.188L2.76 8.794a1 1 0 0 1-.179-.523l-.077-1.517a1 1 0 0 1 .088-.462l.394-.875a1 1 0 0 1 .236-.325l.829-.76a1 1 0 0 0 .313-.588l.07-.465a1 1 0 0 1 .225-.497l.53-.625a1 1 0 0 1 1.053-.311l.143.043a1 1 0 0 0 .745-.066l.843-.429a1 1 0 0 1 .408-.108l1.303-.059a.6.6 0 0 1 .627.574l.008.202a1 1 0 0 0 .599.873l1.05.459c.32.14.696.05.919-.219a.78.78 0 0 1 .874-.237l1.2.44a1 1 0 0 0 .554.04l.637-.138a.6.6 0 0 1 .724.643l-.083.882a1 1 0 0 0 .092.522l1.184 2.5a1 1 0 0 0 .25.329l.867.75a1 1 0 0 0 .728.242l1.594-.117-.066.653a1 1 0 0 1-.166.46l-.973 1.44a1 1 0 0 1-.181.202l-1.534 1.301a1 1 0 0 0-.344.895l.3 2.25a1 1 0 0 1-.461.98l-.685.428a1 1 0 0 0-.467.92l.047.64a1 1 0 0 1-.155.61l-.557.871-1.305 1.532a1 1 0 0 1-.586.336l-1.123.2a1 1 0 0 1-.98-.39Z\"/>";
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

/** Build a <AfricaMainland/> icon as a live SVGSVGElement (browser only). */
export function AfricaMainland(options: IconOptions = {}): SVGSVGElement {
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
