// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-northwest-territories',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.831 15.76a1 1 0 0 1 .597-.936l2.196-.965a1 1 0 0 1 .738-.027l1.847.659a.6.6 0 0 1 .398.581l-.022.82a.8.8 0 0 0 .315.66l2.67 2.03a2 2 0 0 0 .763.357l2.383.547a.6.6 0 0 1 .466.587l-.006 2.125a.6.6 0 0 1-.605.598l-6.644-.046a1 1 0 0 1-.745-.34l-4.074-4.64a1 1 0 0 1-.248-.64z"/></svg>`,
})
export class CaNorthwestTerritories {
  protected readonly b = inject(GeoIconBase);
}
