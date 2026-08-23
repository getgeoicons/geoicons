// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-baja-verapaz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.512 8.129a1 1 0 0 0-1.154.402l-.516.79a.6.6 0 0 1-.96.06l-2.02-2.383a.6.6 0 0 0-.982.096l-.943 1.688a.6.6 0 0 1-.431.3l-.746.116a.6.6 0 0 0-.505.652l.122 1.248a1 1 0 0 0 .301.623l2.924 2.816a1 1 0 0 1 .26.419l.619 1.959a1 1 0 0 0 1.017.696l5.75-.37a1 1 0 0 0 .621-.268l2.374-2.228 4.577-3.397a1 1 0 0 1 .553-.196l1.428-.061a1 1 0 0 0 .956-1.042l-.055-1.277a1 1 0 0 0-.378-.742l-.128-.101a1 1 0 0 0-.985-.147l-1.129.441a1 1 0 0 1-.275.065l-7.332.653a2 2 0 0 1-.81-.094z"/></svg>`,
})
export class GtBajaVerapaz {
  protected readonly b = inject(GeoIconBase);
}
