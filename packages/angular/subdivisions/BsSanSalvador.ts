// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-san-salvador',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m8.223 21.157-1.97 1.352a.928.928 0 0 1-1.28-1.306l1.117-1.56c.449-.628.83-1.3 1.139-2.008l2.038-4.675a1 1 0 0 0 .03-.72L8.004 8.42a1 1 0 0 1 .057-.776l2.827-5.52a.6.6 0 0 1 .668-.312l2.102.483a1 1 0 0 0 .643-.066l1.98-.914a.6.6 0 0 1 .498-.003l1.045.47a.6.6 0 0 1 .337.408l1.46 6.124a1 1 0 0 1-.043.601l-2.684 6.747a2 2 0 0 1-.541.766l-.553.483c-.23.202-.411.454-.529.736l-1.397 3.357a1 1 0 0 1-.867.614l-2.125.12a1 1 0 0 1-.49-.096l-1.17-.562a1 1 0 0 0-.999.077Z"/></svg>`,
})
export class BsSanSalvador {
  protected readonly b = inject(GeoIconBase);
}
