// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m19.096 3.695.305-1.722a.6.6 0 0 0-.644-.703l-6.428.58a4 4 0 0 0-1.369.375L8.817 3.251a1 1 0 0 0-.519 1.214l.704 2.147a.8.8 0 0 1-.565 1.025l-1.353.34a1 1 0 0 0-.515.317l-1.7 1.977a1 1 0 0 1-.69.346l-.993.068a2 2 0 0 0-.895.28l-.982.59a.3.3 0 0 0-.145.258v1.325c0 .1.05.194.132.25L12.6 20.986a1 1 0 0 1 .369.454l.366.904a.6.6 0 0 0 .667.365l1.928-.362a2 2 0 0 0 .789-.334l5.58-3.958a.6.6 0 0 0 .106-.882l-1.796-2.08a1 1 0 0 1-.24-.713l.17-2.837c.016-.28-.006-.56-.067-.832l-.561-2.517a3 3 0 0 0-.538-1.16l-.859-1.132a1 1 0 0 1-.025-1.175l.443-.638a1 1 0 0 0 .164-.395Z"/></svg>`,
})
export class Dz {
  protected readonly b = inject(GeoIconBase);
}
