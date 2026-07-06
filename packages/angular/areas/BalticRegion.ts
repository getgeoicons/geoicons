// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-baltic-region',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.434 12.616.406 4.213a1 1 0 0 0 .71.863l1.852.55a1 1 0 0 1 .707 1.088l-.12.925a1 1 0 0 0 .172.704l.914 1.301a1 1 0 0 0 1.024.405l3.54-.744a1 1 0 0 0 .79-1.083l-.082-.781a1 1 0 0 1 .442-.939l1.053-.697a1 1 0 0 0 .448-.877l-.03-.67a1 1 0 0 1 .876-1.036l.87-.109a1 1 0 0 0 .718-.451l.58-.902a1 1 0 0 0 .071-.949L17.767 9.83a1 1 0 0 1 .067-.94l.321-.512a1 1 0 0 0-.018-1.092L16.71 5.178a.9.9 0 0 1 .767-1.402l.337.008a.6.6 0 0 0 .566-.362l.313-.725a.6.6 0 0 0-.462-.831l-4.208-.63a1 1 0 0 0-.472.043l-1.782.61a1 1 0 0 0-.236.118l-1.522 1.03a1 1 0 0 0-.39 1.135l.454 1.412a1 1 0 0 0 .604.63l.502.187a1 1 0 0 1 .651.958l-.054 2.597a1 1 0 0 1-.353.742l-.495.42a1 1 0 0 1-1.15.101l-.343-.2a1 1 0 0 1-.388-.408l-.916-1.787a.6.6 0 0 0-.757-.283l-.788.316a1 1 0 0 0-.501.44l-1.531 2.735a1 1 0 0 0-.123.584Z"/></svg>`,
})
export class BalticRegion {
  protected readonly b = inject(GeoIconBase);
}
