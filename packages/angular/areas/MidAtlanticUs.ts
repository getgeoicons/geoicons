// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mid-atlantic-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M17.393 20.472C13.229 21.74 6.933 22.55 4.243 22.8l3.007-2.478-1.144-1.168a1 1 0 0 1-.183-1.142l2.19-4.44a1 1 0 0 0 .092-.587l-.413-2.83 1.64-1.264a1 1 0 0 0 .384-.903l-.093-.84a.6.6 0 0 1 .523-.662l2.439-.3a1 1 0 0 0 .868-1.128l-.08-.586a1 1 0 0 1 .14-.66l1.01-1.636a1 1 0 0 1 .651-.455l1.967-.4a.6.6 0 0 1 .709.472l1.767 9.019a1 1 0 0 1-.004.404l-1.917 8.815a.59.59 0 0 1-.403.441Z"/></svg>`,
})
export class MidAtlanticUs {
  protected readonly b = inject(GeoIconBase);
}
