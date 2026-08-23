// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-nord-est',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.494 19.304a2 2 0 0 0 .628.712l2.498 1.74a3 3 0 0 0 1.209.495l4.026.689a1 1 0 0 0 .817-.224l.1-.085a1 1 0 0 0 .234-1.236l-.627-1.165a.6.6 0 0 1 .3-.839l2.746-1.133a1 1 0 0 0 .606-.769l.394-2.493c.048-.306.049-.618.002-.924l-.255-1.655a3 3 0 0 0-.5-1.254L19.13 8.941a2 2 0 0 1-.342-1.383l.239-1.953a1 1 0 0 0-.105-.582l-.806-1.551a1 1 0 0 0-.722-.525l-8.31-1.4a.7.7 0 0 0-.815.644l-.026.385a.7.7 0 0 1-.737.652L6.052 3.15a.7.7 0 0 0-.736.648l-.102 1.394a1 1 0 0 1-.941.926l-.66.037a.7.7 0 0 0-.636.515l-.241.882a3 3 0 0 0 .037 1.702l.27.845a3 3 0 0 0 .511.957l1.122 1.407a.6.6 0 0 1 .078.62l-.436.973a.6.6 0 0 0 .23.755l1.662 1.032a3 3 0 0 1 1.075 1.155z"/></svg>`,
})
export class HtNordEst {
  protected readonly b = inject(GeoIconBase);
}
