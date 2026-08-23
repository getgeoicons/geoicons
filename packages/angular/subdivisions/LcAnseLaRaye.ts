// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lc-anse-la-raye',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M16.087 22.368a.6.6 0 0 0 .865-.04l2.379-2.716a1 1 0 0 0 .08-1.213l-.455-.683a2 2 0 0 1-.282-1.568l1.068-4.53a1 1 0 0 0-.156-.806l-1.763-2.5a.6.6 0 0 0-.82-.156l-.915.601a.6.6 0 0 1-.838-.184L13.226 5.32a1 1 0 0 0-.55-.426l-2.344-.735a1 1 0 0 1-.669-.701l-.46-1.764a.6.6 0 0 0-.636-.446l-.024.002a.6.6 0 0 0-.446.27L4.435 7.123a.6.6 0 0 0 .1.774l5.09 4.596q.076.07.165.121l1.826 1.069a2 2 0 0 1 .935 1.264l.407 1.715c.071.302.213.584.413.823l1.754 2.093a1 1 0 0 1 .233.674l-.035 1.11a.6.6 0 0 0 .186.453z"/></svg>`,
})
export class LcAnseLaRaye {
  protected readonly b = inject(GeoIconBase);
}
