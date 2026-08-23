// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kn-saint-thomas-middle-island',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.541 10.915.327.389a1 1 0 0 0 .117.118l2.268 1.935c.282.242.608.428.96.55l1.338.467q.966.337 1.855.847l4.279 2.457a2 2 0 0 1 .929 1.19l.286 1.01c.066.232.192.442.366.61l.13.124a1.148 1.148 0 0 0 1.834-.341l1.064-2.265a1 1 0 0 1 .586-.522l1.56-.525a3 3 0 0 0 1.174-.732l1.531-1.545a.6.6 0 0 0-.217-.985l-4.7-1.745a.6.6 0 0 1-.382-.665l.162-.93a.6.6 0 0 0-.136-.494l-5.76-6.698a.6.6 0 0 0-.872-.04L7.992 5.3a1 1 0 0 1-.721.28l-.913-.023a1 1 0 0 0-.889.494l-.517.883a2 2 0 0 1-.5.57l-2.775 2.15a.88.88 0 0 0-.136 1.26Z"/></svg>`,
})
export class KnSaintThomasMiddleIsland {
  protected readonly b = inject(GeoIconBase);
}
