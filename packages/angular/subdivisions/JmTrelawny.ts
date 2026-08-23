// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-trelawny',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.587 4a1 1 0 0 0-.76-.556c-5.28-.743-8.472-.952-13.82-1.1a3 3 0 0 1-.87-.154l-1.733-.577a.6.6 0 0 0-.784.485L1.288 18.716a.6.6 0 0 0 .541.681l7.888.696a2 2 0 0 0 .953-.15l1.785-.752a2 2 0 0 1 1.148-.122l1.823.344a2 2 0 0 1 .854.385l2.88 2.235a.6.6 0 0 0 .954-.346L22.706 9.82a3 3 0 0 0 .06-.866l-.194-2.589a2 2 0 0 0-.192-.715z"/></svg>`,
})
export class JmTrelawny {
  protected readonly b = inject(GeoIconBase);
}
