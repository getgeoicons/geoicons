// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-siparia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.852 11.586a.6.6 0 0 0-.68-.343L6.63 12.266a1 1 0 0 0-.678.535l-.26.53a1 1 0 0 1-.614.518l-2.598.768a1 1 0 0 0-.441.27l-.604.635a.79.79 0 0 0 .434 1.32l.497.09a1 1 0 0 0 .613-.086l3.344-1.626a1 1 0 0 1 .61-.086l1.072.187a2 2 0 0 0 .564.018l3.492-.386a1 1 0 0 1 .587.115l1.862 1.01a1 1 0 0 0 .748.084l2.172-.613q.25-.07.51-.075l2.357-.039a.6.6 0 0 0 .585-.68l-.177-1.295a.6.6 0 0 1 .431-.659l1.016-.286a.6.6 0 0 0 .435-.53l.185-2.331a.6.6 0 0 0-.268-.549l-2.055-1.353a.6.6 0 0 0-.389-.096l-1.934.192a1 1 0 0 1-.48-.07l-1.568-.646a.87.87 0 0 0-1.202.817l.014 1.04a2 2 0 0 1-.082.595l-.237.798a2 2 0 0 1-.963 1.19l-.849.462a.6.6 0 0 1-.835-.285z"/></svg>`,
})
export class TtSiparia {
  protected readonly b = inject(GeoIconBase);
}
