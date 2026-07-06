// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-andros',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.747 6.225 5.314 9.793a.5.5 0 0 0 .068.753l5.968 4.297a.5.5 0 0 1 .193.286l1.47 5.974a.5.5 0 0 0 .337.358l3.804 1.18a.5.5 0 0 0 .635-.36l1.26-5.226a.5.5 0 0 0-.022-.304l-6.088-15.14a.5.5 0 0 0-.452-.313l-3.712-.084a.5.5 0 0 0-.505.575l.611 4.014a.5.5 0 0 1-.134.422Z"/></svg>`,
})
export class BsAndros {
  protected readonly b = inject(GeoIconBase);
}
