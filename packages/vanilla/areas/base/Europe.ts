// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { noteIconRender } from '@geoicons/core';

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.504 7.294-1.27 1.168a1 1 0 0 0-.322.709l-.04 1.49a.669.669 0 0 0 1.09.537l.22-.178a.6.6 0 0 1 .917.205l.25.516a.72.72 0 0 0 1.307-.026l.454-1.036a1 1 0 0 0 .053-.646l-.328-1.301a1 1 0 0 1 .13-.787l1.122-1.74a.89.89 0 0 1 1.201-.283l.027.016a.834.834 0 0 1 .23 1.232l-.817 1.04a1 1 0 0 0-.183.861l.235.94a1 1 0 0 1-.007.51l-.642 2.318a1 1 0 0 1-.808.721l-1.478.233a1 1 0 0 1-.84-.258l-.142-.133a1 1 0 0 0-1.57.266l-.965 1.843a1 1 0 0 1-.457.44l-1.481.702a.6.6 0 0 0-.194.938l.425.485a.719.719 0 0 1-.602 1.19l-.996-.086a1 1 0 0 0-1.086.987l-.01 1.034a1 1 0 0 0 .492.87l.55.325a1 1 0 0 0 .888.065l.798-.328a1 1 0 0 0 .496-.443l.987-1.792a1 1 0 0 1 .539-.46l1.072-.383a1 1 0 0 1 1.013.205l3.108 2.856a1 1 0 0 0 1.42-.067l.136-.151a1 1 0 0 0 .255-.607l.052-.818a1 1 0 0 1 .168-.496l1.058-1.57a.6.6 0 0 1 .82-.17l.253.16a1 1 0 0 0 1.065.007l1.133-.705a1 1 0 0 0 .455-.668l.011-.058a1 1 0 0 0-.503-1.058l-2.01-1.1a1 1 0 0 1-.341-.307l-1.15-1.656a1 1 0 0 1-.177-.53l-.063-1.57c-.007-.188.04-.376.134-.54l.855-1.479a1 1 0 0 0 .112-.71l-.843-3.935a1 1 0 0 1 .308-.952l.166-.15a.6.6 0 0 0-.062-.94l-.804-.553a1 1 0 0 0-.912-.114l-1.573.58a1 1 0 0 0-.272.151l-1.504 1.181a1 1 0 0 0-.34.495l-.934 3.064a1 1 0 0 1-.279.444Z\"/><path stroke-linejoin=\"round\" d=\"m8.067 10.7.065.105a1 1 0 0 1 .13.72l-.198 1.002a1 1 0 0 0 .266.893l.317.324a.729.729 0 0 1-.366 1.222l-1.2.262a1 1 0 0 1-.607-.058l-.905-.387a1 1 0 0 1-.601-1.015l.01-.101a1 1 0 0 1 .395-.704l.482-.361a1 1 0 0 0 .388-.646l.144-.917a.914.914 0 0 1 1.68-.339ZM2.89 8.22l-.635-.138a1 1 0 0 1-.613-.411l-.258-.376a1 1 0 0 1-.173-.497l-.03-.446a.97.97 0 0 1 1.008-1.037l1.605.066a1 1 0 0 1 .608.237l.156.133a1 1 0 0 1 .336.939l-.017.095a1 1 0 0 1-.358.602l-.792.636a1 1 0 0 1-.837.197Z\"/>";
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

/** Build a <Europe/> icon as a live SVGSVGElement (browser only). */
export function Europe(options: IconOptions = {}): SVGSVGElement {
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
