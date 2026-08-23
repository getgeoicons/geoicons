// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-sud',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.955 9.184a.698.698 0 0 0-.318 1.293l1.21.74a1 1 0 0 0 .64.14l1.59-.19a2 2 0 0 1 1.283.28l1.112.683a3 3 0 0 1 1.133 1.253l.756 1.564a1 1 0 0 0 .914.565l.924-.012a.594.594 0 0 0 .41-1.018l-.379-.372a.967.967 0 0 1 .391-1.612l.305-.095c.89-.277 1.813-.428 2.744-.45l1.256-.029c.623-.014 1.247.03 1.863.132l3.906.646a.6.6 0 0 0 .645-.838l-.717-1.591a1 1 0 0 0-.973-.588l-5.472.331a.6.6 0 0 1-.528-.254l-.563-.803a.6.6 0 0 0-.571-.25l-3.146.422a3 3 0 0 1-.813-.003l-1.868-.26a3 3 0 0 0-.613-.023z"/></svg>`,
})
export class HtSud {
  protected readonly b = inject(GeoIconBase);
}
