// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ma',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.374 20.859H1.2l4.47-2.485a.5.5 0 0 0 .18-.17l1.58-2.499a.5.5 0 0 0 .06-.397l-.465-1.73a.5.5 0 0 1 .044-.369l2.06-3.78a.5.5 0 0 1 .238-.218l2.749-1.201a.5.5 0 0 0 .268-.285l1.41-3.803a.5.5 0 0 1 .279-.289l.787-.324a.5.5 0 0 1 .624.214l.71 1.242a.5.5 0 0 0 .422.251l4.47.107a.5.5 0 0 1 .478.403l1.116 5.632a.5.5 0 0 1-.497.597l-2.279-.03a.5.5 0 0 0-.264.07l-1.073.645a.5.5 0 0 0-.24.475l.112 1.213a.5.5 0 0 1-.183.435l-3.148 2.549a.5.5 0 0 1-.335.11l-2.631-.11a.5.5 0 0 0-.265.062l-2.263 1.26a.5.5 0 0 0-.257.441z"/></svg>`,
})
export class Ma {
  protected readonly b = inject(GeoIconBase);
}
