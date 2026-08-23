// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sv-ahuachapan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.358 3.794a1 1 0 0 0-.705-.327l-1.406-.05a2 2 0 0 1-1.094-.375l-.715-.513a2 2 0 0 0-1.711-.3l-2.196.62a2 2 0 0 0-.965.614L10.46 5.886a2 2 0 0 1-.475.4L7.14 8.006a1 1 0 0 0-.423.515l-.531 1.47a1 1 0 0 1-.393.497l-2.031 1.33a2 2 0 0 0-.835 1.15l-.36 1.326a2 2 0 0 0 .107 1.343l.16.355a1 1 0 0 1-.333 1.224l-.878.625a.3.3 0 0 0 .05.517l7.633 3.496a.6.6 0 0 0 .687-.135l1.617-1.721a1 1 0 0 1 1.267-.159l1.762 1.125a1 1 0 0 0 .882.096l.718-.263a1 1 0 0 0 .566-.523l1.193-2.61a1 1 0 0 0 .078-.253l.82-4.986a1 1 0 0 0-.083-.591l-.43-.907a.3.3 0 0 1 .214-.423l2.468-.473a.6.6 0 0 0 .461-.416l1.111-3.69a1 1 0 0 0-.217-.96z"/></svg>`,
})
export class SvAhuachapan {
  protected readonly b = inject(GeoIconBase);
}
