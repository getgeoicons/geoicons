// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-yucatan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.419 9.391a1 1 0 0 0-.217.627l.008 1.887a.6.6 0 0 0 .43.573l2.265.667a1 1 0 0 1 .523.366l4.653 6.318a.6.6 0 0 0 .888.087l3.797-3.464a3 3 0 0 1 .793-.52l3.552-1.596a2 2 0 0 0 .585-.4l2.408-2.375q.202-.199.34-.446l1.095-1.952a2 2 0 0 0 .256-.998l-.03-2.996a.6.6 0 0 0-.46-.578l-3.416-.82a2 2 0 0 0-1.119.051C13.394 5.3 10.602 5.908 5.844 6.574a3 3 0 0 0-.879.262l-1.804.857a3 3 0 0 0-1.062.843z"/></svg>`,
})
export class MxYucatan {
  protected readonly b = inject(GeoIconBase);
}
