// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm-saint-george',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.503 3.91a1 1 0 0 0-.497-.691l-3.362-1.875a.3.3 0 0 0-.406.112l-.563.978a2 2 0 0 1-.575.632l-1.249.888a2 2 0 0 1-.937.358l-1.871.207a2 2 0 0 0-.872.313l-1.98 1.292a1 1 0 0 0-.453.795l-.05 1.183a1 1 0 0 1-.567.859l-.193.093a2 2 0 0 1-1.027.19l-4.293-.348a.6.6 0 0 0-.646.543l-.304 3.332a1 1 0 0 0 .417.906l2.023 1.435a2 2 0 0 1 .825 1.366l.467 3.478a.6.6 0 0 0 .378.48l5.81 2.244a.3.3 0 0 0 .397-.201l.541-1.99a2 2 0 0 1 .464-.835l2.55-2.749a2 2 0 0 1 .562-.424l2.878-1.458a2 2 0 0 0 .907-.934l2.38-5.072a1 1 0 0 0 .079-.607z"/></svg>`,
})
export class DmSaintGeorge {
  protected readonly b = inject(GeoIconBase);
}
