// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-andros',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m6.283 10.35 2.993 2.263a9 9 0 0 1 2.044 2.161l1.518 2.259a7.8 7.8 0 0 1 1.325 4.272l.002.131a.946.946 0 0 0 .78.922l1.706.303a1 1 0 0 0 1.094-.59l.058-.136a5 5 0 0 0 .403-2.179l-.024-.586a5 5 0 0 0-.217-1.265l-.39-1.267a5 5 0 0 0-.913-1.703l-.248-.301a3 3 0 0 1-.64-1.414l-.715-4.326a2 2 0 0 0-.444-.963l-.917-1.087a5 5 0 0 1-.697-1.086l-.148-.314a5 5 0 0 1-.472-1.863l-.016-.287a2 2 0 0 0-.286-.927l-.469-.774a.8.8 0 0 0-.697-.385l-1.49.025a.6.6 0 0 0-.528.865l.24.486A3 3 0 0 1 9.42 4.3l-.076.586a3 3 0 0 1-.523 1.341L7.8 7.673a7 7 0 0 1-.638.78l-.954 1.006a.6.6 0 0 0 .074.892Z"/></svg>`,
})
export class BsAndros {
  protected readonly b = inject(GeoIconBase);
}
