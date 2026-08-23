// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-british-columbia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M17.67 4.047a.3.3 0 0 0-.3-.297H1.742a.3.3 0 0 0-.254.46l1.033 1.645a.3.3 0 0 0 .325.132l1.597-.388a.6.6 0 0 1 .662.285l1.93 3.363a1 1 0 0 0 .377.374l1.009.567a1 1 0 0 1 .494.694l.062.343a1 1 0 0 1-.066.574l-.46 1.067a1 1 0 0 0 .124 1.002l1.974 2.587a1 1 0 0 1 .201.693l-.053.617a1 1 0 0 0 .279.782l1.5 1.546a3 3 0 0 0 .927.649l.53.237a1 1 0 0 0 1.076-.168l.382-.341a1 1 0 0 1 .673-.256l6.308.04a.3.3 0 0 0 .284-.4l-.492-1.382a2 2 0 0 0-.51-.78l-3.587-3.395a1 1 0 0 1-.313-.718z"/></svg>`,
})
export class CaBritishColumbia {
  protected readonly b = inject(GeoIconBase);
}
