// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-hawaii',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.718 10.428a4 4 0 0 0 .35 1.184l1.698 3.583a3 3 0 0 1 .268 1.643l-.341 2.833a1 1 0 0 0 .202.731l.219.283c.254.328.573.6.938.799l1.932 1.051a.6.6 0 0 0 .79-.2l1.566-2.4a3 3 0 0 1 .943-.918l1.982-1.217a3 3 0 0 1 1.452-.441l1.048-.041a2 2 0 0 0 .926-.269l1.753-1.018q.21-.122.4-.277l1.617-1.33a1 1 0 0 0-.023-1.563l-.738-.572a1 1 0 0 1-.307-.396l-.489-1.139a1 1 0 0 0-.77-.594l-.35-.052a1 1 0 0 1-.852-.969l-.02-1.01a1 1 0 0 0-.312-.704L15.458 6.34a5 5 0 0 0-1.582-1.015L9.457 3.552a5 5 0 0 1-.885-.463L6.405 1.664a1 1 0 0 0-1.282.155l-.095.103a1 1 0 0 0-.177 1.097l.977 2.135a1 1 0 0 1-.202 1.123L2.921 8.982a1 1 0 0 0-.284.84z"/></svg>`,
})
export class UsHawaii {
  protected readonly b = inject(GeoIconBase);
}
