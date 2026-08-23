// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-suchitepequez',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.038 7.295a1 1 0 0 0-.504-.645l-1.25-.66a1 1 0 0 0-1.089.1l-1.05.832a.6.6 0 0 1-.9-.184L13.868 4.2a1 1 0 0 0-1.286-.436l-2.004.892a.972.972 0 0 1-1.256-.862l-.125-1.802a.3.3 0 0 0-.057-.158l-.27-.366a.3.3 0 0 0-.444-.045l-1.74 1.58a1 1 0 0 0-.304.522l-.498 2.222a5 5 0 0 0-.119.937l-.153 4.88-.858 5.027a5 5 0 0 1-.43 1.343l-.89 1.833a.6.6 0 0 0 .223.772l3.106 1.928a.6.6 0 0 0 .842-.221l2.228-4.049a1 1 0 0 0 .118-.586l-.173-1.66a1 1 0 0 1 .741-1.07l4.387-1.15a1 1 0 0 1 .784.12l1.347.843a.6.6 0 0 1 .264.649l-.427 1.772a.6.6 0 0 0 .472.73l.698.132a.6.6 0 0 0 .687-.422l1.923-6.64a2 2 0 0 0 .021-1.034z"/></svg>`,
})
export class GtSuchitepequez {
  protected readonly b = inject(GeoIconBase);
}
