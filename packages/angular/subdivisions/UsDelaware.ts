// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-delaware',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.595 2.967a.3.3 0 0 0-.048.18l1.115 19.236a.3.3 0 0 0 .294.282l6.826.123a.6.6 0 0 0 .608-.661l-.444-4.33a.6.6 0 0 0-.142-.33l-3.367-3.917a1 1 0 0 1-.241-.642l-.024-2.33a1 1 0 0 0-.147-.513L10.31 7.266a1 1 0 0 1-.142-.424l-.17-1.712a1 1 0 0 1 .156-.64l1.601-2.482a.275.275 0 0 0-.135-.406l-.433-.163a2.73 2.73 0 0 0-2.215.134l-.023.012a2.9 2.9 0 0 0-1.069.956z"/></svg>`,
})
export class UsDelaware {
  protected readonly b = inject(GeoIconBase);
}
