// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.183 19.363c1.711-.52 2.559-1.134 3.972-2.206 1.421-1.078 1.814-2.142 3.251-3.199.719-.528 3.985-2.554 5.286-3.357a.3.3 0 0 0-.062-.539l-.689-.239a1.24 1.24 0 0 1-.568-.405l-.044-.056a1.13 1.13 0 0 1 .646-1.804l.08-.017c.327-.072.669-.014.954.16l1.023.626a1 1 0 0 0 1.488-.597l.13-.492a1 1 0 0 0-.27-.973L20.831 4.76a1 1 0 0 0-1.284-.092L17.23 6.349a2 2 0 0 0-.758 1.104l-.015.054a2 2 0 0 1-.971 1.239l-.487.267c-.294.161-.487.46-.54.79-.085.524-.259 1.315-.589 1.807s-.613.732-1.135 1.01c-.826.44-2.143.544-2.143.544H8.966a.6.6 0 0 0-.426 1.022l.74.747a.6.6 0 0 1-.167.964l-2.195 1.05a1 1 0 0 0-.264.184l-.822.794a1 1 0 0 1-.695.281h-.095a1 1 0 0 1-.852-.477l-.72-1.172a1 1 0 0 1 .094-1.175l3.386-3.936a.653.653 0 0 0-.936-.906L3.74 12.627a1 1 0 0 1-.43.233l-.764.194a.89.89 0 0 0-.623 1.148.9.9 0 0 1-.071.729l-.484.844a.92.92 0 0 0-.113.628c.083.44.265 1.215.577 1.688.264.399.829.901.829.901s.594.493 1.047.658c.742.27 1.29.176 2.073.068.552-.076.868-.194 1.401-.355Z\"/>";
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

/** Build a <Bm/> icon as a live SVGSVGElement (browser only). */
export function Bm(options: IconOptions = {}): SVGSVGElement {
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
