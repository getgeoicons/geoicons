// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cr-limon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.04 9.553a.6.6 0 0 0 .255.814l2.806 1.448a2 2 0 0 0 .911.223l2.208.006a.6.6 0 0 1 .588.71l-.276 1.484a2 2 0 0 1-.333.789l-1.48 2.095a.6.6 0 0 0-.011.675l.803 1.226a.6.6 0 0 0 .427.266l1.658.206a2 2 0 0 1 1.188.592L15.42 22.8l-.077-4.537a1 1 0 0 1 .173-.579l.012-.018a1 1 0 0 1 1.28-.329l1.08.549a1 1 0 0 0 .967-.034l.52-.311a.6.6 0 0 0-.008-1.033l-1.78-1.037a3 3 0 0 1-.688-.55L10.558 8.1a3 3 0 0 1-.488-.708L6.994 1.2l-1.84 2.747a2 2 0 0 0-.339 1.113v2.534a2 2 0 0 1-.233.936z"/></svg>`,
})
export class CrLimon {
  protected readonly b = inject(GeoIconBase);
}
