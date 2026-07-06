// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.845 9.985 1.808 7.868 1.266 11a.5.5 0 0 0 .287.541l1.365.618a.5.5 0 0 0 .286.038l2.68-.435a.5.5 0 0 0 .28-.147l2.392-2.482a.5.5 0 0 1 .59-.097l2.198 1.143a.5.5 0 0 1 .173.148l1.215 1.658a.5.5 0 0 0 .464.2l1.703-.208a.5.5 0 0 1 .318.067l2.631 1.579a.5.5 0 0 0 .2.068l1.305.15a.5.5 0 0 1 .443.496v.784a.5.5 0 0 0 .128.334l.415.461a.5.5 0 0 1 .111.462l-.24.912a.5.5 0 0 0 .081.424l.327.443a.5.5 0 0 0 .403.204h.572a.5.5 0 0 0 .5-.5v-1.8q0-.085.03-.167l.644-1.815a.5.5 0 0 0 .029-.188l-.062-1.456a.5.5 0 0 0-.5-.48h-1.14a.5.5 0 0 1-.2-.04l-2.168-.947a.5.5 0 0 1-.248-.235l-.715-1.43a.5.5 0 0 0-.424-.276l-3.187-.15a.5.5 0 0 1-.43-.288l-.761-1.638a.5.5 0 0 0-.162-.196l-.906-.652a.5.5 0 0 0-.202-.087l-1.917-.351a.5.5 0 0 0-.268.024l-1.06.403a.5.5 0 0 0-.265.234L7.55 7.52a.5.5 0 0 1-.082.114L5.202 9.985a.5.5 0 0 1-.36.153h-.636a.5.5 0 0 1-.36-.153Z\"/>";
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

/** Build a <Tc/> icon as a live SVGSVGElement (browser only). */
export function Tc(options: IconOptions = {}): SVGSVGElement {
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
