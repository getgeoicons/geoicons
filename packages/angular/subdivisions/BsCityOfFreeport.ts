// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-city-of-freeport',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.651 14.369-.365 2.554a.6.6 0 0 0 .52.68l4.151.523a2 2 0 0 0 .617-.018l2.883-.538a2 2 0 0 0 .79-.335l3.18-2.258q.28-.197.596-.328l1.972-.81q.387-.16.716-.418l2.153-1.696a1 1 0 0 1 .475-.204l1.454-.21a2 2 0 0 0 .671-.224l.805-.44a.6.6 0 0 0 .237-.818l-1.419-2.547a1 1 0 0 0-.958-.51l-2.059.174a1 1 0 0 1-.8-.297l-.46-.473a.6.6 0 0 0-.742-.093l-2.695 1.642a1 1 0 0 1-.557.145l-1.29-.048a2 2 0 0 0-.873.166l-5.307 2.317a.6.6 0 0 0-.36.513l-.068 1.108a.6.6 0 0 1-.332.5l-2.39 1.189a1 1 0 0 0-.545.754Z"/></svg>`,
})
export class BsCityOfFreeport {
  protected readonly b = inject(GeoIconBase);
}
