// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.617 22.788-1.838-.06a.3.3 0 0 1-.29-.32l.618-9.143.055-7.013a.6.6 0 0 1 .81-.557l.876.325a.6.6 0 0 0 .732-.268l2.12-3.776a1 1 0 0 1 1.259-.432l1.904.796a1 1 0 0 1 .611 1.001l-.105 1.327a3 3 0 0 1-.238.958l-.882 2.03a2 2 0 0 0-.08 1.373l.245.813a1 1 0 0 1-.008.6l-.336 1.026a2 2 0 0 0 0 1.249l.154.466a3 3 0 0 1-.158 2.26l-1.856 3.78a1 1 0 0 1-.512.482l-.696.29a2 2 0 0 0-.99.9l-.846 1.577a.6.6 0 0 1-.549.316Z"/></svg>`,
})
export class Bz {
  protected readonly b = inject(GeoIconBase);
}
