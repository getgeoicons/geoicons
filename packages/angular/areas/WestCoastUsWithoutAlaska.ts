// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-west-coast-us-without-alaska',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m14.243 22.753-1.847-.19a.6.6 0 0 1-.538-.575l-.01-.296a1 1 0 0 0-.292-.668l-1.004-1.009a1 1 0 0 0-.254-.185l-1.01-.516a.6.6 0 0 1-.316-.415l-1.478-7.256a1 1 0 0 1 .167-.783l.442-.616a1 1 0 0 0 .188-.583V8.476a1 1 0 0 1 .129-.491l.812-1.441a1 1 0 0 0 .066-.141l.71-1.901a1 1 0 0 0 .06-.295l.108-1.924a1 1 0 0 1 .794-.924l.537-.112a1 1 0 0 1 .453.011l4.633 1.192-.521 2.689a1 1 0 0 0 .005.404l.166.76a1 1 0 0 1-.148.774L15.37 8.15a1 1 0 0 0-.153.37l-.479 2.475-2.719-.648-.877 3.425 4.259 6.52a.6.6 0 0 1 .057.544l-.594 1.537a.6.6 0 0 1-.621.38Z"/></svg>`,
})
export class WestCoastUsWithoutAlaska {
  protected readonly b = inject(GeoIconBase);
}
