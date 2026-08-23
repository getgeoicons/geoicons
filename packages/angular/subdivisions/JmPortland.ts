// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-portland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.35 11.226a1 1 0 0 0 .018.767l.799 1.8a.89.89 0 0 0 1.36.342l.58-.451a1 1 0 0 1 1.127-.069l4.433 2.651a2 2 0 0 0 1.465.235l2.26-.508a2 2 0 0 1 1.116.069l5.79 2.08a2 2 0 0 0 .966.097l.695-.102a.6.6 0 0 0 .443-.874L19.1 11.02a1 1 0 0 0-.555-.476l-5.526-1.927a1 1 0 0 0-.367-.055l-2.873.109a1 1 0 0 1-.78-.33l-.618-.685a1 1 0 0 0-.908-.317l-1.06.178a1 1 0 0 1-.811-.223L4.19 6.1a.6.6 0 0 0-.947.24z"/></svg>`,
})
export class JmPortland {
  protected readonly b = inject(GeoIconBase);
}
