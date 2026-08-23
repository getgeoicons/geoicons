// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vc-charlotte',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.668 18.12a1 1 0 0 0 .219.937l1.907 2.127a3 3 0 0 0 1.387.875l1.984.584a.6.6 0 0 0 .73-.361l2.308-6.044a4 4 0 0 0 .262-1.503l-.14-7.292a4 4 0 0 0-.353-1.569L14.31 2.187a1 1 0 0 0-.78-.58l-2.543-.339a.3.3 0 0 0-.318.411l1.037 2.534a.3.3 0 0 1-.233.41l-1.225.184a.3.3 0 0 0-.252.344l1.19 7.442a1 1 0 0 1-.562 1.062l-1.552.731a1 1 0 0 0-.537.636z"/></svg>`,
})
export class VcCharlotte {
  protected readonly b = inject(GeoIconBase);
}
