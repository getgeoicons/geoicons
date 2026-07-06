// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-de',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.288 18.822-1.007 2.57a.5.5 0 0 0 .612.66l1.889-.583a.5.5 0 0 1 .412.054l1.89 1.18a.5.5 0 0 0 .334.072l4.727-.663a.5.5 0 0 0 .409-.639l-.234-.783a.5.5 0 0 1 .234-.58l1.123-.63a.5.5 0 0 0 .142-.753l-2.63-3.208a.5.5 0 0 1 .18-.771l4.715-2.158a.5.5 0 0 0 .249-.657l-1.897-4.29a.5.5 0 0 1-.03-.314l.576-2.487a.5.5 0 0 0-.078-.4l-1.51-2.155a.5.5 0 0 0-.647-.152l-3.161 1.711a.5.5 0 0 1-.47.004L11.29 2.9a.5.5 0 0 1-.24-.278l-.34-.965a.5.5 0 0 0-.447-.333l-1.545-.079a.5.5 0 0 0-.47.731l.568 1.086a.5.5 0 0 1-.025.504l-.923 1.418a.5.5 0 0 1-.415.227l-1.858.016a.5.5 0 0 0-.495.533l.172 2.663a.5.5 0 0 1-.155.396l-1.462 1.385a.5.5 0 0 0-.15.434l.947 6.626a.5.5 0 0 0 .385.417l2.095.472a.5.5 0 0 1 .356.67Z"/></svg>`,
})
export class De {
  protected readonly b = inject(GeoIconBase);
}
