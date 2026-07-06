// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ng',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.295 12.287-.085 4.208a.5.5 0 0 0 .512.51l2.3-.052a.5.5 0 0 1 .414.204l2.509 3.404a.5.5 0 0 0 .48.197l3.848-.605a.5.5 0 0 0 .357-.247l2.453-4.31a.5.5 0 0 1 .72-.164l1.6 1.11a.5.5 0 0 0 .73-.182l4.053-7.86a.5.5 0 0 1 .163-.184l1.087-.743a.5.5 0 0 0 .162-.642l-1.622-3.148a.5.5 0 0 0-.706-.197l-1.538.946a.5.5 0 0 1-.249.074l-9.102.251a.5.5 0 0 1-.266-.068L6.57 3.307a.5.5 0 0 0-.405-.044l-2.093.676a.5.5 0 0 0-.281.228l-.86 1.51a.5.5 0 0 0-.063.31l.388 3.134a.5.5 0 0 1-.087.348L1.386 12.01a.5.5 0 0 0-.091.277Z"/></svg>`,
})
export class Ng {
  protected readonly b = inject(GeoIconBase);
}
