// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.44 18.862-.128.811a1 1 0 0 0 .528 1.044l1.935 1.004a1 1 0 0 0 .535.109l2.95-.221a1 1 0 0 0 .925-1.03l-.058-1.795a1 1 0 0 1 .366-.806l.426-.348a1 1 0 0 0 .365-.726l.039-.811a1 1 0 0 0-.894-1.043l-.723-.075a1 1 0 0 0-.612.132L1.92 18.156a1 1 0 0 0-.48.706ZM20.857 2.227l-2.035 1.184a.986.986 0 1 0 1.011 1.692l2.007-1.232a.958.958 0 0 0-.983-1.644ZM14.154 20.84l.07.207a1 1 0 0 0 1.42.564l.682-.365a1 1 0 0 0 .351-1.448l-.203-.295a1 1 0 0 0-1.461-.204l-.548.454a1 1 0 0 0-.31 1.086Z"/></svg>`,
})
export class Gg {
  protected readonly b = inject(GeoIconBase);
}
