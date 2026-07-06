// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m13.86 6.263-6.53-1.54-.082-.012-3.717-.24-.086.001-2.245.242v.206a.5.5 0 0 0 .342.474l2.46.819a.5.5 0 0 1 .301.275l.463 1.065a.5.5 0 0 0 .249.254l2.218 1.024a.5.5 0 0 0 .12.038l2.254.405a.5.5 0 0 1 .235.11l3.172 2.693q.053.046.118.075l2.424 1.097a.5.5 0 0 1 .229.209l2.032 3.585a.5.5 0 0 0 .053.076l1.76 2.081a.5.5 0 0 0 .65.1l2.166-1.365a.5.5 0 0 0 .196-.612l-1.33-3.269a.5.5 0 0 0-.047-.09l-3.37-5.023a.5.5 0 0 0-.14-.139l-3.734-2.47a.5.5 0 0 0-.161-.07Z"/></svg>`,
})
export class Gs {
  protected readonly b = inject(GeoIconBase);
}
