// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bv',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.742 7.437-1.34 1.684a.5.5 0 0 0-.054.54l.527 1.028a.5.5 0 0 1 .052.286L1.646 13.4a.5.5 0 0 0 .034.247l.773 1.898a.5.5 0 0 0 .119.174l2.884 2.736a.5.5 0 0 1 .134.217l.407 1.339a.5.5 0 0 0 .456.354l2.144.096a.5.5 0 0 0 .246-.053l3.022-1.51a.5.5 0 0 1 .324-.044l2.26.46q.08.015.16.006l5.24-.632a.5.5 0 0 0 .335-.19l1.189-1.528a.5.5 0 0 0 .082-.157l1.294-4.102a.5.5 0 0 0-.008-.324l-.58-1.57a.5.5 0 0 0-.075-.134l-2.659-3.407a.5.5 0 0 0-.191-.15L15.578 5.5a.5.5 0 0 0-.227-.042l-2.148.1a.5.5 0 0 1-.401-.172l-.988-1.14a.5.5 0 0 0-.86.198l-.314 1.172a.5.5 0 0 1-.335.349L6.556 7.119a.5.5 0 0 1-.13.022l-3.31.108a.5.5 0 0 0-.374.188Z"/></svg>`,
})
export class Bv {
  protected readonly b = inject(GeoIconBase);
}
