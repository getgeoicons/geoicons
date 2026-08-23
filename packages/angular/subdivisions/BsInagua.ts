// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-inagua',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.337 19.967a4 4 0 0 1 1.112-.222l2.64-.145a1 1 0 0 0 .812-.499l3.125-5.422a1 1 0 0 0 .126-.379l.475-3.918a.6.6 0 0 0-.8-.636l-1.11.403a.6.6 0 0 0-.34.314l-1.307 2.855a3 3 0 0 1-1.779 1.597l-.924.308a2.946 2.946 0 0 1-3.52-1.39l-.344-.633a.6.6 0 0 0-.968-.121l-.504.545a2 2 0 0 1-1.146.616l-1.203.197a1 1 0 0 0-.687.458l-.24.385a2 2 0 0 1-1.225.885l-1.069.26a.6.6 0 0 0-.457.615l.035.648a1 1 0 0 1-.63.985l-.609.24a.6.6 0 0 0-.32.82l1.09 2.251a.6.6 0 0 0 .734.307l1.65-.564a3 3 0 0 1 1.378-.134l2.568.352a2 2 0 0 0 .937-.096z"/></svg>`,
})
export class BsInagua {
  protected readonly b = inject(GeoIconBase);
}
