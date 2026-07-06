// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bi',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m13.096 21.075-3.225 1.52a.5.5 0 0 1-.656-.22l-3.221-6.143a.5.5 0 0 1-.055-.281l.352-3.592a.5.5 0 0 0-.373-.533l-.564-.146a.5.5 0 0 1-.368-.573l.385-2.118a.5.5 0 0 0-.159-.464c-.471-.423-1.633-1.477-2.375-2.254a.49.49 0 0 1-.11-.48l.438-1.433a.5.5 0 0 1 .564-.347l1.96.343a.5.5 0 0 1 .406.398l.235 1.23a.5.5 0 0 0 .566.4l4.844-.734a.5.5 0 0 0 .425-.48l.096-3.216a.5.5 0 0 1 .681-.451l1.712.667a.5.5 0 0 0 .378-.006l1.963-.842a.5.5 0 0 1 .516.075l.794.657a.5.5 0 0 1 .172.483l-.762 3.823a.5.5 0 0 0 .357.58l2.912.803a.5.5 0 0 1 .367.49l-.033 2.11a.5.5 0 0 1-.191.385l-3.523 2.77a.5.5 0 0 0-.185.317l-.32 2.06a.5.5 0 0 1-.282.377l-.92.43a.5.5 0 0 0-.22.198l-2.363 3.999a.5.5 0 0 1-.218.198Z"/></svg>`,
})
export class Bi {
  protected readonly b = inject(GeoIconBase);
}
