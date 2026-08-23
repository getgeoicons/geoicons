// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-chaguanas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.026 5.244a.6.6 0 0 0-.566-.366l-14.078.303a.6.6 0 0 0-.487.268L3.706 8.753a1 1 0 0 1-.344.32l-1.324.743a.6.6 0 0 0-.298.426l-.439 2.672a.6.6 0 0 0 .518.692l2.566.321a1 1 0 0 1 .58.281l1.503 1.487a1 1 0 0 0 1.143.187l1.301-.638a.6.6 0 0 1 .844.382l.532 1.973a1 1 0 0 0 .476.612l1.246.699a1 1 0 0 0 .82.071l2.915-1.022a2 2 0 0 1 .875-.101l3.87.414a.6.6 0 0 0 .631-.4l.444-1.288a2 2 0 0 0 .104-.799l-.05-.69a.6.6 0 0 0-.606-.557l-.947.011a.6.6 0 0 1-.606-.586l-.027-1.177a.6.6 0 0 1 .334-.552l1.296-.64c.32-.159.593-.4.788-.699l.658-1.006a1 1 0 0 0 .084-.936z"/></svg>`,
})
export class TtChaguanas {
  protected readonly b = inject(GeoIconBase);
}
