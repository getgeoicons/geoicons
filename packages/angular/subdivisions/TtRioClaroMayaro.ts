// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-rio-claro-mayaro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.781 21.947a.6.6 0 0 0 .815.548l5.542-2.121q.159-.061.29-.172l1.551-1.317a.72.72 0 0 1 1.152.337.72.72 0 0 0 .897.475l.075-.022a.81.81 0 0 0 .545-.973c-.748-3.064-.782-5.327-.253-9.357a.434.434 0 0 1 .534-.365.725.725 0 0 0 .89-.6l.018-.123a.84.84 0 0 0-.855-.96l-.342.01a.6.6 0 0 1-.536-.301c-.925-1.636-1.355-2.718-1.83-4.448a.6.6 0 0 0-.478-.437l-5.109-.887a1 1 0 0 0-.393.01l-3.42.78a1 1 0 0 0-.616.43l-.916 1.411a.6.6 0 0 0 .362.91l.327.08a.6.6 0 0 1 .453.662L6.141 8.1a1 1 0 0 1-.522.752l-.765.406a1 1 0 0 0-.44 1.303l.288.622a1 1 0 0 0 .86.579l1.45.07a.6.6 0 0 1 .57.587z"/></svg>`,
})
export class TtRioClaroMayaro {
  protected readonly b = inject(GeoIconBase);
}
