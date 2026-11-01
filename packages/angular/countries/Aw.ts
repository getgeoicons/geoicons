// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-aw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.954 10.446 5.247 4.96c.245.23.544.397.87.482l1.213.316a2 2 0 0 1 .889.501l2.466 2.397a6 6 0 0 0 1.294.957l4.589 2.518a1 1 0 0 0 .838.058l.575-.22a1 1 0 0 0 .592-1.25L19.85 16.14a3 3 0 0 0-.725-1.172l-4.952-4.952a4 4 0 0 0-.982-.72L10.568 7.93a4 4 0 0 1-1.011-.75l-1.62-1.654a3 3 0 0 1-.493-.668l-.454-.836a3 3 0 0 0-.894-1.012L4.117 1.6a.954.954 0 0 0-1.28 1.394l.4.47a2 2 0 0 1 .367.647l.61 1.776a1 1 0 0 1-.067.801L2.762 9.242a1 1 0 0 0 .192 1.204Z"/></svg>`,
})
export class Aw {
  protected readonly b = inject(GeoIconBase);
}
