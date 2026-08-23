// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-peten',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.814 20.841a.6.6 0 0 0 .402-.534L22.8 9.334l-.087-6.692a.3.3 0 0 0-.3-.296l-16.41-.023a.3.3 0 0 0-.3.3l.004 4.685a.3.3 0 0 1-.302.3l-3.64-.025a.55.55 0 0 0-.302 1.013l6.59 4.255a1 1 0 0 1 .42.567l.415 1.463a1 1 0 0 0 .685.688l.89.256a1 1 0 0 1 .711 1.113l-.288 1.875a.6.6 0 0 0 .452.674l4.496 1.094a1 1 0 0 0 .553-.024l2.972-.992.053 2.112z"/></svg>`,
})
export class GtPeten {
  protected readonly b = inject(GeoIconBase);
}
