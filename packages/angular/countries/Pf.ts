// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pf',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.039 8.429 1.34 1.116a.915.915 0 0 0 1.37-.231l.925-1.54a1.05 1.05 0 0 0-1.03-1.584l-2.02.25a1.13 1.13 0 0 0-.585 1.989Zm7.407 1.424.032.73a2 2 0 0 0 .133.634l.697 1.803a2 2 0 0 0 1.197 1.163l1.685.597a2 2 0 0 0 1.125.063l1.434-.337a2 2 0 0 1 2.252 1.065l.141.288c.109.22.257.42.437.586l.573.53a2 2 0 0 0 .916.483l1 .226A1.42 1.42 0 0 0 22.8 16.3v-.43a1.955 1.955 0 0 0-1.286-1.837l-1.246-.454a2 2 0 0 0-.414-.102l-.267-.037a1.957 1.957 0 0 1-1.65-2.345l.06-.282a2 2 0 0 0-.221-1.41l-.36-.63a2 2 0 0 0-1-.864l-1.469-.582a2 2 0 0 0-.332-.1l-1.133-.233a2 2 0 0 0-1.18.116l-1.243.523a2 2 0 0 0-.417.237l-.39.29a2 2 0 0 0-.806 1.693Z"/></svg>`,
})
export class Pf {
  protected readonly b = inject(GeoIconBase);
}
