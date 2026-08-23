// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm-saint-paul',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.795 5.673a.6.6 0 0 0-.207.873l4.77 6.798a2 2 0 0 1 .35.926l.343 3.051a2 2 0 0 1-.157 1.029l-.334.758a2 2 0 0 0-.159 1.01l.086.834a2 2 0 0 0 .546 1.18l.123.128a.8.8 0 0 0 .722.233l.924-.17a2 2 0 0 1 .688-.005l1.656.274c.222.037.449.036.67-.003l1.048-.183a1.42 1.42 0 0 0 1.175-1.457l-.016-.383a1 1 0 0 1 .41-.848l2.209-1.614a1 1 0 0 1 .583-.192l1.798-.013a2 2 0 0 0 1.168-.387l1.036-.758a3 3 0 0 0 .98-1.23l.207-.478a3 3 0 0 0 .175-1.841l-.015-.069a3 3 0 0 0-.412-.982l-.413-.636a2 2 0 0 1-.274-1.524l.837-3.755a4 4 0 0 0 .088-1.132l-.012-.189a4 4 0 0 0-.6-1.86l-.834-1.334a.6.6 0 0 0-.657-.264l-1.433.364a4 4 0 0 0-1.232.548l-3.39 2.256a3 3 0 0 1-2.469.393l-2.811-.786a7 7 0 0 0-2.921-.18l-.514.077a7 7 0 0 0-2.28.76z"/></svg>`,
})
export class DmSaintPaul {
  protected readonly b = inject(GeoIconBase);
}
