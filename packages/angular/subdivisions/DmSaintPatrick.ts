// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm-saint-patrick',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.13 3.79a1 1 0 0 0-.403 1.005l.037.19a2 2 0 0 1-.159 1.24L9.562 8.411a3 3 0 0 1-.866 1.078l-.5.388c-.308.24-.675.396-1.062.451a2.25 2.25 0 0 0-1.39.763l-1.053 1.23a3 3 0 0 0-.616 1.159l-.239.871a3 3 0 0 0-.08 1.197l.313 2.3c.054.395.196.773.415 1.105.18.271.307.572.377.89l.513 2.316a.6.6 0 0 0 .767.442l.267-.085a.6.6 0 0 0 .42-.563l.006-.447a1 1 0 0 1 .57-.888l.886-.423a1 1 0 0 0 .539-.655l.398-1.559a1 1 0 0 1 .825-.742l.248-.036a3 3 0 0 1 1.634.22l.293.128a1 1 0 0 0 .554.072l2.052-.32a3 3 0 0 0 1.116-.413l.983-.608a1 1 0 0 0 .46-.686l.687-4.128a1 1 0 0 1 .44-.675l.496-.322a1 1 0 0 0 .451-.927l-.12-1.339a4 4 0 0 1 .029-.95l.367-2.442c.041-.273.12-.54.234-.792l.234-.517a.6.6 0 0 0-.007-.509l-.658-1.36a.6.6 0 0 0-.682-.322l-6.08 1.475a2 2 0 0 0-.687.313z"/></svg>`,
})
export class DmSaintPatrick {
  protected readonly b = inject(GeoIconBase);
}
