// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-co',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.673 18.108 1.132 1.511a1 1 0 0 0 .83.4l1.927-.056a.6.6 0 0 1 .507.947l-.436.614a.6.6 0 0 0 .343.929l.74.187a.6.6 0 0 0 .74-.486l.557-3.445a1 1 0 0 0-.186-.758l-.594-.795a1 1 0 0 1-.193-.697l.077-.788a1 1 0 0 1 .895-.897l1.778-.178a.6.6 0 0 0 .521-.745l-.4-1.573a2 2 0 0 1 .108-1.303l.293-.662a.757.757 0 0 0-.91-1.032l-1.144.343a1 1 0 0 1-1.126-.413l-.184-.283a1 1 0 0 0-.82-.455L13.75 8.45a1 1 0 0 1-.897-.596l-.542-1.224a1 1 0 0 1 .002-.812l.533-1.193a2 2 0 0 1 .596-.762l1.188-.926a.818.818 0 0 0-1.003-1.293l-1.822 1.405a1 1 0 0 1-.36.176l-1.405.364a1 1 0 0 0-.687.622l-.296.801a2 2 0 0 1-.944 1.078l-.819.43a1 1 0 0 0-.457.502L6.37 8.147a1 1 0 0 0-.058.576l.633 3.242a1 1 0 0 1-.211.83l-1.727 2.088a.6.6 0 0 0 .204.924l1.69.803q.16.076.332.123l2.365.644a2 2 0 0 1 1.075.731Z"/></svg>`,
})
export class Co {
  protected readonly b = inject(GeoIconBase);
}
