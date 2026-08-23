// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-saint-mary',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.11 13.35a.8.8 0 0 0 .766.411l2.145-.18a.6.6 0 0 1 .597.35l2.334 5.164a1 1 0 0 0 1.112.567l4.023-.824a1 1 0 0 1 .748.142l2.16 1.41a.6.6 0 0 0 .887-.283l2.604-6.634a.6.6 0 0 0-.546-.82l-3.264-.07a1 1 0 0 1-.9-.609L16.77 9.598a2 2 0 0 0-.902-.985l-3.425-1.825a1 1 0 0 1-.53-.89l.006-.734a1 1 0 0 0-1.128-1l-2.775.358a2 2 0 0 1-.68-.028L1.997 3.338a.623.623 0 0 0-.653.95l.815 1.243a2 2 0 0 1 .32.933l.17 2.07a2 2 0 0 0 .242.803z"/></svg>`,
})
export class JmSaintMary {
  protected readonly b = inject(GeoIconBase);
}
