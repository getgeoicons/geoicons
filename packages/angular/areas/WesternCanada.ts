// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-western-canada',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.723 9.053 1.2 3.545c2.748 3.526 11.87 6.345 18.257 6.65.246.012.48.11.657.28l2.304 2.208a.6.6 0 0 1 .067.79l-2.327 3.137a1 1 0 0 0-.197.596v2.636a.597.597 0 0 1-.615.596c-8.32-.27-14.078-2.236-16.185-3.315a.93.93 0 0 1-.371-.35l-1.349-2.217a1 1 0 0 1-.094-.836l1.361-4.085a1 1 0 0 0 .015-.582Z"/></svg>`,
})
export class WesternCanada {
  protected readonly b = inject(GeoIconBase);
}
