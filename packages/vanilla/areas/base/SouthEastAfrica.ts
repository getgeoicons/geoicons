// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m18.79 17.025-.07.012a.66.66 0 0 1-.766-.699l.046-.64a1 1 0 0 0-.01-.233l-.072-.448a1.01 1.01 0 0 1 .38-.961l.182-.14a1 1 0 0 0 .181-.18l.492-.631a.662.662 0 0 1 1.18.472l-.066.676a1 1 0 0 1-.058.25l-.719 1.943a.9.9 0 0 1-.7.58ZM3.778 13.992l-.068-.16a.6.6 0 0 1 .496-.83l.02-.002q.117-.011.234.005l3.953.55.017-2.472.961-.968 1.936.327V8.42l.327-2.918a1 1 0 0 1 .038-.182l.945-3.078a1 1 0 0 1 .75-.685l1.143-.241a1 1 0 0 1 .588.054l.86.355a1 1 0 0 0 .557.06l1.614-.287a.49.49 0 0 1 .446.816l-.515.556a.98.98 0 0 0-.251.787l.15 1.168-.782.915a1 1 0 0 0-.2.37l-.205.7a1 1 0 0 0-.037.35l.062.906c.01.144.051.285.12.411l.427.78a1 1 0 0 1 .122.47l.018 1.78a1 1 0 0 1-.069.374l-.244.625a1 1 0 0 1-.456.514l-.89.482q-.159.086-.277.222l-.686.785a1 1 0 0 0-.244.73l.083 1.136a1 1 0 0 1-.473.924l-.386.237a1 1 0 0 0-.463.688l-.146.88a1 1 0 0 1-.163.402l-1.058 1.534a1 1 0 0 1-.239.244l-1.29.928a1 1 0 0 1-.568.189l-1.033.016a1 1 0 0 0-.224.029l-.934.23a1 1 0 0 1-1.094-.45l-.069-.113a.82.82 0 0 1-.077-.683.82.82 0 0 0-.04-.613l-.447-.927a1 1 0 0 0-.088-.148l-.564-.786a1 1 0 0 1-.169-.392l-.248-1.278a1 1 0 0 1-.017-.253l.041-.649a1 1 0 0 0-.133-.564z\"/>";
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

/** Build a <SouthEastAfrica/> icon as a live SVGSVGElement (browser only). */
export function SouthEastAfrica(options: IconOptions = {}): SVGSVGElement {
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
