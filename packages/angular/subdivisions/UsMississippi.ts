// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-mississippi',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.97 9.71a4 4 0 0 0 .26 1.145l.696 1.799a1 1 0 0 1-.126.953L6.11 15.91a3 3 0 0 0-.542 1.294l-.226 1.392a.6.6 0 0 0 .594.696l6.542-.018-.387 1.59a.6.6 0 0 0 .063.44l.658 1.144a.6.6 0 0 0 .604.295l3.617-.51a.6.6 0 0 0 .516-.617l-.252-6.671a1 1 0 0 1 .005-.146l1.395-12.887a.6.6 0 0 0-.593-.665l-7.674-.044a1 1 0 0 0-.9.551L7.033 6.721a2 2 0 0 0-.207 1.049z"/></svg>`,
})
export class UsMississippi {
  protected readonly b = inject(GeoIconBase);
}
