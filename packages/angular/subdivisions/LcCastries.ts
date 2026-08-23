// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lc-castries',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.179 10.868a1 1 0 0 0 .494 1.067l1.3.724a1 1 0 0 1 .378.371l.912 1.569a.6.6 0 0 0 .86.191l.6-.415a.6.6 0 0 1 .91.302l.464 1.379a2 2 0 0 1 .075.98l-.672 3.89a.8.8 0 0 0 .122.58l.406.608a.8.8 0 0 0 1.129.208l.563-.4a.8.8 0 0 0 .334-.592l.222-2.93q.014-.172.084-.331l2.433-5.454q.06-.134.079-.279l.99-7.632a.6.6 0 0 0-.668-.673l-1.058.131a1 1 0 0 1-.985-.485l-1.033-1.755a.6.6 0 0 0-.972-.088l-.948 1.1a1 1 0 0 1-.767.347l-1.339-.012a1 1 0 0 0-.912.57l-.324.68a2 2 0 0 0-.19 1.01l.147 1.936a.6.6 0 0 1-.788.614l-.57-.19a.6.6 0 0 0-.778.454z"/></svg>`,
})
export class LcCastries {
  protected readonly b = inject(GeoIconBase);
}
