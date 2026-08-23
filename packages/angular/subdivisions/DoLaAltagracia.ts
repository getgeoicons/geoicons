// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-la-altagracia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.94 17.38 7.1 19.1l1.833 3.908 2.767-.328 1.17-4.352 3.269 1.287.966-.916.198-2.03 2.897-3.714.272-1.412-1.032-1.253-4.787-3.402-4.333-4.135L8.03 1.2 6.358 3.347l1.065 2.6L5.863 8.2l-1.684.124-.42 1.14L6.431 13.3z"/></svg>`,
})
export class DoLaAltagracia {
  protected readonly b = inject(GeoIconBase);
}
