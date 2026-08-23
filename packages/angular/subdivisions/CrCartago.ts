// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cr-cartago',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M17.297 21.23a.603.603 0 0 0 .826-.87l-.606-.7a1 1 0 0 1-.224-.85l.145-.726c.038-.187.129-.36.261-.498l1.545-1.6a4 4 0 0 0 .515-.661l2.289-3.67a1 1 0 0 0 .147-.62l-.146-1.597a2 2 0 0 1 .187-1.044l.293-.613a.4.4 0 0 0-.358-.573l-6.94-.056a2 2 0 0 1-.893-.218L5.875 2.61a.536.536 0 0 0-.69.775l2.148 3.21a.6.6 0 0 1-.328.908l-3.127.926a1 1 0 0 0-.457.287l-.19.21a.88.88 0 0 0-.077 1.083.88.88 0 0 1-.241 1.224l-1.043.694a.877.877 0 0 0 .724 1.574l.789-.223a1 1 0 0 1 1.066.355l1.246 1.63q.282.368.662.635l3.897 2.73a2 2 0 0 0 .827.336l.84.136c.45.074.913-.018 1.301-.258a.95.95 0 0 1 1.082.058z"/></svg>`,
})
export class CrCartago {
  protected readonly b = inject(GeoIconBase);
}
