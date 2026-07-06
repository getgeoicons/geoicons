// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.792 4.707-1.617 3.235a.5.5 0 0 0 .015.475l.79 1.357a.5.5 0 0 1-.186.687l-3.025 1.718a1 1 0 0 0-.497.737l-.196 1.471a.5.5 0 0 1-.096.236l-.623.825a.5.5 0 0 0 .013.62l.738.89a.5.5 0 0 0 .655.103l.56-.36a.5.5 0 0 0 .229-.404l.05-1.481a.5.5 0 0 1 .206-.389l4.409-3.185a.5.5 0 0 0 .207-.423l-.051-1.404a.5.5 0 0 1 .095-.31l.967-1.338a.5.5 0 0 0 .094-.259l.313-4.587a.5.5 0 0 0-.047-.249l-.474-.997a.5.5 0 0 0-.689-.225l-.322.174a.5.5 0 0 0-.226.627l.348.864a.5.5 0 0 1 .014.336l-.187.598a.5.5 0 0 1-.45.35l-.596.032a.5.5 0 0 0-.42.276ZM8.814 17.829l-1.113 1.595a.5.5 0 0 0 .027.608l.254.302a.5.5 0 0 0 .732.035l1.258-1.23a.5.5 0 0 0 .08-.613l-.399-.667a.5.5 0 0 0-.839-.03Zm-1.875 3.478-.298-.324a.5.5 0 0 0-.733-.002l-.44.47a.5.5 0 0 0 0 .683l.276.296a.5.5 0 0 0 .711.02l.462-.444a.5.5 0 0 0 .022-.7Z\"/>";
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

/** Build a <Pw/> icon as a live SVGSVGElement (browser only). */
export function Pw(options: IconOptions = {}): SVGSVGElement {
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
