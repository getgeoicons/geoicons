// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.271 7.795.267-.935a.5.5 0 0 1 .327-.338l2.914-.947L3.682 4l2.426-.789a.5.5 0 0 1 .377.028l2.57 1.274a.5.5 0 0 1 .114.078l2.318 2.1a.5.5 0 0 0 .27.125l3.72.487 3.924 6.285a.5.5 0 0 0 .353.23l2.526.364a.5.5 0 0 1 .42.59l-.458 2.353-6.36 1.496a.5.5 0 0 0-.265.162l-1.181 1.378a.5.5 0 0 1-.482.165l-2.805-.588a.5.5 0 0 0-.433.115l-.68.6a.5.5 0 0 1-.76-.12l-1.772-2.989a.5.5 0 0 0-.128-.143l-1.012-.768a.5.5 0 0 1-.156-.197l-.392-.89a.5.5 0 0 1-.042-.178l-.065-1.375a.5.5 0 0 0-.11-.29L1.363 8.246a.5.5 0 0 1-.092-.451Z"/></svg>`,
})
export class Sa {
  protected readonly b = inject(GeoIconBase);
}
