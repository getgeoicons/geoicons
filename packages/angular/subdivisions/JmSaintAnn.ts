// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-saint-ann',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.316 17.617a.6.6 0 0 0 .428.703l1.544.425a1 1 0 0 0 .78-.107l1.616-.968a1 1 0 0 1 .755-.113l5.26 1.309a3 3 0 0 0 1.098.065l5.778-.725c.346-.044.682-.147.993-.306l2.7-1.383a.6.6 0 0 0 .263-.804l-1.563-3.097a2 2 0 0 1-.195-.619l-.417-2.923a1 1 0 0 0-1.045-.857l-1.386.075a3 3 0 0 1-1.213-.185l-5.45-2.036a2 2 0 0 0-.747-.125l-2.906.07a4 4 0 0 1-1.162-.144l-2.813-.778a.962.962 0 0 0-1.195 1.14l.564 2.486a2 2 0 0 1 .006.854z"/></svg>`,
})
export class JmSaintAnn {
  protected readonly b = inject(GeoIconBase);
}
