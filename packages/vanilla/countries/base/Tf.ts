// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.194 6.245 2.64 9.14a1 1 0 0 0 .272.893l.475.479a1 1 0 0 1 .29.747l-.07 1.62a1 1 0 0 1-1.103.952l-.345-.037a.765.765 0 0 0-.244 1.509l1.637.36a.5.5 0 0 1 .365.652l-1.118 3.248a1 1 0 0 0 .075.817l.103.184a1 1 0 0 0 1.103.48l1.983-.472a.5.5 0 0 0 .31-.225l.822-1.34a1 1 0 0 1 .629-.45l.745-.171a1 1 0 0 1 1.084.465l.285.48a1 1 0 0 0 .785.489l1.26.095a.903.903 0 0 0 .971-.9V18.8a.688.688 0 0 1 1.329-.25l.662 1.695a1 1 0 0 0 .752.62l1.644.3a1 1 0 0 0 .572-.064l.986-.42a1 1 0 0 0 .528-.528l.49-1.155a1 1 0 0 0-.596-1.337l-.846-.29a1 1 0 0 0-.658.005l-.805.286a1 1 0 0 1-.851-.085l-.222-.134a1 1 0 0 1-.465-1.054l.137-.683a1 1 0 0 1 .894-.8l1.961-.17a1 1 0 0 1 .895.405l.548.75a.865.865 0 0 0 1.549-.67l-.06-.319a.5.5 0 0 1 .092-.392l1.054-1.403a1 1 0 0 0 .186-.766l-.244-1.45a1 1 0 0 0-.644-.773l-1.038-.377a1 1 0 0 0-1.222.466l-.336.627a.5.5 0 0 1-.64.222l-.705-.306a1 1 0 0 0-.922.066l-1.54.948a.5.5 0 0 0-.166.166l-.604.994a1 1 0 0 1-.708.47l-1.553.23a.68.68 0 0 1-.262-1.33l.494-.122a.5.5 0 0 0 .373-.395l.256-1.392a1 1 0 0 0-.085-.62l-.406-.834a1 1 0 0 0-1.612-.263l-1.016 1.03a.769.769 0 0 1-1.098-1.076l1.621-1.66a.808.808 0 1 0-1.158-1.124l-.848.879a.904.904 0 0 1-1.465-1.018l.243-.509a.5.5 0 0 0-.045-.508L6.318 3.18a.961.961 0 0 0-1.74.562v.7a.5.5 0 0 1-.153.36l-.944.912a1 1 0 0 0-.287.53Z\"/>";
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

/** Build a <Tf/> icon as a live SVGSVGElement (browser only). */
export function Tf(options: IconOptions = {}): SVGSVGElement {
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
