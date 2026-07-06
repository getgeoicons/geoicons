// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.476 6.113 5.628 7.12a1 1 0 0 0-.236.644v.145a1 1 0 0 0 .15.527l1.742 2.809a1 1 0 0 1 .134.35l.294 1.63a1 1 0 0 0 .225.475l1.592 1.852a1 1 0 0 1 .238.741l-.46 5.124a1 1 0 0 0 .338.842l.083.072a1 1 0 0 0 1.154.116l.364-.208a1 1 0 0 1 .402-.127l1.384-.13a.6.6 0 0 0 .54-.666l-.087-.762a1 1 0 0 1 .945-1.112l1.253-.06a1 1 0 0 0 .47-.145l1.762-1.07a1 1 0 0 0 .425-1.185l-1.707-4.87a1 1 0 0 0-.994-.668l-3.414.172-.233-6.523a1 1 0 0 0-.018-.155l-.429-2.206a1 1 0 0 0-.673-.76l-2.063-.67a1 1 0 0 0-.632.006l-.932.319a1 1 0 0 0-.567 1.4l.149.292a1 1 0 0 1 .1.585L6.702 5.6a1 1 0 0 1-.226.513Z"/></svg>`,
})
export class Mo {
  protected readonly b = inject(GeoIconBase);
}
