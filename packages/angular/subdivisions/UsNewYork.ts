// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-new-york',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.661 12.21a2 2 0 0 0 .067-.564l-.193-7.903a.3.3 0 0 0-.304-.292l-3.754.051a1 1 0 0 0-.628.233l-2.935 2.451a1 1 0 0 0-.355.85l.111 1.351a1 1 0 0 1-.508.955l-.37.207a2 2 0 0 1-.665.23l-1.392.22a2 2 0 0 1-.867-.055l-.798-.231a4 4 0 0 0-1.741-.108l-.63.1a.6.6 0 0 0-.464.813l.29.739a.6.6 0 0 1-.2.702L1.458 13.34a.6.6 0 0 0-.243.47l-.004.237a.6.6 0 0 0 .6.611h10.962a.6.6 0 0 1 .49.253l1.074 1.517a3 3 0 0 0 .752.74l1.418.971a.6.6 0 0 1 .255.578l-.129.93a.6.6 0 0 0 .756.66l4.592-1.28a.814.814 0 0 0-.392-1.578l-2.366.514a.816.816 0 0 1-.987-.74l-.167-2.374a2 2 0 0 1 .062-.655z"/></svg>`,
})
export class UsNewYork {
  protected readonly b = inject(GeoIconBase);
}
