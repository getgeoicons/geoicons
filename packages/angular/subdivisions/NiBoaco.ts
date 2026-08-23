// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni-boaco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.71 9.376a1 1 0 0 0-.23 1.126l1.313 3.027a1 1 0 0 0 .374.441l1.582 1.025a1 1 0 0 1 .453.915l-.155 2.034a.6.6 0 0 0 .325.58l1.844.942a.6.6 0 0 0 .86-.406l.992-4.562a1 1 0 0 1 1.233-.754l1.88.497a2 2 0 0 0 1.173-.046l6.159-2.159a1 1 0 0 0 .48-.358L22.4 8.342a1 1 0 0 0 .032-1.124L20.87 4.779a1.004 1.004 0 0 0-1.788.202l-.686 1.905a1 1 0 0 1-.472.545l-.3.159a1 1 0 0 1-1.045-.067L13.8 5.56a1 1 0 0 0-.935-.117l-3.85 1.476a4 4 0 0 1-1.183.258l-3.698.23a1 1 0 0 0-.624.271z"/></svg>`,
})
export class NiBoaco {
  protected readonly b = inject(GeoIconBase);
}
