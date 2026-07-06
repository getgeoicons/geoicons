// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-northern-america-without-greenland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.481 7.785-.937-1.288a1 1 0 0 0-.974-.398l-.578.096a.6.6 0 0 1-.694-.664l.139-1.135a1 1 0 0 1 .453-.72l1.77-1.133a1 1 0 0 1 .614-.155l.81.06a1 1 0 0 1 .767.456l.983 1.527a1 1 0 0 0 .302.301l1.897 1.211a1 1 0 0 0 .527.157l3.2.037a.6.6 0 0 1 .54.847l-.74 1.634a1 1 0 0 0 .404 1.274l1.89 1.112a.6.6 0 0 0 .888-.652l-.4-1.732a.6.6 0 0 1 .52-.732l1.825-.195a1 1 0 0 1 .65.155l3.281 2.127a1 1 0 0 1 .069 1.63l-2.243 1.739a1 1 0 0 0-.38.664l-.267 2.112a1 1 0 0 1-.123.368l-.974 1.716a1 1 0 0 0 .02 1.023l.579.93a.6.6 0 0 1-.084.74l-.231.232a.6.6 0 0 1-.82.03l-1.156-1.006a1 1 0 0 0-.919-.211l-1.72.467c-.15.041-.289.117-.405.221l-.783.703a.6.6 0 0 1-.724.059L8.922 19.77a1 1 0 0 0-.494-.157l-1.997-.088a1 1 0 0 1-.734-.37l-.683-.845a1 1 0 0 1-.202-.429l-.438-2.142a1 1 0 0 1 .029-.511l.862-2.638a1 1 0 0 0 .036-.473L4.66 8.211a1 1 0 0 0-.178-.426Z"/></svg>`,
})
export class NorthernAmericaWithoutGreenland {
  protected readonly b = inject(GeoIconBase);
}
