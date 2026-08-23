// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb-christ-church',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.118 9.906a.3.3 0 0 1-.169.301l-5.061 2.435a.3.3 0 0 0 .04.556l5.788 1.795a1 1 0 0 0 .43.036l1.2-.163a3 3 0 0 1 1.236.09l.54.156a1.96 1.96 0 0 1 1.287 1.185l.384 1.01a1 1 0 0 0 .446.518l.526.295a1 1 0 0 0 .808.075l2.595-.874a2 2 0 0 0 1.072-.858l.871-1.437a1 1 0 0 1 .675-.465l.728-.133c.35-.065.676-.22.945-.453l.872-.751a.6.6 0 0 0 .051-.86l-2.739-2.99a2 2 0 0 1-.524-1.276l-.035-.95a1 1 0 0 0-.811-.945l-2.397-.46a1 1 0 0 0-.767.167l-1.76 1.25a2 2 0 0 1-.734.323L7.257 8.644a.3.3 0 0 0-.234.324z"/></svg>`,
})
export class BbChristChurch {
  protected readonly b = inject(GeoIconBase);
}
