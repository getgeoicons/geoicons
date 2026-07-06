// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { Directive, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { noteIconRender } from '@geoicons/core';
import { GeoIconIdService } from './_id.service';

/**
 * Shared behaviour + props for every generated icon, composed onto each component via
 * `hostDirectives` (Angular 15.1+) rather than inheritance. Each icon injects this
 * instance and reads the values in its template.
 *
 * The convenience props mirror the React/Vue packages: `size` (default 24) and
 * `strokeWidth` (default 1). `stroke`/`fill` are also surfaced as inputs so a colored
 * outline (`stroke`) or a filled shape (`fill`) works without reaching past the wrapper —
 * Angular has no `{...rest}` spread, so these are exposed explicitly.
 */
@Directive({ standalone: true })
export class GeoIconBase implements OnInit {
  /** Width & height in px (or any CSS length). */
  @Input() size: number | string = 24;
  /** SVG stroke width. Set 0 for a bare silhouette. */
  @Input() strokeWidth: number | string = 1;
  /** Stroke color — defaults to `currentColor` (themed by CSS `color`). */
  @Input() stroke: string = 'currentColor';
  /** Fill color — `none` (outline) by default; `currentColor` for a solid shape. */
  @Input() fill: string = 'none';
  /**
   * Accessible name. Omit for a decorative icon (`aria-hidden`); pass to switch the icon
   * to `role="img"` with a `<title>`.
   */
  @Input('aria-label') ariaLabel?: string;

  private readonly platformId = inject(PLATFORM_ID);
  /** Unique id namespace for this instance's `<title>` (SSR-safe). */
  readonly uid = inject(GeoIconIdService).next();

  get titleId(): string {
    return `${this.uid}-title`;
  }

  ngOnInit(): void {
    // Compliance nudge — warns once per session if icons render with no license provider.
    // Client-only + deferred inside noteIconRender; a no-op during SSR.
    if (isPlatformBrowser(this.platformId)) noteIconRender();
  }
}
