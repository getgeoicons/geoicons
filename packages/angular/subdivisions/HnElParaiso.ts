// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-el-paraiso',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.17 14.844a2 2 0 0 1 1.42-.488l3.757.201a1 1 0 0 0 .864-.412l1.75-2.42a1 1 0 0 1 1.36-.25l3.006 1.976a.8.8 0 0 0 1.225-.52l.107-.56a1 1 0 0 1 .416-.639l1.07-.735a.8.8 0 0 0 .211-1.107L22 9.36a.8.8 0 0 0-.809-.339l-2.516.466a1 1 0 0 1-.828-.22L15.209 7.03a1 1 0 0 0-.96-.187l-1.514.5a1 1 0 0 1-.653-.01L8.576 6.07a1 1 0 0 0-1.079.267L5.033 9.043a1 1 0 0 0-.256.583l-.248 2.761a2 2 0 0 1-.587 1.244l-2.118 2.092a.8.8 0 0 0 .047 1.181l.966.813a.8.8 0 0 0 1.04-.008z"/></svg>`,
})
export class HnElParaiso {
  protected readonly b = inject(GeoIconBase);
}
