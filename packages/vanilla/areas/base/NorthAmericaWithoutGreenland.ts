// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.495 5.851-.74-1.016a1 1 0 0 0-.973-.398l-.306.05a.6.6 0 0 1-.695-.664l.099-.805a1 1 0 0 1 .454-.72l1.434-.918a1 1 0 0 1 .613-.155l.585.044a1 1 0 0 1 .767.455l.794 1.235a1 1 0 0 0 .303.301l1.577 1.007a1 1 0 0 0 .527.158l2.595.03a.6.6 0 0 1 .54.847l-.535 1.181a1 1 0 0 0 .404 1.274l1.358.8a.6.6 0 0 0 .889-.653l-.282-1.216a.6.6 0 0 1 .52-.732l1.434-.153a1 1 0 0 1 .65.155l2.627 1.703a1 1 0 0 1 .07 1.63l-1.738 1.346a1 1 0 0 0-.38.665l-.22 1.738a1 1 0 0 1-.122.369l-.742 1.306a1 1 0 0 0 .095 1.127l.357.436a.6.6 0 0 1-.022.786l-.217.236a.6.6 0 0 1-.836.047l-.899-.781a1 1 0 0 0-.852-.226l-1.348.27a1 1 0 0 0-.713.562l-.222.484a1 1 0 0 0 .01.858l.063.126a.985.985 0 0 0 1.358.431l.547-.3c.175-.095.375-.136.573-.117l.078.007a1 1 0 0 1 .877.758l.089.36a.6.6 0 0 0 .295.384l1.908 1.041a.6.6 0 0 1-.045 1.076l-.884.39a.6.6 0 0 1-.566-.045l-1.497-.962a1 1 0 0 0-.277-.123l-3.942-1.08a1 1 0 0 1-.47-.284l-.983-1.059a1 1 0 0 0-.343-.24l-.602-.254a1 1 0 0 1-.523-.513l-.864-1.924a1 1 0 0 0-.207-.3l-.884-.88a1 1 0 0 1-.275-.508l-.352-1.723a1 1 0 0 1 .029-.511l.722-2.21a1 1 0 0 0 .036-.472l-.543-3.305a1 1 0 0 0-.178-.426Z\"/>";
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

/** Build a <NorthAmericaWithoutGreenland/> icon as a live SVGSVGElement (browser only). */
export function NorthAmericaWithoutGreenland(options: IconOptions = {}): SVGSVGElement {
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
