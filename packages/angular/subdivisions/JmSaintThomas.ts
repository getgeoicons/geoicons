// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-saint-thomas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.955 7.109a.6.6 0 0 0-.979.396l-.17 1.528a1 1 0 0 0 .068.487l.537 1.318a1 1 0 0 1-.042.843l-.882 1.671a1 1 0 0 0 .07 1.047l1.697 2.383a1 1 0 0 0 .72.415l3.57.341c.425.041.854.013 1.27-.082l3.425-.781a2 2 0 0 1 1.104.061l1.92.67a1 1 0 0 0 .65.003l4.299-1.454a3 3 0 0 1 1.023-.158l.35.007a1 1 0 0 0 1.005-1.172l-.016-.095a1 1 0 0 0-.91-.824l-.448-.034a1 1 0 0 1-.826-.567l-.665-1.393a1 1 0 0 0-1.058-.558l-1.193.188a2 2 0 0 1-1.019-.104l-5.733-2.168a2 2 0 0 0-.88-.122l-3.804.331a1 1 0 0 1-.724-.226z"/></svg>`,
})
export class JmSaintThomas {
  protected readonly b = inject(GeoIconBase);
}
