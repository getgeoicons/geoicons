// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.377 11.663-2.765 2.81 1.832.475a.5.5 0 0 0 .402-.067l1.6-1.06a.5.5 0 0 1 .241-.081l1.245-.085a.5.5 0 0 0 .266-.1l.97-.73a.5.5 0 0 1 .412-.088l1.043.24a.5.5 0 0 0 .576-.3l.18-.447a.5.5 0 0 0-.316-.665l-1.605-.496a.5.5 0 0 0-.213-.018l-3.576.466a.5.5 0 0 0-.292.146Zm10.635-2.294L18.2 12.17l4.6-3.059-3.292-.103a.5.5 0 0 0-.496.36ZM3.856 12.17H1.43l-.085-.233a.5.5 0 0 1 .223-.606l1.09-.619a.5.5 0 0 1 .313-.06l1.865.247-.54 1.008a.5.5 0 0 1-.44.264Z"/></svg>`,
})
export class Vg {
  protected readonly b = inject(GeoIconBase);
}
