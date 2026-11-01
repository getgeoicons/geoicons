// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cf',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.584 18.993-1.931-3.547a3 3 0 0 1-.36-1.24l-.072-1.115a1 1 0 0 1 .158-.607l1.283-1.99a1 1 0 0 1 .73-.452l3.854-.427a.8.8 0 0 0 .558-.324l.787-1.079a.8.8 0 0 1 .504-.315l1.532-.277a2 2 0 0 0 1.342-.91l1.012-1.624a1 1 0 0 1 .84-.47l.659-.006a1 1 0 0 1 .774.356l.744.886a1 1 0 0 1 .223.796l-.123.797a.8.8 0 0 0 .383.81l2.178 1.288a2 2 0 0 1 .474.39l3.44 3.856a.541.541 0 0 1-.503.892l-2.792-.523a2 2 0 0 0-1.11.11l-3.513 1.404a2 2 0 0 1-1.307.062L9.79 14.69a1 1 0 0 0-1.216.603l-.357.934a.8.8 0 0 1-.728.514l-1.542.038a1 1 0 0 0-.952.782l-.284 1.274a.608.608 0 0 1-1.127.159Z"/></svg>`,
})
export class Cf {
  protected readonly b = inject(GeoIconBase);
}
