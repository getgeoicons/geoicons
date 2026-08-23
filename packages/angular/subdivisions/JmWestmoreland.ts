// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-westmoreland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.403 7.917a1 1 0 0 0-.837-.549l-3.67-.207a.6.6 0 0 1-.27-.082l-2.83-1.668a.6.6 0 0 0-.3-.083L8.44 5.277a.6.6 0 0 0-.46.208l-1.51 1.75a.6.6 0 0 1-.542.2L3.302 7.05a1 1 0 0 0-.965.415l-.82 1.17a1 1 0 0 0-.104.96l.363.87a1 1 0 0 0 .696.588l1.97.457q.576.135 1.106.4l1.21.605a1 1 0 0 0 .782.048l1.546-.55a3 3 0 0 1 1.11-.172l3.588.126a2.27 2.27 0 0 1 2.176 2.015l.126 1.125a1 1 0 0 0 .46.733l.783.496c.314.199.588.454.81.753l.555.753a.6.6 0 0 0 1.044-.144l.764-2.013a.6.6 0 0 0-.033-.497l-.374-.693a.6.6 0 0 1 .069-.671l2.211-2.63a1 1 0 0 0 .128-1.094z"/></svg>`,
})
export class JmWestmoreland {
  protected readonly b = inject(GeoIconBase);
}
