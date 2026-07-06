// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-np',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linecap="round" stroke-linejoin="round" d="m22.272 16.199.169 1.829a.5.5 0 0 1-.569.54l-5.615-.798a.5.5 0 0 1-.22-.088l-2.72-1.947a.5.5 0 0 0-.286-.093l-3.137-.03a.5.5 0 0 1-.228-.059l-8.079-4.26a.5.5 0 0 1-.236-.615l1.574-4.276a.5.5 0 0 1 .809-.194l.672.622a.5.5 0 0 0 .778-.126L5.6 5.95a.5.5 0 0 1 .804-.098L9.89 9.617a.5.5 0 0 0 .452.153l1.041-.18a.5.5 0 0 1 .563.344l.28.902a.5.5 0 0 0 .227.284l4.284 2.488a.5.5 0 0 0 .22.067l5.238.324a.5.5 0 0 1 .454.624l-.363 1.405a.5.5 0 0 0-.014.17"/></svg>`,
})
export class Np {
  protected readonly b = inject(GeoIconBase);
}
