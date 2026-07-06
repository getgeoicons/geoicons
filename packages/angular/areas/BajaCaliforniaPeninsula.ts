// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-baja-california-peninsula',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.243 1.613 5.74 1.2l1.968 6.17a1 1 0 0 0 .228.385l1.397 1.468a1 1 0 0 1-.327 1.606l-.97.422L9.203 13a1 1 0 0 0 .32.304l2.305 1.375q.171.103.29.264l.48.648a1 1 0 0 1 .178.787l-.241 1.231a1 1 0 0 0 .285.911l2.247 2.177a1 1 0 0 1 .196.265l.331.652a1 1 0 0 0 1.574.278l.453-.423a1 1 0 0 0 .134-1.309l-1.742-2.46a1 1 0 0 1-.14-.28l-1.158-3.735a1 1 0 0 0-.086-.198l-3.776-6.64a1 1 0 0 1-.124-.605z"/></svg>`,
})
export class BajaCaliforniaPeninsula {
  protected readonly b = inject(GeoIconBase);
}
