// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-san-juan-laventille',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.38 11.421a.6.6 0 0 0 .219.875l1.072.554a.6.6 0 0 1 .303.694l-.612 2.188a1 1 0 0 0 .06.698l2.617 5.507a.6.6 0 0 0 1.009.118l.876-1.088a.7.7 0 0 1 .506-.257l1.366-.062a.6.6 0 0 0 .56-.724l-1.015-4.8a1 1 0 0 1-.016-.314l.318-2.923a1 1 0 0 0-.045-.423l-.93-2.807a1 1 0 0 1 .434-1.172l.498-.3a1 1 0 0 1 .656-.132l3.419.489a.6.6 0 0 0 .685-.594V4.47a1 1 0 0 1 .219-.625l.968-1.21a.6.6 0 0 0-.195-.91l-.63-.322a.6.6 0 0 0-.709.121l-1.46 1.538a1 1 0 0 1-.591.302l-1.378.188a1 1 0 0 0-.627.342l-.765.897a1 1 0 0 1-1.1.292L9.246 4.42a1 1 0 0 0-.988.18l-.98.836a1 1 0 0 0-.35.766l.013 2.648a1 1 0 0 1-.177.574z"/></svg>`,
})
export class TtSanJuanLaventille {
  protected readonly b = inject(GeoIconBase);
}
