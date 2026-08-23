// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-gracias-a-dios',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.2 18.295V4.442c0-.211.213-.356.41-.28 2.722 1.034 4.388 1.43 7.081 1.735.22.025.427.121.587.273 3.118 2.954 5.334 4.372 10.016 6.132.176.066.333.182.448.332.908 1.188 1.49 1.926 2.595 2.282.258.083.44.326.41.595a.523.523 0 0 1-.548.465l-3.355-.177a2 2 0 0 0-1.143.287l-2.938 1.782a2 2 0 0 1-1.005.29l-1.754.028a2 2 0 0 0-.705.14L7.71 19.75a2 2 0 0 1-1.263.071l-.955-.26a2 2 0 0 1-1.02-.66l-.428-.52a1 1 0 0 0-1.126-.301l-1.312.496a.3.3 0 0 1-.406-.281Z"/></svg>`,
})
export class HnGraciasADios {
  protected readonly b = inject(GeoIconBase);
}
