// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gd-saint-david',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.882 5.008a1 1 0 0 0-.712.252L2.903 7.278a1 1 0 0 0-.332.834l.442 5.048a1 1 0 0 1-.467.935l-.76.474a1 1 0 0 0-.467.763l-.065.747a2 2 0 0 0 .266 1.181l.954 1.632a1 1 0 0 0 1.18.444l.804-.268a1 1 0 0 1 .665.01l1.947.723q.315.117.65.161l1.3.172a.99.99 0 0 0 1.118-.92.99.99 0 0 1 .487-.794l.082-.048a.917.917 0 0 1 1.327.481.917.917 0 0 0 1.32.484l4.197-2.421a3 3 0 0 0 .886-.78l1.61-2.112 2.327-2.3a1 1 0 0 0 .256-.994l-.11-.37a1 1 0 0 0-.61-.655l-4.498-1.667a3 3 0 0 1-.965-.584L12.59 3.981a.6.6 0 0 0-.633-.108L9.324 4.976a2 2 0 0 1-.868.154z"/></svg>`,
})
export class GdSaintDavid {
  protected readonly b = inject(GeoIconBase);
}
