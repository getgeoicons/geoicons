// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sd',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m20.535 3.566-15.37.04.08 2.792-1.335.04.04 5.865-1.091.063a.5.5 0 0 0-.44.322l-1.14 3.006a.5.5 0 0 0 .024.408l1.884 3.628a.5.5 0 0 0 .604.243l2.087-.706a.5.5 0 0 1 .587.212l.376.615a.5.5 0 0 0 .527.229l3.66-.754a.5.5 0 0 1 .243.01l1.409.42a.5.5 0 0 0 .485-.116l1.078-1.015a.5.5 0 0 0 .153-.425l-.116-.95a.5.5 0 0 1 .396-.55l.652-.133a.5.5 0 0 1 .587.373l.777 3.25 2.846-4.032a.5.5 0 0 0 .085-.206l.877-5.261a.5.5 0 0 1 .208-.328L22.8 9.147l-1.5-1.17a.5.5 0 0 1-.187-.324z"/></svg>`,
})
export class Sd {
  protected readonly b = inject(GeoIconBase);
}
