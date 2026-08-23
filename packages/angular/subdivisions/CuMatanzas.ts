// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-matanzas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.487 10.028a2 2 0 0 1 .112 1.326l-.418 1.598a1 1 0 0 1-.875.743l-5.354.493a.701.701 0 0 0-.279 1.31l4.206 2.364a2 2 0 0 0 1.042.256l3.058-.094a1 1 0 0 1 .94.583l.082.177a1 1 0 0 0 1.186.545l1.904-.549a1 1 0 0 1 .869.155l.916.673a2 2 0 0 0 1.198.389l4.14-.029a.763.763 0 0 0 .086-1.52l-1.131-.137a3 3 0 0 1-.982-.295l-.571-.286a2 2 0 0 1-1.082-1.483l-.1-.649a1.798 1.798 0 0 1 2.145-2.035l1.444.303a1 1 0 0 0 .872-.235l.506-.453a1 1 0 0 0 .321-.889l-.346-2.368a1 1 0 0 0-.456-.702l-.892-.563a1 1 0 0 1-.103-1.616l.782-.646a.956.956 0 0 0-.728-1.686l-6.072.76a1 1 0 0 1-.797-.252l-.922-.839a1 1 0 0 0-.954-.22l-1.457.427a2 2 0 0 1-1.029.026l-1.312-.314a.8.8 0 0 0-.944.52l-.454 1.336a1 1 0 0 0 .035.732z"/></svg>`,
})
export class CuMatanzas {
  protected readonly b = inject(GeoIconBase);
}
