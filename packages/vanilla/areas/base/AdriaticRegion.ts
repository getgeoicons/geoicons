// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.715 19.88-2.239-1.032a.586.586 0 0 1 .2-1.116l1.903-.149a1 1 0 0 0 .747-.43l.409-.595a1 1 0 0 0 .132-.857l-.534-1.758a1 1 0 0 0-.445-.569l-3.42-2.037a1 1 0 0 1-.488-.833l-.018-.676a1 1 0 0 0-.742-.94l-1.332-.355a1 1 0 0 1-.528-.348l-.72-.914a1 1 0 0 1-.059-1.156l.626-.983a1 1 0 0 1 .492-.4l2.165-.812a1 1 0 0 1 .785.036l1.596.768a1 1 0 0 0 .889-.01l1.494-.763a.6.6 0 0 1 .687.1l1.079 1.029a1 1 0 0 0 .917.25l1.763-.411a1 1 0 0 1 .835.18l1.933 1.484a1 1 0 0 1 .306.389l.552 1.251a1 1 0 0 1 .083.474L17.7 9.883a1 1 0 0 0 .187.657l.222.307a1 1 0 0 0 1.137.358l2.69-.93a.6.6 0 0 1 .794.613l-.073.952a.6.6 0 0 1-.506.547l-2.184.341a1 1 0 0 0-.412.164l-.248.17a1 1 0 0 0-.132 1.54l1.355 1.324a1 1 0 0 1 .233 1.08l-.724 1.848a1 1 0 0 1-1.33.553l-.76-.33a1 1 0 0 1-.572-.681l-.362-1.485a1 1 0 0 0-.14-.318l-1.79-2.687a1 1 0 0 1-.163-.45l-.16-1.525a1 1 0 0 0-.606-.816L9.205 9.023a1 1 0 0 1-.432-.35L7.414 6.719a.896.896 0 0 0-1.58.813l.262.733a1 1 0 0 0 .165.294l1.99 2.453c.098.12.222.216.363.28l4.396 2.003a.79.79 0 0 1-.594 1.462l-.422-.151a.587.587 0 0 0-.732.796l.337.737a1 1 0 0 1-.069.957l-1.555 2.416a1 1 0 0 1-1.26.367Z\"/>";
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

/** Build a <AdriaticRegion/> icon as a live SVGSVGElement (browser only). */
export function AdriaticRegion(options: IconOptions = {}): SVGSVGElement {
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
