// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-saint-james',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.72 2.747a.6.6 0 0 0-.492-.67L17.17 1.55a15 15 0 0 0-4.048-.146l-.467.047A12.4 12.4 0 0 0 8.79 2.487a1.65 1.65 0 0 0-.934 1.17l-.19.926A2 2 0 0 1 5.652 6.18l-1.274-.035a.8.8 0 0 0-.786.562l-.21.679a.8.8 0 0 0 .318.902l1.098.736a2 2 0 0 1 .737.903l.977 2.386a3 3 0 0 0 .614.942l1.862 1.937a3 3 0 0 1 .542.782l1.664 3.468a1 1 0 0 1-.137 1.078l-.626.741a.6.6 0 0 0-.094.62l.17.407a.6.6 0 0 0 .742.338l6.817-2.25a.6.6 0 0 0 .407-.49z"/></svg>`,
})
export class JmSaintJames {
  protected readonly b = inject(GeoIconBase);
}
