// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-nebraska',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.5 7.05a.3.3 0 0 0-.3.3v6.05a.3.3 0 0 0 .3.3l4.34-.01a.3.3 0 0 1 .3.3v2.65a.3.3 0 0 0 .3.3l15.825.01a.3.3 0 0 0 .257-.456l-.867-1.423a2 2 0 0 1-.292-.978l-.05-1.6a2 2 0 0 0-.156-.715l-1.181-2.795a1 1 0 0 0-.628-.567l-4.285-1.312a1 1 0 0 0-.292-.044z"/></svg>`,
})
export class UsNebraska {
  protected readonly b = inject(GeoIconBase);
}
