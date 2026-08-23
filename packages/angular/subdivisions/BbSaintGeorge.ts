// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb-saint-george',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.588 13.456a1 1 0 0 0-.134-.98L19.66 8.828a.6.6 0 0 0-.445-.234l-.853-.045a.6.6 0 0 1-.568-.57l-.073-1.516a.6.6 0 0 0-.139-.355L14.44 2.34a1 1 0 0 0-.705-.357l-2.818-.178a1 1 0 0 0-1.002.654l-.157.427a2 2 0 0 1-1.003 1.111l-2.162 1.05a3 3 0 0 1-1.225.301l-2.292.066a1 1 0 0 0-.626.244l-.875.758a1 1 0 0 0-.344.817l.256 4.156a5 5 0 0 0 .183 1.067l2.652 9.277a.6.6 0 0 0 .564.435l2.698.061a.6.6 0 0 0 .613-.585l.012-.475a.6.6 0 0 1 .608-.586l2.804.039c.311.004.622-.04.92-.132l1.72-.527c.307-.094.598-.237.86-.424l2.93-2.085a2 2 0 0 1 1.098-.37l1.356-.042a1 1 0 0 0 .897-.627z"/></svg>`,
})
export class BbSaintGeorge {
  protected readonly b = inject(GeoIconBase);
}
