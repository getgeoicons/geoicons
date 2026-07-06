// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.466 9.782 1.95 8.492a.5.5 0 0 1 .206-.867l.185-.045a.5.5 0 0 1 .383.062l3.074 1.924a.5.5 0 0 1 .112.097l1.445 1.666a.5.5 0 0 1 .044.597l-.475.742a.5.5 0 0 1-.633.184l-.942-.44a.5.5 0 0 1-.203-.173L3.557 9.883a.5.5 0 0 0-.09-.101Zm5.723 1.619-.344-1.088a.5.5 0 0 1 .514-.649l1.061.08a.5.5 0 0 0 .481-.268l.346-.664a.5.5 0 0 1 .476-.268l.554.036a.5.5 0 0 1 .459.407l.124.664a.5.5 0 0 1-.04.306l-.887 1.87a.5.5 0 0 1-.55.277l-1.815-.363a.5.5 0 0 1-.38-.34Zm5.131-1.361-.589 1.224a.5.5 0 0 0-.043.295l.104.657a.5.5 0 0 0 .554.418l.812-.098a.5.5 0 0 0 .424-.623l-.13-.495a.5.5 0 0 1 .05-.375l.507-.889a.25.25 0 0 0-.21-.374l-1.016-.023a.5.5 0 0 0-.463.283Zm-6.216 3.517-.425.431a.5.5 0 0 0 .235.836l6.367 1.591a.5.5 0 0 0 .401-.07l2.184-1.476a.5.5 0 0 0-.322-.914l-3.567.294a.5.5 0 0 1-.135-.007l-4.287-.826a.5.5 0 0 0-.451.14Zm10.611-1.043-.863-.992a.25.25 0 0 1 .124-.405l1.145-.308a.5.5 0 0 1 .286.008l3.047 1.004a.5.5 0 0 1 .344.478l-.015 2.322a.5.5 0 0 1-.544.495l-1.29-.114a.5.5 0 0 1-.41-.706l.246-.539a.5.5 0 0 0-.327-.69l-1.494-.398a.5.5 0 0 1-.25-.155Z\"/>";
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

/** Build a <Id/> icon as a live SVGSVGElement (browser only). */
export function Id(options: IconOptions = {}): SVGSVGElement {
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
