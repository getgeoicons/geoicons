// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bh',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.454 16.191.056.351a2 2 0 0 0 .611 1.151l1.388 1.294a3 3 0 0 1 .804 1.257l.655 1.988a.3.3 0 0 0 .53.078l1.032-1.47a2 2 0 0 0 .349-.913l.964-8.166a6 6 0 0 1 .618-2.029l1.711-3.345a1 1 0 0 0 .01-.89l-1.442-2.99a1 1 0 0 0-1.627-.253l-2.231 2.36a1 1 0 0 1-.95.287l-1.468-.337a1 1 0 0 0-.901.24l-.819.753a1 1 0 0 0-.315.853l.196 1.651a5 5 0 0 0 .341 1.315l1.016 2.468a3 3 0 0 1 .006 2.27l-.411 1.012a2 2 0 0 0-.123 1.065ZM7.24 8.904l-.003.533A.817.817 0 0 1 5.6 9.431v-.533a.819.819 0 1 1 1.638.006Z"/></svg>`,
})
export class Bh {
  protected readonly b = inject(GeoIconBase);
}
