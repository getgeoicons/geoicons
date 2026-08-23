// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.46 5.036a.6.6 0 0 0-.554-.828l-3.97-.008a4 4 0 0 1-1.567-.323l-1.271-.545a.6.6 0 0 0-.834.498l-.074.821a.6.6 0 0 0 .34.597l.837.395a.6.6 0 0 1 .297.774l-.223.533a.6.6 0 0 1-.704.349l-.96-.25a1 1 0 0 0-1.023.333l-.954 1.16a1 1 0 0 1-1.208.264l-1.815-.879a1 1 0 0 0-.8-.031l-.475.186a1 1 0 0 0-.634.987l.097 1.735A1 1 0 0 1 5.73 11.83l-.74-.18a1 1 0 0 0-.838.174l-1.305.985a2 2 0 0 0-.53.602l-.826 1.44a.8.8 0 0 0 .105.939l.726.79a3 3 0 0 0 1.057.74l2.58 1.071a1 1 0 0 0 .7.026l.509-.17a2 2 0 0 1 1.225-.013l8.382 2.6c.336.103.692.117 1.035.04l3.467-.786a.8.8 0 0 0 .59-.554l.228-.772a.8.8 0 0 0-.466-.967l-2.005-.815a.6.6 0 0 1-.334-.77l1.003-2.627a.6.6 0 0 1 .62-.383l.491.05a.6.6 0 0 0 .639-.434l.352-1.253a.6.6 0 0 0-.278-.682l-.53-.306a1.5 1.5 0 0 1-.638-1.87z\"/>";
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

/** Build a <CuSanctiSpiritus/> icon as a live SVGSVGElement (browser only). */
export function CuSanctiSpiritus(options: IconOptions = {}): SVGSVGElement {
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
