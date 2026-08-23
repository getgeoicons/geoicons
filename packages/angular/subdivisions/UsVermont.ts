// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-vermont',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.986 22.8-.36-1.715a3 3 0 0 1-.014-1.153l.83-4.563c.056-.307.159-.603.306-.878l1.85-3.459a1 1 0 0 0 .117-.529l-.092-1.613a1 1 0 0 1 .575-.963l2.159-1.007a1 1 0 0 0 .563-.742l.368-2.212.396-2.382a.3.3 0 0 0-.295-.35L6.212 1.202a.3.3 0 0 0-.298.34l.61 4.494a2 2 0 0 1-.171 1.119l-.877 1.868a2 2 0 0 0-.19.837l-.026 4.105a.6.6 0 0 0 .252.493l.887.632a.6.6 0 0 1 .251.507l-.21 6.725a.3.3 0 0 0 .29.309z"/></svg>`,
})
export class UsVermont {
  protected readonly b = inject(GeoIconBase);
}
