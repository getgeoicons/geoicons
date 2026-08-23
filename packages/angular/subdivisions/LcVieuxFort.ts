// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lc-vieux-fort',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.55 1.243a.42.42 0 0 0-.322.377l-.182 2.546a1 1 0 0 0 .118.548L8.67 9.332a3 3 0 0 1 .338 1.814l-.627 4.87a1 1 0 0 0 .073.522l.764 1.784a1 1 0 0 0 .888.605l1.815.058c.267.008.526.098.742.256l.073.055a1.072 1.072 0 0 1 .138 1.606l-.333.346a.774.774 0 0 0 .435 1.302l.866.14a3 3 0 0 0 1.351-.093l.256-.078a.82.82 0 0 0 .28-1.417l-.205-.168a1.5 1.5 0 0 1-.348-1.914l2.558-4.425a1 1 0 0 0 .066-.864l-.572-1.47a4 4 0 0 0-.751-1.221L9.613 3.398a4 4 0 0 0-.626-.565L6.89 1.312a.42.42 0 0 0-.34-.07Z"/></svg>`,
})
export class LcVieuxFort {
  protected readonly b = inject(GeoIconBase);
}
