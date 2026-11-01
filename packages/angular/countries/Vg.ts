// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.976 14.102 2.039-2.071a2 2 0 0 1 1.166-.58l2.74-.358a2 2 0 0 1 .85.073l1.034.32a.748.748 0 0 1-.388 1.443l-.184-.042a1.94 1.94 0 0 0-1.6.341l-.079.06a2 2 0 0 1-1.067.397l-.404.028a2 2 0 0 0-.968.328l-1.083.717a1 1 0 0 1-.804.134l-1.113-.289a.3.3 0 0 1-.139-.5Zm12.452-2.719.627-2.163a.3.3 0 0 1 .297-.217l2.509.079a.3.3 0 0 1 .157.55l-3.136 2.085a.3.3 0 0 1-.454-.334Zm-16.42 1.05 1.769-.216a.735.735 0 0 0 .007-1.458l-.647-.086a1 1 0 0 0-.625.122l-.88.5a.611.611 0 0 0 .375 1.137Z"/></svg>`,
})
export class Vg {
  protected readonly b = inject(GeoIconBase);
}
