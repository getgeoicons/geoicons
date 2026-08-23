// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-san-fernando',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.123 2.456a.6.6 0 0 0-.307-.565l-.939-.522a.6.6 0 0 0-.602.012L17.66 2.969a1 1 0 0 1-.957.045l-1.978-.963a1 1 0 0 0-.74-.054l-1.674.53a.6.6 0 0 0-.21 1.027l.572.492a1 1 0 0 0 .557.238l.632.061a1 1 0 0 1 .83.62l.076.188a1 1 0 0 1-.04.836l-.89 1.71a2 2 0 0 1-.456.582l-1.885 1.652a2 2 0 0 0-.429.53l-.83 1.487a1 1 0 0 0-.089.762l.254.888a1 1 0 0 1-.149.858L7.8 17.88a1 1 0 0 1-.29.27l-5.316 3.263a.67.67 0 0 0 .49 1.225l1.774-.379a2 2 0 0 0 .729-.317l3.172-2.221q.25-.175.54-.267l5.066-1.615a2 2 0 0 1 .768-.088l2.56.207a1 1 0 0 0 .776-.278l2.551-2.47a1 1 0 0 0 .297-.593l.564-4.474a.6.6 0 0 0-.22-.543l-.455-.364a.6.6 0 0 1-.14-.776l1.06-1.773a1 1 0 0 0 .14-.445z"/></svg>`,
})
export class TtSanFernando {
  protected readonly b = inject(GeoIconBase);
}
