// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sv-la-union',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.95 21.949a.3.3 0 0 0 .238.444l4.708.38a.3.3 0 0 0 .324-.31l-.023-.608a1 1 0 0 1 .633-.968l1.105-.436a2 2 0 0 0 .886-.687l.17-.234a1 1 0 0 0-.258-1.42l-1.249-.828a1 1 0 0 1-.447-.855l.002-.132a1 1 0 0 1 .783-.955l2.526-.56a.8.8 0 0 0 .625-.733l.035-.58a.8.8 0 0 0-.688-.841l-.698-.098a.6.6 0 0 1-.492-.764l2.002-6.78a1 1 0 0 0-.164-.89L15.141 1.7a1 1 0 0 0-.997-.373l-2.306.476a1 1 0 0 0-.795 1.056l.07.924a1 1 0 0 1-.109.537l-.765 1.475a1 1 0 0 0-.094.653l.47 2.395a1 1 0 0 1-.31.935l-1.507 1.36a1 1 0 0 0-.328.696l-.357 7.587a2 2 0 0 1-.248.875z"/></svg>`,
})
export class SvLaUnion {
  protected readonly b = inject(GeoIconBase);
}
