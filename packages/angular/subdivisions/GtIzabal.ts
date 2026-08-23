// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-izabal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.58 17.205a.59.59 0 0 0 .776.825l4.117-2.078a1 1 0 0 1 .742-.063l.258.078a1 1 0 0 1 .695 1.123l-.084.495a1 1 0 0 0 .07.565l.218.504a.8.8 0 0 0 1.026.425l1.639-.643c.29-.113.56-.271.8-.468l9.964-8.13a1 1 0 0 0-.04-1.58L17.338 5a.76.76 0 0 0-.99 1.145l.706.716a.921.921 0 0 1-1.095 1.456L12.64 6.51a1 1 0 0 0-.428-.12L5.89 6.07a1 1 0 0 0-.955.572l-2.454 5.21a1 1 0 0 0 .013.88l.544 1.07a1 1 0 0 1-.028.958z"/></svg>`,
})
export class GtIzabal {
  protected readonly b = inject(GeoIconBase);
}
