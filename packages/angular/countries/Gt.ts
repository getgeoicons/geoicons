// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.975 3.78.04-2.077a.5.5 0 0 1 .499-.49l8.344-.012a.5.5 0 0 1 .5.517l-.314 9.012a.5.5 0 0 0 .505.517l2.583-.025a.5.5 0 0 1 .258.069l1.198.703a.5.5 0 0 1 .025.847l-4.1 2.742a.5.5 0 0 0-.223.433l.078 2.219a.5.5 0 0 1-.172.395l-4.609 3.992a.5.5 0 0 1-.466.102l-2.322-.67a.5.5 0 0 0-.117-.02l-3.392-.15a.5.5 0 0 1-.262-.088l-4.015-2.773a.5.5 0 0 1-.2-.538l.563-2.146a.5.5 0 0 0-.041-.359l-.485-.925a.5.5 0 0 1 .006-.476l2.08-3.736a.5.5 0 0 1 .439-.257l5.968.028a.5.5 0 0 0 .494-.407l.187-.99a.5.5 0 0 0-.169-.475L6.034 4.66a.25.25 0 0 1 .172-.44l1.249.05a.5.5 0 0 0 .52-.49Z"/></svg>`,
})
export class Gt {
  protected readonly b = inject(GeoIconBase);
}
