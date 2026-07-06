// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.322 18.494-1.369-1.821a.5.5 0 0 1-.09-.403l.287-1.362a.5.5 0 0 0-.137-.458l-1.549-1.534a.25.25 0 0 1 .078-.407l1.06-.453a.5.5 0 0 0 .26-.664l-.304-.683a.5.5 0 0 1 .083-.535l.742-.838a.5.5 0 0 0 .112-.449l-.634-2.621a.5.5 0 0 1 .394-.61l3.866-.718a.5.5 0 0 1 .209.005l5.317 1.29a.5.5 0 0 1 .267.166l.86 1.037a.5.5 0 0 0 .358.18l3.543.197a.5.5 0 0 1 .466.574l-.08.537a.5.5 0 0 1-.552.423l-2.052-.237a.5.5 0 0 0-.555.449l-.038.397a.5.5 0 0 0 .444.545l4.3.466a.5.5 0 0 1 .213.075l2.5 1.582a.5.5 0 0 1 .117.74l-1.68 2.033a.5.5 0 0 1-.76.012l-.901-1.025a.5.5 0 0 0-.336-.168l-5.177-.413a.5.5 0 0 0-.393.144l-.948.946a.5.5 0 0 1-.285.142l-1.722.238a.5.5 0 0 1-.553-.374l-.106-.425a.5.5 0 0 0-.686-.337l-1.36.596a.5.5 0 0 0-.225.197l-2.158 3.525a.5.5 0 0 1-.826.04Z\"/>";
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

/** Build a <Do/> icon as a live SVGSVGElement (browser only). */
export function Do(options: IconOptions = {}): SVGSVGElement {
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
