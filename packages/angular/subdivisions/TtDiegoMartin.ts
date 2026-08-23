// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-diego-martin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.788 8.992a.6.6 0 0 0-.314-.547l-.574-.312a1 1 0 0 0-1.243.236l-.178.212a1 1 0 0 1-.68.354l-5.802.497a1 1 0 0 0-.47.164L9.84 12.055a1 1 0 0 0-.433.992l.103.63a1 1 0 0 0 .944.838l.689.03a.6.6 0 0 1 .57.674l-.019.142a.6.6 0 0 0 .157.485l.182.194a.6.6 0 0 0 .777.085l.587-.403a1 1 0 0 0 .365-.46l.142-.364a1 1 0 0 1 1.048-.629l5.344.626a1 1 0 0 0 .882-.35l1.26-1.499a1 1 0 0 0 .235-.61z"/></svg>`,
})
export class TtDiegoMartin {
  protected readonly b = inject(GeoIconBase);
}
