// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-district-of-columbia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.62 22.146a.3.3 0 0 0 .512.19l10.172-10.204a.3.3 0 0 0 0-.424L9.975 1.41a.3.3 0 0 0-.423 0L3.661 7.237a.3.3 0 0 0-.037.381l1.678 2.475a1 1 0 0 0 .565.404l1.363.372a1 1 0 0 1 .573.416l2.627 4.01a1 1 0 0 1 .164.562l-.01.655a.6.6 0 0 1-.422.564l-.44.137a.6.6 0 0 0-.421.617z"/></svg>`,
})
export class UsDistrictOfColumbia {
  protected readonly b = inject(GeoIconBase);
}
