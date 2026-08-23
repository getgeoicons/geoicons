// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-guanajuato',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.13 6.526a1 1 0 0 0-.853-.563l-1.115-.052a1 1 0 0 1-.664-.296l-.789-.799a2 2 0 0 0-1.082-.565l-.55-.095a2 2 0 0 0-1.714.518l-.543.514a1 1 0 0 1-1.23.113l-2.602-1.684a3 3 0 0 0-1.568-.481l-2.794-.058a1 1 0 0 0-1.013.873l-.258 2.021a2 2 0 0 1-.323.86l-3.375 5.03a1 1 0 0 0-.05 1.033l.573 1.06a1 1 0 0 1-.042 1.021l-.532.816a1 1 0 0 0 .074 1.191l.85 1.007a1 1 0 0 0 .774.355l.908-.01a1 1 0 0 0 .814-.432l.256-.372a1 1 0 0 1 1.097-.394l.246.07a1 1 0 0 1 .726.95l.013 1.104a.6.6 0 0 0 .671.589l2.213-.263a.6.6 0 0 1 .628.372l.23.571a.6.6 0 0 0 .605.374l4.173-.338a1 1 0 0 0 .92-1.003l-.012-1.832a1 1 0 0 0-.152-.524l-2.038-3.26a1 1 0 0 1-.008-1.047l.647-1.072a1 1 0 0 1 .825-.483l2.293-.071a1 1 0 0 0 .95-.809l.238-1.224a.6.6 0 0 1 .784-.453l.929.319a.6.6 0 0 0 .646-.173l.459-.525a1 1 0 0 0 .147-1.094z"/></svg>`,
})
export class MxGuanajuato {
  protected readonly b = inject(GeoIconBase);
}
