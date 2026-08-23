// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-tennessee',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M15.81 14.568a.3.3 0 0 0 .225-.101l1.33-1.499c.252-.283.578-.489.94-.594l2.958-.855a1 1 0 0 0 .57-.43l.682-1.092a.3.3 0 0 0-.252-.458L7.188 9.435a6 6 0 0 0-.948.07l-2.977.455a.3.3 0 0 0-.232.181l-1.659 3.993a.3.3 0 0 0 .277.415z"/></svg>`,
})
export class UsTennessee {
  protected readonly b = inject(GeoIconBase);
}
