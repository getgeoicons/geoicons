// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.022 12.367-2.555 1.484a.6.6 0 0 0-.27.702l.19.59a1 1 0 0 0 .338.484l1.755 1.367a1 1 0 0 0 .293.158l1.747.593a1 1 0 0 1 .653.723l.174.757a1 1 0 0 0 .907.774l1.187.08a1 1 0 0 1 .669.322l1.602 1.744a1 1 0 0 0 .608.315l2.185.282a.6.6 0 0 0 .628-.359l.383-.895a.6.6 0 0 0-.134-.667l-.695-.673a1 1 0 0 1-.175-1.21l.352-.623a1 1 0 0 0-.09-1.116l-.94-1.176a1 1 0 0 1-.215-.522l-.087-.843a1 1 0 0 1 .082-.51l.69-1.545a1 1 0 0 0-.061-.932l-.46-.748a.6.6 0 0 1 .356-.895l1.702-.453a1 1 0 0 0 .623-.493l.53-.983a.6.6 0 0 0-.236-.809l-.61-.34a.6.6 0 0 1-.306-.503l-.02-.575a.6.6 0 0 1 .59-.62l.419-.007a.6.6 0 0 0 .566-.433l.404-1.404a1 1 0 0 0-.2-.926l-.757-.888a1 1 0 0 0-.75-.35l-3.797-.041a1 1 0 0 0-.458.105l-1.408.704a1 1 0 0 0-.457.467l-.619 1.31a1 1 0 0 0-.078.244l-.663 3.536a1 1 0 0 1-.185.42l-3.111 4.116a1 1 0 0 1-.296.262Z\"/>";
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

/** Build a <Benelux/> icon as a live SVGSVGElement (browser only). */
export function Benelux(options: IconOptions = {}): SVGSVGElement {
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
