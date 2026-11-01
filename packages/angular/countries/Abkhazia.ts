// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-abkhazia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m21.429 11.166-.727.287a1 1 0 0 0-.623 1.069l.517 3.699a1 1 0 0 1-.353.909l-2.955 2.442a.6.6 0 0 1-.969-.336l-.666-3.107a1 1 0 0 0-.69-.749l-1.842-.55a1 1 0 0 1-.61-.517l-.786-1.593a2 2 0 0 0-.616-.731l-1.31-.954a2 2 0 0 0-.83-.354l-3.864-.68a1 1 0 0 1-.745-.589l-.685-1.589a1 1 0 0 0-.4-.46L1.666 6.39a.6.6 0 0 1-.229-.774l.514-1.065a1 1 0 0 1 .697-.544l.732-.152a1 1 0 0 1 .526.032l2.164.736a1 1 0 0 0 .718-.028l.566-.244a1 1 0 0 1 .914.064l3.334 2.022a1 1 0 0 0 .424.14l2.564.244a2 2 0 0 1 1.153.508l1.04.942a2 2 0 0 0 1.356.518l3.737-.026a.6.6 0 0 1 .554.84l-.451 1.034a1 1 0 0 1-.55.53Z"/></svg>`,
})
export class Abkhazia {
  protected readonly b = inject(GeoIconBase);
}
