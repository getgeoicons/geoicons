// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-bay-islands',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.917 16.574-.22-.268a.6.6 0 0 1 .222-.929l1.477-.656a.6.6 0 0 1 .762.247l.184.316a.6.6 0 0 1-.286.854l-1.441.609a.6.6 0 0 1-.698-.173Zm3.555-3.094.32-1.194a1 1 0 0 1 .557-.653l4.175-1.876a4 4 0 0 1 1.192-.327l4.863-.547a.6.6 0 0 1 .666.62l-.008.195a.6.6 0 0 1-.48.564l-4.7.954c-.398.08-.782.221-1.137.418L6.342 14.16a.6.6 0 0 1-.87-.68Zm15.421-5.896-1.748 2.272a.6.6 0 0 0 .114.844l.053.04a.6.6 0 0 0 .75-.02l2.205-1.866a.6.6 0 0 0 .007-.91l-.511-.446a.6.6 0 0 0-.87.086Z"/></svg>`,
})
export class HnBayIslands {
  protected readonly b = inject(GeoIconBase);
}
