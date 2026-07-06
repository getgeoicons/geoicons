// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.081 11.02.214.733a.5.5 0 0 1-.255.587l-.905.456a.5.5 0 0 0-.155.12l-.633.737a.5.5 0 0 0-.116.395l.106.759a.5.5 0 0 0 .73.372l1.576-.838a.5.5 0 0 1 .342-.047l1.78.392a.5.5 0 0 1 .391.458l.025.4a.5.5 0 0 0 .024.126l.521 1.588a.5.5 0 0 0 .67.305l.69-.292a.5.5 0 0 0 .238-.21l.284-.492a.5.5 0 0 1 .474-.249l.226.02a.5.5 0 0 1 .421.307l.505 1.227a.5.5 0 0 0 .408.307l.027.002a.5.5 0 0 0 .48-.236l.396-.648a.5.5 0 0 1 .775-.098l.878.855a.5.5 0 0 0 .684.013l.09-.082a.5.5 0 0 0 .163-.322l.07-.712a.5.5 0 0 1 .214-.364l.886-.61a.5.5 0 0 0 .216-.402l.018-.914a.5.5 0 0 1 .216-.402l1.07-.74a.5.5 0 0 0 .212-.462l-.095-.912a.5.5 0 0 1 .326-.521l.84-.307a.5.5 0 0 1 .65.327l.331 1.113 2.263-2.22a.5.5 0 0 1 .089-.07l1.359-.833-1.84-1.052a.5.5 0 0 0-.265-.065l-1.22.038a.5.5 0 0 1-.253-.06l-1.51-.816a.5.5 0 0 0-.216-.06l-2.259-.097a.5.5 0 0 1-.477-.46l-.04-.512a.5.5 0 0 0-.256-.397l-.722-.402a.5.5 0 0 0-.49.002L10.195 7.49a.5.5 0 0 0-.221.26l-.267.71a.5.5 0 0 1-.34.307L7.35 9.3a.5.5 0 0 1-.396-.062l-1.142-.726a.5.5 0 0 0-.454-.043l-.797.32a.5.5 0 0 0-.218.169l-1.186 1.628a.5.5 0 0 0-.076.434Z\"/>";
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

/** Build a <Eurasia/> icon as a live SVGSVGElement (browser only). */
export function Eurasia(options: IconOptions = {}): SVGSVGElement {
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
