// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-kingston',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.536 10.834a.3.3 0 0 0 .231.477l1.327.047a1 1 0 0 1 .54.181l1.817 1.278a1 1 0 0 0 .634.18l11.218-.665a2 2 0 0 1 1.12.265l1.202.695a2 2 0 0 1 .678.647l.958 1.482a.3.3 0 0 0 .543-.092l.929-3.838a.3.3 0 0 0-.206-.358l-7.025-2.086a1 1 0 0 0-.416-.033l-3.202.425a2 2 0 0 1-1.066-.15L8.45 8.25a1 1 0 0 0-.915.057l-1.538.92a1 1 0 0 1-1.198-.13l-.93-.874a.3.3 0 0 0-.448.04z"/></svg>`,
})
export class JmKingston {
  protected readonly b = inject(GeoIconBase);
}
