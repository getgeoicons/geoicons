// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kn-saint-george-gingerland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.725 22.528 2.373 1.658a.3.3 0 0 1 .36-.353l9.27 2.13a2 2 0 0 1 .84.418l1.462 1.23a1 1 0 0 0 .816.22l1.172-.205a2 2 0 0 1 1.041.096l4.104 1.524a.3.3 0 0 1 .175.39l-.41 1.06a1.6 1.6 0 0 0-.006 1.143c.184.494.201 1.034.05 1.54l-.04.133a2.83 2.83 0 0 1-.868 1.33l-.087.076a3 3 0 0 0-1.019 1.857l-.435 3.077a3 3 0 0 1-.804 1.654l-2.063 2.155a1 1 0 0 1-.882.296l-1.794-.29a3 3 0 0 0-2.031.394l-1.09.658a2 2 0 0 1-.774.272l-2.302.3a.3.3 0 0 1-.333-.235Z"/></svg>`,
})
export class KnSaintGeorgeGingerland {
  protected readonly b = inject(GeoIconBase);
}
