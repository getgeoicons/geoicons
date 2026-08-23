// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-north-andros',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.723 18.133a1 1 0 0 0 .995-.848l.064-.417a1 1 0 0 0 .007-.251l-.088-.882a2 2 0 0 0-.576-1.217l-2.081-2.081a11 11 0 0 1-1.666-2.137l-1.375-2.303a1 1 0 0 1-.075-.87l.664-1.73a1 1 0 0 0-.032-.791l-1.396-2.909a.6.6 0 0 0-.755-.3l-1.945.74a1 1 0 0 1-.486.056L9.912 1.92a.6.6 0 0 0-.591.906l1.367 2.254a1 1 0 0 1 .135.66l-.465 3.25a2 2 0 0 1-.4.943l-3.828 4.93a1 1 0 0 1-.466.332l-2.362.808a1 1 0 0 0-.562 1.41l.274.522c.203.387.488.725.834.99l4.796 3.668a1 1 0 0 0 .608.206h.361a1 1 0 0 0 .71-.296l1.237-1.248a8 8 0 0 1 1.822-1.375l1.05-.58a8 8 0 0 1 2.326-.844l.947-.186a8 8 0 0 1 1.592-.148z"/></svg>`,
})
export class BsNorthAndros {
  protected readonly b = inject(GeoIconBase);
}
