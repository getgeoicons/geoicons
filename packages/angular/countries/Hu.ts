// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.243 16.743-3.567 1.82a.5.5 0 0 1-.374.033l-2.98-.917a.5.5 0 0 1-.212-.13l-3.608-3.736a.5.5 0 0 1-.034-.656l.798-1.02a.5.5 0 0 0 .107-.32l-.05-1.92a.5.5 0 0 1 .544-.512l1.106.098A.5.5 0 0 0 4.47 9.2l.388-.818a.5.5 0 0 1 .809-.135l1.01 1.031a.5.5 0 0 0 .386.15l1.997-.116a.5.5 0 0 0 .448-.349l.29-.922a.5.5 0 0 1 .332-.328l2.013-.609a.5.5 0 0 1 .258-.008l1.22.281a.5.5 0 0 0 .53-.212l.966-1.467a.5.5 0 0 1 .392-.224l2.279-.116a.5.5 0 0 1 .422.195l.541.704a.5.5 0 0 0 .501.185l1.112-.238a.5.5 0 0 1 .426.106l1.73 1.45a.5.5 0 0 1 .14.576l-.232.561a.5.5 0 0 1-.39.303l-1.133.164a.5.5 0 0 0-.367.257l-3.618 6.683a.5.5 0 0 1-.424.262l-4.04.122a.5.5 0 0 0-.212.055Z"/></svg>`,
})
export class Hu {
  protected readonly b = inject(GeoIconBase);
}
