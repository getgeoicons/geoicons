// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni-jinotega',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.242 16.786a1.5 1.5 0 0 0-.857 1.057l-.32 1.497a1.5 1.5 0 0 0 .643 1.566l2.238 1.472a1 1 0 0 0 1.214-.088l3.877-3.448a1 1 0 0 1 .405-.219l1.074-.289a1 1 0 0 0 .71-.724l.678-2.723a2 2 0 0 1 .693-1.08l1.97-1.573a.6.6 0 0 1 .655-.06l1.238.655a.6.6 0 0 0 .755-.163l1.917-2.477a2 2 0 0 0 .393-.905l.616-3.802a.6.6 0 0 0-.6-.696l-.814.011a.6.6 0 0 1-.606-.554l-.152-1.994a1 1 0 0 0-1.124-.915l-.57.072a1 1 0 0 0-.863.847l-.334 2.277a2 2 0 0 1-.909 1.398L9.34 9.623a1 1 0 0 0-.442.628l-1.069 4.82a1 1 0 0 1-.852.776l-1.377.172a6 6 0 0 0-1.697.473z"/></svg>`,
})
export class NiJinotega {
  protected readonly b = inject(GeoIconBase);
}
