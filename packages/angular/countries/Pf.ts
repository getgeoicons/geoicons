// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pf',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.379 9.545 2.013 8.407a1 1 0 0 1-.296-.417l-.07-.187A1 1 0 0 1 2.46 6.46l2.209-.272a1 1 0 0 1 .825.281l.046.046a1 1 0 0 1 .154 1.226L4.75 9.314a.915.915 0 0 1-1.37.231Zm6.106 1.202-.062-1.425a1 1 0 0 1 .403-.846l.913-.678a1 1 0 0 1 .208-.118l1.642-.69a1 1 0 0 1 .59-.058l1.521.314a1 1 0 0 1 .166.05l1.876.742a1 1 0 0 1 .5.432l.724 1.264a1 1 0 0 1 .11.706l-.168.792a1 1 0 0 0-.018.288l.073.907a1 1 0 0 0 .862.91l1.135.154q.107.015.207.051l1.494.544a1 1 0 0 1 .283.16l.48.384a1 1 0 0 1 .376.78v1.047a1 1 0 0 1-.244.654l-.267.308a1 1 0 0 1-.977.32l-1.505-.34a1 1 0 0 1-.458-.242l-.906-.838a1 1 0 0 1-.219-.293l-.574-1.17a1 1 0 0 0-1.126-.532l-2.495.585a1 1 0 0 1-.563-.03l-2.394-.85a1 1 0 0 1-.598-.581l-.922-2.384a1 1 0 0 1-.067-.317Z"/></svg>`,
})
export class Pf {
  protected readonly b = inject(GeoIconBase);
}
