// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cc',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="M6.412 16.034a.875.875 0 0 1 1.167.59l.91 3.44.125.467.47-.107.965-.221a.874.874 0 1 1 .366 1.71l-1.834.364a1.194 1.194 0 0 1-1.375-.827L5.894 17.1a.875.875 0 0 1 .518-1.066Zm7.162-3.378a.86.86 0 0 1 1.197.316l3.22 5.792a1.19 1.19 0 0 1-.416 1.596l-1.895 1.167a.872.872 0 1 1-.89-1.498l1.169-.67.439-.252-.258-.435-2.86-4.844a.86.86 0 0 1 .294-1.172ZM7.364 1.7a1.123 1.123 0 1 1 0 2.246 1.123 1.123 0 0 1 0-2.246Z"/></svg>`,
})
export class Cc {
  protected readonly b = inject(GeoIconBase);
}
