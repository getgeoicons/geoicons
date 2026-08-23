// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-nord',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.728 3.11a.6.6 0 0 0-.376.729l.404 1.436a3 3 0 0 0 .38.835l3.057 4.655a3 3 0 0 0 .683.734L7.64 12.85a.8.8 0 0 0 1.123-.15l.875-1.15a1 1 0 0 1 1.248-.286l.612.31a1 1 0 0 1 .547.93l-.084 2.227a.6.6 0 0 0 .55.621l1.56.127a1 1 0 0 1 .92.982l.042 2.882a1 1 0 0 0 .344.74l1.864 1.62a.8.8 0 0 0 .903.1l4.006-2.152a.6.6 0 0 0 .176-.914l-2.576-3.07a2 2 0 0 1-.373-.678l-.99-3.102a1 1 0 0 1 .19-.95l.922-1.09c.223-.265.374-.582.438-.922l.255-1.353a1 1 0 0 0-.576-1.099l-3.708-1.65a1 1 0 0 0-.803-.005l-2.293.988a1 1 0 0 1-1.178-.295L10.62 4.24a1 1 0 0 0-.676-.371L7.815 3.64a2 2 0 0 1-.973-.377L5.464 2.248a1 1 0 0 0-.928-.136z"/></svg>`,
})
export class HtNord {
  protected readonly b = inject(GeoIconBase);
}
