// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-north-carolina',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.09 7.948a.3.3 0 0 0-.238.113l-.779.983a1 1 0 0 1-.401.303L1.79 11.366a.6.6 0 0 0-.36.442l-.09.476a.6.6 0 0 0 .613.711l2.255-.09a2 2 0 0 0 .56-.103l1.392-.47c.229-.078.469-.113.71-.105l2.383.082a.6.6 0 0 1 .472.258l.328.47a.6.6 0 0 0 .477.257l1.94.05a.6.6 0 0 1 .412.179l2.275 2.315a.6.6 0 0 0 .51.174l.967-.135a.6.6 0 0 0 .433-.287l.639-1.072a1 1 0 0 1 .697-.474l1.642-.269a1 1 0 0 0 .837-.926l.024-.39a1 1 0 0 1 .486-.798l.688-.41a1 1 0 0 0 .425-1.21l-.602-1.602a.6.6 0 0 0-.557-.39z"/></svg>`,
})
export class UsNorthCarolina {
  protected readonly b = inject(GeoIconBase);
}
