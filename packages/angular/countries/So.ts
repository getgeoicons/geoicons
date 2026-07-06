// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-so',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.99 21.614.948 1.186 4.32-4.779a.5.5 0 0 1 .124-.098l2.203-1.259a.5.5 0 0 0 .11-.085l3.14-3.212a.5.5 0 0 0 .075-.097l4.169-7.155a.5.5 0 0 0 .053-.132l.891-3.61a.5.5 0 0 0-.274-.573l-.846-.394a.5.5 0 0 0-.66.231l-.4.81a.5.5 0 0 1-.356.268l-8.149 1.54a.5.5 0 0 1-.479-.174l-.894-1.089a.5.5 0 0 0-.81.053l-.45.718a.5.5 0 0 0 .017.554l1.493 2.1a.5.5 0 0 0 .276.194l5.924 1.61-4.282 4.346a.5.5 0 0 1-.218.13L5.81 13.879a.5.5 0 0 0-.24.153l-1.506 1.737a.5.5 0 0 0-.122.322l-.062 5.205a.5.5 0 0 0 .11.318Z"/></svg>`,
})
export class So {
  protected readonly b = inject(GeoIconBase);
}
