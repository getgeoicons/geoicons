// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-clarendon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.109 1.74a.3.3 0 0 0-.232.435l3.686 7.2a1.5 1.5 0 0 1 .16.818l-.12 1.335a1.5 1.5 0 0 0 .132.76l.936 2.035a.6.6 0 0 1-.42.838l-1.111.235a.533.533 0 0 0-.199.956l7.974 5.67q.204.146.436.236l.54.21a1.68 1.68 0 0 0 1.6-.214l.072-.053a1.53 1.53 0 0 0-.043-2.495l-.529-.362a1 1 0 0 1-.4-1.087l.718-2.65a3 3 0 0 0 .076-1.199l-.735-5.275a3 3 0 0 0-.094-.436L15.86 2.944a1 1 0 0 0-.77-.7l-4.96-.956a3 3 0 0 0-.92-.033z"/></svg>`,
})
export class JmClarendon {
  protected readonly b = inject(GeoIconBase);
}
