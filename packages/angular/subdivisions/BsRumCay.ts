// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-rum-cay',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m10.537 17.604-.373-1.257a1 1 0 0 1 .615-1.224l6.773-2.478a4 4 0 0 1 1.815-.22l1.967.218a1 1 0 0 1 .821.628l.316.803a3 3 0 0 1 .145 1.714l-.378 1.8a1 1 0 0 1-.505.676l-1.863 1a1 1 0 0 1-1.035-.053l-2.245-1.524a1 1 0 0 0-.743-.156l-4.17.772a1 1 0 0 1-1.14-.699ZM2.713 9.208 1.594 7.486a1 1 0 0 1 .06-1.17l.89-1.109a1 1 0 0 1 1.384-.17l.896.68a1 1 0 0 1 .279 1.264L3.954 9.152a.72.72 0 0 1-1.24.056Z"/></svg>`,
})
export class BsRumCay {
  protected readonly b = inject(GeoIconBase);
}
