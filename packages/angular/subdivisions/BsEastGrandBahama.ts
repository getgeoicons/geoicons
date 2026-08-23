// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-east-grand-bahama',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M10.355 9.565a1 1 0 0 1-.502-.05l-1.458-.54a1 1 0 0 0-.953.142l-1.184.9a1 1 0 0 1-.769.191l-3.263-.542a.6.6 0 0 0-.66.804l1.053 2.794a.6.6 0 0 0 .643.383L7.989 13l7.31-1.122a4 4 0 0 1 2.073.232l.377.148a4 4 0 0 1 2.025 1.77l1.15 2.055a.6.6 0 0 0 1.023.039l.614-.927a1 1 0 0 0 .14-.781l-.564-2.397a1 1 0 0 0-.503-.653l-1.619-.864a1 1 0 0 1-.519-.737l-.258-1.76a.6.6 0 0 0-.93-.41l-1.209.82a1 1 0 0 1-.406.16z"/></svg>`,
})
export class BsEastGrandBahama {
  protected readonly b = inject(GeoIconBase);
}
