// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-northern-mexico',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.433 7.443-1.636-.749a.817.817 0 0 1 .665-1.491L6.381 6.9a1 1 0 0 0 .402.082l2.865-.014.214-1.083 1.423.06a1 1 0 0 1 .67.299l1.413 1.437a1 1 0 0 1 .215.33l.473 1.183a1 1 0 0 0 .406.481l.309.19a1 1 0 0 0 1.265-.184l.246-.273a1 1 0 0 1 .823-.328l.19.015a1 1 0 0 1 .626.29l.672.671a1 1 0 0 1 .19.265l1.31 2.663.123.273a1 1 0 0 0 .476.492l.278.135q.132.064.274.088l1.556.257-.652 1.426a1 1 0 0 0-.09.379l-.119 3.157-2.296-.602a1 1 0 0 1-.454-.26l-.134-.134a1 1 0 0 1-.29-.63l-.052-.674a1 1 0 0 0-.589-.837l-.913-.408a1 1 0 0 0-.978.09l-.871.604a1 1 0 0 0-.397.563l-.39 1.449a.6.6 0 0 1-.49.437l-1.199.183a.6.6 0 0 1-.559-.219l-1.77-2.213a1 1 0 0 0-.235-.213l-1.706-1.114a1 1 0 0 1-.45-.93l.045-.471a1 1 0 0 0-.396-.893l-1.247-.936a1 1 0 0 1-.157-.147l-2.008-2.33a1 1 0 0 1-.222-.453l-.185-.903a1 1 0 0 0-.563-.708Z"/></svg>`,
})
export class NorthernMexico {
  protected readonly b = inject(GeoIconBase);
}
