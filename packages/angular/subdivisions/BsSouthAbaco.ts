// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-south-abaco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M14.39 2.194a1 1 0 0 0-.611.468l-1.175 2.042a1 1 0 0 0-.055.886l.807 1.921a1 1 0 0 1-.278 1.152l-2.365 1.992q-.628.53-1.335.95l-3.516 2.089a.6.6 0 0 0-.292.474l-.044.641a.6.6 0 0 0 .488.63l4.15.776a1 1 0 0 1 .757.644l.18.499a1 1 0 0 1-.008.697l-.177.46a.76.76 0 0 0 .21.842 8.3 8.3 0 0 1 1.689 2.022l.545.916a.6.6 0 0 0 .812.214l.623-.354a.6.6 0 0 0 .303-.495l.123-2.781a7 7 0 0 0-.067-1.322l-.542-3.709a3 3 0 0 1 .175-1.53l.36-.916a3 3 0 0 0 .207-1.084l.016-3.977a2 2 0 0 1 .463-1.272l2.452-2.946a.511.511 0 0 0-.524-.822z"/></svg>`,
})
export class BsSouthAbaco {
  protected readonly b = inject(GeoIconBase);
}
