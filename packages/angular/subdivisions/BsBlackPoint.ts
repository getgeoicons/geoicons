// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-black-point',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.916 12.365C9.724 7.84 8.204 5.419 5.21 1.592a.79.79 0 0 0-.794-.282.798.798 0 0 0-.44 1.28c2.979 3.698 4.533 6.243 6.649 10.785 2.279 4.025 3.916 6.158 7.915 9.176a.8.8 0 0 0 .727.125c.642-.202.774-1.055.238-1.461-3.678-2.78-5.306-4.995-7.59-8.85Z"/></svg>`,
})
export class BsBlackPoint {
  protected readonly b = inject(GeoIconBase);
}
