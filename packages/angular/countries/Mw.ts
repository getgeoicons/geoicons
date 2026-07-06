// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m14.821 20.754-.015 1.798a.25.25 0 0 1-.25.247h-.637a.25.25 0 0 1-.206-.108l-1.962-2.87a.5.5 0 0 1 .008-.577l.961-1.323a.5.5 0 0 0 .083-.406l-.38-1.66a.5.5 0 0 0-.622-.37l-1.36.38a.5.5 0 0 1-.497-.137l-2.117-2.234a.5.5 0 0 1-.067-.6l1.697-2.86a.5.5 0 0 0 .069-.223l.3-4.65a.5.5 0 0 0-.05-.253L7.946 1.2l3.011 1.008a.5.5 0 0 1 .303.282l.7 1.683q.03.071.037.147l.277 3.095a.5.5 0 0 1-.036.236l-.661 1.597a.5.5 0 0 0-.019.33l.776 2.693a.5.5 0 0 0 .386.353l.948.183a.5.5 0 0 1 .296.179l2.354 2.95a.5.5 0 0 1 .11.327l-.098 3.182a.5.5 0 0 1-.293.44l-.922.418a.5.5 0 0 0-.294.451Z"/></svg>`,
})
export class Mw {
  protected readonly b = inject(GeoIconBase);
}
