// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ms',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.966 4.847-3.664 7.078a.5.5 0 0 0-.047.323l.29 1.53a.5.5 0 0 1-.102.405L5.48 15.39a.5.5 0 0 0 .124.735l1.813 1.143a.5.5 0 0 1 .17.18l1.704 3.066a.5.5 0 0 0 .15.167l2.872 2.01a.5.5 0 0 0 .346.088l3.577-.424a.5.5 0 0 0 .315-.165l2.068-2.331a.5.5 0 0 0 .045-.604l-.95-1.466a.5.5 0 0 1-.08-.308l.436-6.145a.5.5 0 0 0-.232-.458l-2.169-1.372a.5.5 0 0 1-.19-.22l-1.822-4.137a.5.5 0 0 1-.043-.202V2.663a.5.5 0 0 0-.354-.478l-2.591-.789a.5.5 0 0 0-.646.479v2.743a.5.5 0 0 1-.056.23Z"/></svg>`,
})
export class Ms {
  protected readonly b = inject(GeoIconBase);
}
