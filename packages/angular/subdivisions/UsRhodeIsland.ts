// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-rhode-island',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.717 20.285-.31 2.085a.3.3 0 0 0 .362.337l8.03-1.762a1 1 0 0 0 .619-.422l1.037-1.556a1 1 0 0 1 .588-.415l3.198-.807a1 1 0 0 1 .794.134l.39.256a1 1 0 0 0 1.167-.05l.94-.738a.3.3 0 0 0 .113-.257l-.339-4.883a.3.3 0 0 0-.172-.251l-1.667-.778a1 1 0 0 1-.365-.29l-1.853-2.374a1 1 0 0 1-.212-.615V4.866l-1.42.16-.029-3.518a.3.3 0 0 0-.31-.297l-8.898.318a.3.3 0 0 0-.29.309l.35 11.568-.225 5.813a.3.3 0 0 1-.2.271l-.903.318a.6.6 0 0 0-.395.477Z"/></svg>`,
})
export class UsRhodeIsland {
  protected readonly b = inject(GeoIconBase);
}
