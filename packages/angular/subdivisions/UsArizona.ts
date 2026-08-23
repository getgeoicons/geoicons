// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-arizona',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.09 1.51a.3.3 0 0 0-.3-.3L5.624 1.2a.3.3 0 0 0-.3.304l.041 2.982a.3.3 0 0 1-.3.304h-1.64a.3.3 0 0 0-.299.324l.308 3.796a2 2 0 0 0 .386 1.03l1.008 1.359a.6.6 0 0 1 .053.63l-1.518 2.985a2 2 0 0 0-.21.743l-.196 2.378a.6.6 0 0 0 .392.612l11.018 4.031c.22.08.453.122.687.122h5.726a.3.3 0 0 0 .3-.3z"/></svg>`,
})
export class UsArizona {
  protected readonly b = inject(GeoIconBase);
}
