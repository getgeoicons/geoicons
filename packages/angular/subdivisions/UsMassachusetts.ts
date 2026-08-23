// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-massachusetts',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.953 7.617a.3.3 0 0 0-.297.22l-1.25 4.542a.6.6 0 0 0 .57.76l11.113.15a.6.6 0 0 1 .552.386l1.193 3.124a.6.6 0 0 0 .895.283l1.08-.727a.6.6 0 0 1 .906.314l.115.353a.6.6 0 0 0 .72.397l3.022-.772a1.497 1.497 0 0 0 1.075-1.846l-.519-1.894a.79.79 0 1 0-1.514.448l.127.396a1 1 0 0 1-.666 1.261l-.039.012a1 1 0 0 1-1.082-.351l-.142-.186a1 1 0 0 1-.128-.223l-.704-1.695a1 1 0 0 0-.463-.505l-1.095-.567a.947.947 0 0 1-.13-1.6l1.098-.817a1 1 0 0 0 .25-1.333l-.326-.52a1 1 0 0 0-1.312-.355l-1.685.884a1 1 0 0 1-.488.115z"/></svg>`,
})
export class UsMassachusetts {
  protected readonly b = inject(GeoIconBase);
}
