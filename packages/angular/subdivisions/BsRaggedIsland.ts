// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-ragged-island',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m8.57 3.866-.337-1.797a.786.786 0 0 0-1.548.28l.644 3.744a7.57 7.57 0 0 0 2.919 4.773l.254.19c.4.3.453.88.115 1.249-.35.38-.28.982.148 1.272l.813.551a1 1 0 0 1 .434.72l.358 3.298a4.7 4.7 0 0 0 2.225 3.51l1.256.768a.824.824 0 0 0 1.069-.183c.284-.349.232-.859-.08-1.182-2.58-2.667-3.373-7.098-3.805-9.852a1 1 0 0 0-.328-.597l-.583-.512A11 11 0 0 1 8.57 3.866Z"/></svg>`,
})
export class BsRaggedIsland {
  protected readonly b = inject(GeoIconBase);
}
