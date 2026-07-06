// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-caribbean',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.017 8.668-.475.613a.701.701 0 0 0 .678 1.12l.227-.041a1 1 0 0 0 .165-.048l1.665-.664a1 1 0 0 1 .672-.025l4.298 1.359a1 1 0 0 1 .58.482l.427.798a1 1 0 0 0 .864.529l2.427.043a1 1 0 0 0 .423-.086l.582-.258a.6.6 0 0 0 .03-1.082L8.077 8.074a1 1 0 0 0-.37-.106l-2.955-.256a1 1 0 0 0-.38.041l-1.859.572a1 1 0 0 0-.496.343Zm17.891 3.804-1.887-.021a.6.6 0 0 0-.534.887l.8 1.468a1 1 0 0 0 1.248.45l.236-.093a1 1 0 0 1 .397-.071l1.649.043a.769.769 0 0 0 .415-1.428l-1.82-1.093a1 1 0 0 0-.504-.142Zm-7.804 2.202-1.298-.329a.91.91 0 1 0-.301 1.79l1.333.115a.802.802 0 0 0 .266-1.576Z"/></svg>`,
})
export class Caribbean {
  protected readonly b = inject(GeoIconBase);
}
