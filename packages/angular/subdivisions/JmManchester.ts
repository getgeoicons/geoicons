// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-manchester',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.424 1.8a.8.8 0 0 0-.57.796l.169 4.487a3 3 0 0 0 .126.756l1.782 5.888a3 3 0 0 1 .098.443l.978 6.821a1 1 0 0 0 .593.776l2.128.92a1 1 0 0 0 .543.071l6.706-.991a1 1 0 0 0 .829-.768l.25-1.1a1 1 0 0 0-.231-.888l-.667-.745a2 2 0 0 1-.42-.74l-.312-1.002a2 2 0 0 1-.071-.874l.285-2.021a1 1 0 0 0-.105-.605l-4.872-9.27a1 1 0 0 0-.481-.45L8.098 1.5a2 2 0 0 0-1.384-.087z"/></svg>`,
})
export class JmManchester {
  protected readonly b = inject(GeoIconBase);
}
