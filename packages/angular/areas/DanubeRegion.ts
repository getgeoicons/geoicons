// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-danube-region',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m14.809 17.469-3.458-1.195a1 1 0 0 1-.274-.145l-5.27-3.953a1 1 0 0 0-.886-.158l-1.988.593a.6.6 0 0 1-.726-.344l-.856-2.06a.6.6 0 0 1 .12-.646L3.539 7.41a1 1 0 0 1 1.364-.073l1.21 1.016a1 1 0 0 0 1.387-.1l1.24-1.384a1 1 0 0 1 .932-.316l6.378 1.219a1 1 0 0 0 .45-.017l2.417-.657a1 1 0 0 1 1.045.342l2.53 3.177a1 1 0 0 1 .187.868l-.543 2.15a1 1 0 0 1-.419.59l-4.289 2.83a1 1 0 0 1-.38.15l-1.742.304a1 1 0 0 1-.497-.04Z"/></svg>`,
})
export class DanubeRegion {
  protected readonly b = inject(GeoIconBase);
}
