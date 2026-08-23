// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-baja-california',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.68 1.67a.3.3 0 0 0-.302-.42l-8.575.83a.3.3 0 0 0-.246.42l5.366 12.17a1 1 0 0 0 .283.372l5.636 4.595a1 1 0 0 1 .361.665l.247 2.231a.3.3 0 0 0 .299.267h4.507a.3.3 0 0 0 .296-.35l-.207-1.23a1 1 0 0 0-.38-.63l-2.108-1.604a1 1 0 0 1-.351-.505l-.473-1.556a1 1 0 0 0-.28-.445l-3.007-2.761a1 1 0 0 1-.319-.644l-.631-6.751a1 1 0 0 0-.14-.423l-.8-1.329a1 1 0 0 1-.057-.923z"/></svg>`,
})
export class MxBajaCalifornia {
  protected readonly b = inject(GeoIconBase);
}
