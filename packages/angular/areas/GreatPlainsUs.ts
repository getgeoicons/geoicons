// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-great-plains-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.728 18.043-.71.97a.6.6 0 0 0 0 .709l1.89 2.586a.6.6 0 0 0 .845.126l.527-.398a1 1 0 0 1 .635-.2l2.36.077a1 1 0 0 0 .654-.216l.586-.466a1 1 0 0 0 .286-.362l.487-1.05a1 1 0 0 1 .547-.512l1.039-.401a1 1 0 0 0 .639-.98l-.255-5.356a1 1 0 0 0-.075-.334l-1.269-3.072a1 1 0 0 1-.076-.395l.034-2.578q0-.081-.011-.161l-.546-3.64c-5.327-.089-9.46-.83-10.862-1.19l1.15 3.545a1 1 0 0 0 .795.68l.413.065a1 1 0 0 1 .638.38l.927 1.21a1 1 0 0 1 .2.497l.74 6.587a1 1 0 0 1-.23.757l-.91 1.076a1 1 0 0 0-.235.62l-.02.86a1 1 0 0 1-.193.566Z"/></svg>`,
})
export class GreatPlainsUs {
  protected readonly b = inject(GeoIconBase);
}
