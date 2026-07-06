// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-va',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.998 9.2-.44 3.119L1.2 16.036l2.018.894 1.298 1.012a.5.5 0 0 1 .138.169l.371.732a.5.5 0 0 0 .53.267l.811-.138a.5.5 0 0 0 .415-.454l.051-.658 3.454.558v1.059l6.069.67-.443-2.723 3.421-.494c2.51 2.999 5.2-2.03 2.015-3.764l.266-5.816-3.345-1.103-.418-2.395-6.504 2.395-.831-.686-1.029.268-.436.826.436.885-1.311 1.41z"/></svg>`,
})
export class Va {
  protected readonly b = inject(GeoIconBase);
}
