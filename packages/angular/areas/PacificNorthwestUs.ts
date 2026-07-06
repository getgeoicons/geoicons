// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pacific-northwest-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.262 15.014.113.674a.59.59 0 0 0 .523.495c4.487.452 10.692.209 13.31.024l.088 1.765 7.476-.74-1.526-11.204c-7.336.859-14.33.632-17.035.402a.6.6 0 0 0-.235.028l-1.65.534a.6.6 0 0 0-.4.705l.463 2.02a1 1 0 0 1-.004.465l-1.106 4.425a1 1 0 0 0-.017.407Z"/></svg>`,
})
export class PacificNorthwestUs {
  protected readonly b = inject(GeoIconBase);
}
