// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-louisiana',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M13.68 2.428a.6.6 0 0 0-.58-.457L1.502 1.896a.3.3 0 0 0-.302.3l.006 4.529a1 1 0 0 0 .09.413l2.047 4.498a1 1 0 0 1 .05.692l-1.445 4.99a.6.6 0 0 0 .636.764l1.54-.154a4 4 0 0 1 1.528.143l2.627.774c.353.104.718.159 1.085.163l1.89.021a1 1 0 0 1 .682.28l1.081 1.042a1 1 0 0 0 .914.255l3.783-.85a1 1 0 0 1 .756.131l2.508 1.594a1 1 0 0 0 1.452-.441l.023-.054a1 1 0 0 0-.38-1.248l-1.536-.972a1 1 0 0 1-.462-.924l.133-1.682a1 1 0 0 0-.224-.714l-.916-1.113a1 1 0 0 1-.193-.894l.34-1.272a.3.3 0 0 0-.29-.378h-6.858a.6.6 0 0 1-.578-.76l.814-2.934a1 1 0 0 1 .152-.318l1.731-2.402a.6.6 0 0 0 .096-.494z"/></svg>`,
})
export class UsLouisiana {
  protected readonly b = inject(GeoIconBase);
}
