// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mk',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.245 12.958 3.437 19.5a.5.5 0 0 0 .439.34l6.646.472a.5.5 0 0 0 .396-.151l2.761-2.86a.5.5 0 0 1 .37-.153l5.388.098a.5.5 0 0 0 .503-.42l.198-1.233a.5.5 0 0 1 .456-.42l1.15-.086a.5.5 0 0 0 .457-.423l.579-3.794a.5.5 0 0 0-.03-.258l-1.149-2.923a.5.5 0 0 0-.295-.287l-2.292-.828a.5.5 0 0 1-.219-.156l-2.044-2.53a.5.5 0 0 0-.451-.182l-6.17.78a.5.5 0 0 0-.344.206l-.99 1.391a.5.5 0 0 1-.611.167L6.68 5.579a.5.5 0 0 0-.353-.02l-1.975.62a.5.5 0 0 0-.344.55l.26 1.758a.5.5 0 0 1-.454.572l-1.408.111a.5.5 0 0 0-.448.386l-.727 3.13a.5.5 0 0 0 .013.272Z"/></svg>`,
})
export class Mk {
  protected readonly b = inject(GeoIconBase);
}
