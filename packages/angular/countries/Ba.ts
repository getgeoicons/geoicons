// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ba',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m16.326 20.38-.057-.121a2 2 0 0 1 .097-1.884l.726-1.206a.92.92 0 0 1 .872-.442.928.928 0 0 0 1-1.002.942.942 0 0 1 .977-1.02l.897.042a.735.735 0 0 0 .547-1.26l-1.18-1.146a.56.56 0 0 1 .542-.94l.678.19a.825.825 0 0 0 .745-1.435L20.1 8.468a1 1 0 0 1-.212-1.312l1.002-1.574a.899.899 0 0 0-.988-1.352l-1.546.408a1 1 0 0 1-1.122-.468l-.29-.503a1 1 0 0 0-.762-.497L6.928 2.2a2 2 0 0 0-1.716.675l-.048.055a1 1 0 0 1-1.43.08l-.654-.602a1 1 0 0 0-.634-.262l-.153-.007a1 1 0 0 0-1.04 1.047l.051 1.098a2 2 0 0 0 .481 1.209l1.272 1.48a2 2 0 0 1 .459.993l.193 1.226a2 2 0 0 0 .52 1.062l6.581 6.982a1 1 0 0 1 .27.74l-.025.477a1 1 0 0 0 .926 1.052l.533.038a1 1 0 0 1 .636.291l1.628 1.632a.96.96 0 0 0 1.548-1.087Z"/></svg>`,
})
export class Ba {
  protected readonly b = inject(GeoIconBase);
}
