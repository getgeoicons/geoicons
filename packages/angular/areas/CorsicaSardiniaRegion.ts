// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-corsica-sardinia-region',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.308 22.07-.57-.523a1 1 0 0 1-.283-1.019l.538-1.827q.048-.166.039-.339l-.125-2.182a1 1 0 0 0-.21-.558L8.69 14.33a1 1 0 0 1-.184-.844l.058-.247a1 1 0 0 1 1.2-.745l.747.174a1 1 0 0 0 .953-.288l.751-.795a1 1 0 0 1 1.002-.275l.575.165a1 1 0 0 1 .633.542l.964 2.09a1 1 0 0 1-.037.912l-.61 1.078a1 1 0 0 0-.129.49l-.008 3.628a1 1 0 0 1-1.154.986l-.393-.061a1 1 0 0 0-.94.37l-.348.442a1 1 0 0 1-1.462.118Zm1.277-12.898.418.19a1 1 0 0 0 1.031-.122l.26-.203a1 1 0 0 0 .384-.788v-.755a1 1 0 0 1 .175-.564l.5-.732a1 1 0 0 0 .175-.591l-.091-3.477a.909.909 0 1 0-1.814.108l.016.174a1 1 0 0 1-.778 1.068l-.289.064a1 1 0 0 0-.556.343l-.51.623a1 1 0 0 0-.201.859l.72 3.118a1 1 0 0 0 .56.685Z"/></svg>`,
})
export class CorsicaSardiniaRegion {
  protected readonly b = inject(GeoIconBase);
}
