// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.806 22.506-2.613.275a.5.5 0 0 1-.333-.084l-1.286-.875a.5.5 0 0 1-.197-.266l-.61-1.974a.5.5 0 0 1 .112-.488l.493-.531a.5.5 0 0 1 .41-.158l.645.057a.5.5 0 0 0 .541-.552l-.113-1.054a.5.5 0 0 1 .088-.34l1.366-1.947a.5.5 0 0 1 .355-.21l.755-.082a.5.5 0 0 0 .445-.475l.022-.505a.5.5 0 0 0-.554-.519l-1.834.202a.5.5 0 0 1-.33-.08l-.993-.652a.5.5 0 0 1-.115-.732l.713-.885a.5.5 0 0 0-.064-.693l-.769-.66a.5.5 0 0 1-.153-.523l.33-1.099a.5.5 0 0 1 .552-.35l3.157.466a.5.5 0 0 0 .463-.18l1.27-1.58-1.418-.408a.25.25 0 0 1-.135-.385l1.71-2.41a.5.5 0 0 1 .35-.206l1.494-.174a.5.5 0 0 0 .299-.146l.807-.822a.5.5 0 0 1 .582-.096l1.153.582a.5.5 0 0 1 .043.868l-1.179.751a.5.5 0 0 0-.135.128l-2.177 2.99a.5.5 0 0 0 .11.699l1.218.884a.5.5 0 0 0 .701-.116l.649-.914a.5.5 0 0 1 .68-.13l2.654 1.718-.662.632a.5.5 0 0 0-.098.592l.97 1.864a.5.5 0 0 1 .056.21l.083 2.04a.5.5 0 0 1-.03.193l-1.075 2.907a.5.5 0 0 0-.012.311l.24.831a.5.5 0 0 1-.464.638l-3.108.109a.5.5 0 0 0-.269.09l-4.557 3.177a.5.5 0 0 1-.233.087Z\"/>";
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

/** Build a <Ie/> icon as a live SVGSVGElement (browser only). */
export function Ie(options: IconOptions = {}): SVGSVGElement {
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
