// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gf',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.417 2.704.28-1.001a.5.5 0 0 1 .636-.342l5.976 1.944a.5.5 0 0 1 .199.122l2.501 2.501a.5.5 0 0 0 .133.095l3.436 1.694a.5.5 0 0 1 .242.26l.967 2.373a.5.5 0 0 1-.053.474l-3.751 5.38a.5.5 0 0 0-.056.104l-1.44 3.675a.5.5 0 0 1-.125.184l-2.442 2.266a.5.5 0 0 1-.596.063l-1.385-.826a.5.5 0 0 0-.376-.056l-1.178.291a.5.5 0 0 1-.314-.024l-.885-.373a.5.5 0 0 0-.49.057l-1.49 1.091a.5.5 0 0 1-.43.078L4.55 22.39a.5.5 0 0 1-.118-.05l-1.322-.775 1.06-.646a.5.5 0 0 0 .178-.184l1.114-2.007a.5.5 0 0 0 .06-.288l-.152-1.667a.5.5 0 0 1 .065-.297l1.203-2.073a.5.5 0 0 0-.088-.613l-1.266-1.207a.5.5 0 0 1-.122-.183L4.06 9.523a.5.5 0 0 1-.033-.166L3.93 5.783a.5.5 0 0 1 .126-.346l2.253-2.535a.5.5 0 0 0 .108-.198Z"/></svg>`,
})
export class Gf {
  protected readonly b = inject(GeoIconBase);
}
