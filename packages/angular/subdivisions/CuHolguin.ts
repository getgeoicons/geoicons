// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-holguin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.097 16.32a1 1 0 0 0 1.164-.069l.659-.533a1 1 0 0 1 1.274.014l.892.753a1 1 0 0 0 .954.188l3.414-1.107a1 1 0 0 1 1.023.252l.66.675a1 1 0 0 0 1.05.243l.841-.3a2 2 0 0 1 .71-.116l2.639.051a1 1 0 0 0 .922-.568l.08-.167a1 1 0 0 0-.45-1.323l-1.467-.743a2 2 0 0 0-.673-.202l-5.03-.586a1 1 0 0 1-.613-.308l-.848-.902a.8.8 0 0 1-.112-.945l.12-.21a.8.8 0 0 0-.105-.937l-.205-.224a2 2 0 0 0-1.96-.59l-2.083.52a1 1 0 0 1-.884-.203l-1.99-1.665a.3.3 0 0 0-.472.121l-.352.904a2 2 0 0 1-.535.769l-1.035.92a1 1 0 0 1-.595.251l-.793.055a.8.8 0 0 0-.734.67l-.277 1.694a.8.8 0 0 0 .362.806z"/></svg>`,
})
export class CuHolguin {
  protected readonly b = inject(GeoIconBase);
}
