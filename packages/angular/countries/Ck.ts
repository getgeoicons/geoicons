// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ck',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.45 2.43a1.23 1.23 0 1 1-2.46 0 1.23 1.23 0 0 1 2.46 0Zm2.109 15.856a1.312 1.312 0 1 1-2.624 0 1.312 1.312 0 0 1 2.624 0ZM10.09 4.814a1.267 1.267 0 1 1-2.534 0 1.267 1.267 0 0 1 2.534 0Zm8.731 16.691a1.295 1.295 0 1 1-2.59 0 1.295 1.295 0 0 1 2.59 0ZM17.336 6.159l-2.285 1.697a1 1 0 0 0-.185 1.428l.06.075a1 1 0 0 0 1.363.19l1.503-1.075 1.888 1.732a1 1 0 0 0 1.3.045l.128-.102a1 1 0 0 0 .063-1.51l-2.553-2.405a1 1 0 0 0-1.282-.075Z"/></svg>`,
})
export class Ck {
  protected readonly b = inject(GeoIconBase);
}
