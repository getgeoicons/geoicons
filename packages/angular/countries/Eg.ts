// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-eg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M17.566 22.089H2.59a.5.5 0 0 1-.5-.502l.045-14.52a.5.5 0 0 0-.028-.165L1.5 5.164a.5.5 0 0 1 .023-.383l.51-1.045a.5.5 0 0 0 .031-.353l-.3-1.078a.5.5 0 0 1 .09-.446l.351-.442a.5.5 0 0 1 .449-.185l2.861.33a.5.5 0 0 1 .102.023L9.863 3.01a.5.5 0 0 0 .373-.022l3.282-1.555a.5.5 0 0 1 .402-.012l2.688 1.088a.5.5 0 0 0 .288.027l2.467-.503a.5.5 0 0 1 .574.332l1.158 3.475a.5.5 0 0 1 .006.298l-.764 2.632a.5.5 0 0 1-.922.095l-1.94-3.664a.5.5 0 0 0-.842-.065l-.28.376a.5.5 0 0 0-.044.53l5.846 11.255q.038.073.05.155l.319 2.07a.5.5 0 0 1-.176.463l-3.145 2.593a.5.5 0 0 1-.568.048l-.82-.472a.5.5 0 0 0-.249-.066Z"/></svg>`,
})
export class Eg {
  protected readonly b = inject(GeoIconBase);
}
