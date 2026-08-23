// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb-saint-michael',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M17.36 1.764a.3.3 0 0 0-.504-.168l-1.877 1.802a.9.9 0 0 1-.78.236 2.69 2.69 0 0 0-2.263.64l-.504.45a1 1 0 0 1-.993.199L7.18 3.796a.3.3 0 0 0-.398.274l-.028.89a.3.3 0 0 1-.343.288L4.306 4.94a.3.3 0 0 0-.322.185L3.283 6.87a.6.6 0 0 0-.027.364l.48 2.007a2 2 0 0 0 .466.882l.613.673a2 2 0 0 1 .392.638l.264.697a.6.6 0 0 1-.308.756l-.14.065a.6.6 0 0 0-.333.664l.422 2.06a1 1 0 0 0 .521.688l3.27 1.684a2 2 0 0 1 1.05 1.41l.01.052a2 2 0 0 1-.253 1.401l-.134.223a.6.6 0 0 0 .408.9l3.488.626a.6.6 0 0 0 .703-.653l-.082-.78a.6.6 0 0 1 .271-.566l1.956-1.262c.47-.303.98-.54 1.515-.701l2.674-.81a.3.3 0 0 0 .203-.366l-1.952-7.164z"/></svg>`,
})
export class BbSaintMichael {
  protected readonly b = inject(GeoIconBase);
}
