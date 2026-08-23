// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kn-saint-john-figtree',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.52 9.822-3.086.415a.3.3 0 0 0-.196.482l3.143 4.01a2 2 0 0 1 .425 1.31l-.034.878a.6.6 0 0 0 .196.468l4.641 4.213a2 2 0 0 0 .67.402l1.822.653a1 1 0 0 0 .796-.052l.896-.463a1 1 0 0 1 .583-.104l.884.11a1 1 0 0 0 .903-.364l.67-.834a1 1 0 0 1 .45-.317l3.553-1.237a.3.3 0 0 0 .195-.345L18.429 1.964a.3.3 0 0 0-.553-.089L14.222 8.17a1 1 0 0 1-.84.498l-2.02.049a2 2 0 0 0-.768.174l-1.933.864a2 2 0 0 1-.97.169l-1.541-.12a3 3 0 0 0-.63.018Z"/></svg>`,
})
export class KnSaintJohnFigtree {
  protected readonly b = inject(GeoIconBase);
}
