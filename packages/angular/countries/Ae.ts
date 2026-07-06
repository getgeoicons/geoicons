// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ae',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m16.963 20.54-11.029-1.4a.5.5 0 0 1-.326-.182l-4.298-5.33a.5.5 0 0 1-.111-.314v-.393a.5.5 0 0 1 .802-.4l1.618 1.224a.5.5 0 0 0 .523.05l1.459-.722a.5.5 0 0 1 .28-.048l4.782.558a.5.5 0 0 0 .211-.021l2.765-.89a.5.5 0 0 0 .291-.247l1.255-2.432a.5.5 0 0 1 .093-.127l5.893-5.8a.5.5 0 0 1 .844.273l.695 4.091a.5.5 0 0 1-.442.581l-1.356.14a.5.5 0 0 0-.439.597l.63 3.12a.5.5 0 0 1-.283.556l-1.62.732a.5.5 0 0 0-.269.3l-1.276 3.887a.5.5 0 0 0-.024.122l-.108 1.612a.5.5 0 0 1-.561.463Z"/></svg>`,
})
export class Ae {
  protected readonly b = inject(GeoIconBase);
}
