// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-southern-mexico',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M10.115 7.315 1.2 7.27l.028 2.29a1 1 0 0 0 .046.287l.292.932a1 1 0 0 0 .54.611l8.995 4.095a1 1 0 0 0 .816.006l1.392-.61a1 1 0 0 1 .815.006l.585.265q.175.08.307.218l.62.645a1 1 0 0 0 1.407.036l.788-.743a1 1 0 0 0 .302-.883l-.207-1.312 2.484-.297a1 1 0 0 0 .768-.53l1.405-2.693a1 1 0 0 0 .035-.85l-.024-.058a1 1 0 0 0-1.094-.598l-2.516.438a1 1 0 0 0-.79.712l-.412 1.446a1 1 0 0 1-.644.675l-2.841.95a1 1 0 0 1-.795-.07l-1.245-.675a1 1 0 0 1-.433-.467z"/></svg>`,
})
export class SouthernMexico {
  protected readonly b = inject(GeoIconBase);
}
