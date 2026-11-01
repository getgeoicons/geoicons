// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.985 14.686 6.332-.25a.3.3 0 0 0 .288-.305l-.017-1.257a.3.3 0 0 1 .307-.304l2.537.06a1 1 0 0 0 .856-.445l.45-.675a1 1 0 0 1 1.356-.298l3.345 2.057a3 3 0 0 0 2.512.293l2.215-.73a.6.6 0 0 0 .358-.818l-.451-.997a.6.6 0 0 0-.723-.326l-1.622.497a2 2 0 0 1-1.676-.236L15.375 9.21a3 3 0 0 0-1.853-.478l-1.592.116a1 1 0 0 0-.846.603l-.38.884a.3.3 0 0 1-.28.182l-6.844-.103a1 1 0 0 0-.761.334l-1.325 1.484a1 1 0 0 0-.248.769l.119 1.147a.6.6 0 0 0 .62.538Z"/></svg>`,
})
export class Gm {
  protected readonly b = inject(GeoIconBase);
}
