// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-wf',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.722 17.747 3.36 15.208a1 1 0 0 0-1.525.414l-.332.796a1 1 0 0 0 .334 1.192l2.996 2.187a1 1 0 0 0 1.127.035l.697-.443a1 1 0 0 0 .065-1.642ZM19.704 4.823 18.86 6.56a1 1 0 0 0 .534 1.367l1.22.48a1 1 0 0 0 1.3-.577l.6-1.58a1 1 0 0 0-.39-1.193l-.975-.637a1 1 0 0 0-1.446.402Z"/></svg>`,
})
export class Wf {
  protected readonly b = inject(GeoIconBase);
}
