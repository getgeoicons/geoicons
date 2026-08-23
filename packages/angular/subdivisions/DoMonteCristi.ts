// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-monte-cristi',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M19.01 8.28a1 1 0 0 0-.767-.569l-2.431-.344a3 3 0 0 1-.91-.281l-3.4-1.68a3 3 0 0 0-1.576-.3l-4.374.36a.804.804 0 0 0-.733.76A2.01 2.01 0 0 1 3.9 7.811L1.45 9.385a.3.3 0 0 0-.092.412l1.374 2.186a.3.3 0 0 1-.117.427l-.815.418a.3.3 0 0 0-.14.383l.697 1.653a1 1 0 0 0 .706.589l1.98.436a1 1 0 0 0 .803-.168l.617-.45a1 1 0 0 1 .804-.168l2.213.487a1 1 0 0 1 .77.802l.085.485a1 1 0 0 0 .58.74l1.854.82a1 1 0 0 0 .667.051l2.703-.732a1 1 0 0 1 .682.057l2.152.998a1 1 0 0 0 .678.06l1.155-.308a1 1 0 0 0 .73-1.126l-.224-1.385a2 2 0 0 1 .057-.89l1.241-4.172a.6.6 0 0 0-.464-.76l-1.431-.27a2 2 0 0 1-1.445-1.122z"/></svg>`,
})
export class DoMonteCristi {
  protected readonly b = inject(GeoIconBase);
}
