// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pa-comarca-embera-wounaan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M13.91 1.834a2 2 0 0 1 .847.582l3.193 3.73q.339.395.604.842l2.54 4.283a1 1 0 0 1-.117 1.18l-.784.869a4 4 0 0 1-1.56 1.063l-2.276.858a.6.6 0 0 1-.664-.168l-2.51-2.88a5 5 0 0 1-.61-.873l-3.026-5.5a2 2 0 0 1 .081-2.064l.631-.958a2 2 0 0 1 .44-.477l.569-.444a2 2 0 0 1 1.903-.307zM4.253 13.712a1 1 0 0 1 1.483-.025l1.974 2.109q.347.37.59.817l1.1 2.013a2 2 0 0 1 .244.959v1.909a1.14 1.14 0 0 1-1.604 1.043l-2.342-1.039a3 3 0 0 1-1.274-1.07L2.91 18.172a2 2 0 0 1-.339-1.057l-.018-.651a2 2 0 0 1 .494-1.375z"/></svg>`,
})
export class PaComarcaEmberaWounaan {
  protected readonly b = inject(GeoIconBase);
}
