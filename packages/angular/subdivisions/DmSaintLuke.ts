// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm-saint-luke',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.976 8.196a.6.6 0 0 0-.384-.6L4.63 1.453a.6.6 0 0 0-.802.433l-1.06 4.902a2 2 0 0 0 .17 1.323l.858 1.7a3 3 0 0 1 .296.962l.165 1.26a3 3 0 0 0 .167.669l.756 2.002a3 3 0 0 1 .192 1.108l-.034 2.095a1 1 0 0 0 .262.69l1.841 2.018 1.825 1.603a.6.6 0 0 0 .96-.247l.79-2.19a1 1 0 0 1 .527-.571l3.76-1.71 5.714-3.353a.6.6 0 0 0 .287-.627l-.34-1.811a7 7 0 0 1-.104-1.741z"/></svg>`,
})
export class DmSaintLuke {
  protected readonly b = inject(GeoIconBase);
}
