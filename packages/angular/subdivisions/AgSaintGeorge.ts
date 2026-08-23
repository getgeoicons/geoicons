// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ag-saint-george',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.437 22.736a.3.3 0 0 0 .356-.28l.063-1.3a.3.3 0 0 1 .212-.272l1.902-.585a.3.3 0 0 0 .208-.333l-.684-4.446.795-.032a1 1 0 0 0 .904-.668l.255-.73a1 1 0 0 0-.021-.718l-.018-.042a1 1 0 0 0-1.328-.526l-.221.098a.852.852 0 0 1-.979-1.348l.947-1.05a1 1 0 0 1 .682-.329l.62-.037a.6.6 0 0 0 .556-.5l.103-.613a.6.6 0 0 0-.339-.644l-1.973-.917A2 2 0 0 1 13.4 6.217l-.318-1.076a2 2 0 0 0-.486-.83l-.503-.515a2 2 0 0 1-.48-.807l-.357-1.16a.705.705 0 0 0-1.367.34l.543 2.84a.3.3 0 0 1-.268.356l-2.688.243a.3.3 0 0 0-.273.29l-.06 2.282a.3.3 0 0 0 .27.307l1.143.116a.3.3 0 0 1 .27.3L8.8 15.09l1.15.32-1.082 4.463a1 1 0 0 0 .197.87l1.083 1.322a1 1 0 0 0 .588.35z"/></svg>`,
})
export class AgSaintGeorge {
  protected readonly b = inject(GeoIconBase);
}
