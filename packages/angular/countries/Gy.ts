// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gy',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.783 22.511 3.556-1.882a1 1 0 0 1 .544-.113l1.385.106a.6.6 0 0 0 .555-.915l-1.787-2.87a1 1 0 0 0-.515-.414l-.965-.343a1 1 0 0 1-.538-.453l-.346-.617a2 2 0 0 1-.127-1.687l.366-.966a1 1 0 0 1 .607-.59l.93-.324a1 1 0 0 0 .659-.78l.271-1.631a1 1 0 0 0-.336-.925l-1.65-1.409a1 1 0 0 0-.536-.233l-.658-.075a1 1 0 0 1-.887-.994v-.569a1 1 0 0 0-.363-.77L9.902 1.538a.6.6 0 0 0-.795.028L7.524 3.07a1 1 0 0 0-.152 1.267l.104.161a1 1 0 0 1-.481 1.475l-1.14.439a1 1 0 0 0-.592.622l-.498 1.522a.6.6 0 0 0 .132.597l1.268 1.356a1 1 0 0 0 .73.318h.833a1 1 0 0 1 .968 1.253l-.073.278a1 1 0 0 0 .302 1l.844.752a1 1 0 0 1 .238 1.175l-.894 1.887a2 2 0 0 0-.14 1.31l.385 1.651a2 2 0 0 0 .787 1.175l1.59 1.133a1 1 0 0 0 1.048.07Z"/></svg>`,
})
export class Gy {
  protected readonly b = inject(GeoIconBase);
}
