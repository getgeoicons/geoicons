// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-great-victoria-desert',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.13 13.585 1.678 1.172a.6.6 0 0 0 .814-.12l1.935-2.448a1 1 0 0 1 .785-.38h2.176q.173 0 .335.058l6.45 2.3a1 1 0 0 1 .48.364l1.576 2.222a1 1 0 0 0 .554.387l3.887 1.056-.333-2.124a1 1 0 0 0-.439-.68l-3.694-2.43 2.413-.747a.6.6 0 0 0 .41-.69l-.209-1.051a1 1 0 0 0-.338-.571l-1.761-1.475a2 2 0 0 0-.927-.434l-5.97-1.086a2 2 0 0 0-1.304.206L8.022 8.522a1 1 0 0 1-1.096-.1L4.51 6.496a1 1 0 0 0-1.465.242L1.405 9.29a1 1 0 0 0-.147.694l.456 2.934a1 1 0 0 0 .416.666Z"/></svg>`,
})
export class GreatVictoriaDesert {
  protected readonly b = inject(GeoIconBase);
}
