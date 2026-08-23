// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-guantanamo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.811 9.866a1 1 0 0 0-.343.68l-.1 1.3a1 1 0 0 0 .154.613l.474.744a1 1 0 0 1 .013 1.055l-.403.666a1 1 0 0 0 .15 1.226l1.323 1.317a.8.8 0 0 0 .628.23l4.683-.371a2 2 0 0 0 1.147-.479l1.4-1.204a2 2 0 0 1 1.229-.483l7.707-.29a2 2 0 0 0 1.339-.585l1.148-1.147a1 1 0 0 0 .285-.58l.073-.575a1 1 0 0 0-.459-.974l-.797-.502a1 1 0 0 0-.738-.132l-.998.209a2 2 0 0 1-1.056-.065l-1.32-.451a2 2 0 0 1-1.019-.784l-.621-.933a3 3 0 0 0-.717-.751l-1.248-.92a.6.6 0 0 0-.881.191l-.597 1.076a1 1 0 0 1-1.003.507l-4.5-.582a1 1 0 0 0-.902.359l-.268.328a1 1 0 0 1-1.176.283l-.365-.16a1 1 0 0 0-1.056.16z"/></svg>`,
})
export class CuGuantanamo {
  protected readonly b = inject(GeoIconBase);
}
