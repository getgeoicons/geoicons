// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gh',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m15.542 19.591-6.858 3.122a.5.5 0 0 1-.386.012l-2.02-.777a.5.5 0 0 1-.293-.304L4.13 16.25a.5.5 0 0 1 .03-.393c.37-.706 1.687-3.22 2.43-4.664a.5.5 0 0 0 .049-.31L5.22 2.368a.5.5 0 0 1 .503-.582l6.886.133a.5.5 0 0 0 .294-.09l.753-.52a.5.5 0 0 1 .347-.085l1.137.143a.5.5 0 0 1 .416.64l-.206.683a.5.5 0 0 0 .203.562l1.066.704a.5.5 0 0 1 .224.426l-.082 4.836a.5.5 0 0 0 .123.337l.76.873a.5.5 0 0 1 .12.38l-.495 4.74a.5.5 0 0 0 .165.426l2.074 1.84a.5.5 0 0 1-.009.756l-1.193 1.011a.5.5 0 0 1-.358.117l-2.164-.15a.5.5 0 0 0-.242.043Z"/></svg>`,
})
export class Gh {
  protected readonly b = inject(GeoIconBase);
}
