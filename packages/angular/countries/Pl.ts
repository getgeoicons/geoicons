// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pl',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.875 7.655-.408-1.837a.5.5 0 0 1 .348-.588l3.268-.95a.5.5 0 0 0 .258-.178l.768-1.01a.5.5 0 0 1 .242-.172l3.372-1.108a.5.5 0 0 1 .637.337l.34 1.19a.5.5 0 0 0 .294.326l.993.401a.5.5 0 0 0 .412-.016l1.135-.57a.5.5 0 0 1 .227-.052l5.7.035a.5.5 0 0 1 .288.094l1.681 1.21a.5.5 0 0 1 .197.302l.835 3.913a.5.5 0 0 1-.14.463l-1.431 1.387a.5.5 0 0 0-.126.518l1.925 5.733a.5.5 0 0 1-.158.547l-2.484 2.025a.5.5 0 0 0-.181.436L20 21.455a.5.5 0 0 1-.72.497l-2.107-1.043a.5.5 0 0 0-.357-.033l-2.58.723a.5.5 0 0 1-.534-.179l-.628-.827a.5.5 0 0 0-.497-.187l-1.029.207a.5.5 0 0 1-.44-.125L8.33 17.88a.5.5 0 0 0-.635-.04l-.698.505a.5.5 0 0 1-.71-.128l-.844-1.27a.5.5 0 0 0-.33-.215l-2.088-.365a.5.5 0 0 1-.398-.617l.388-1.51a.5.5 0 0 0 .007-.22l-.668-3.488a.5.5 0 0 0-.125-.247l-.786-.843a.5.5 0 0 1-.076-.576l.461-.87a.5.5 0 0 0 .047-.342Z"/></svg>`,
})
export class Pl {
  protected readonly b = inject(GeoIconBase);
}
