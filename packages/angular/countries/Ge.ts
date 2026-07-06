// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.907 15.292-3.288.311a.5.5 0 0 1-.48-.746l.6-1.05a.5.5 0 0 0 .042-.401l-.87-2.716a.5.5 0 0 0-.215-.275L1.578 7.901a.5.5 0 0 1-.195-.633l.286-.632a.5.5 0 0 1 .645-.256l4.172 1.711a.5.5 0 0 0 .177.037l3.695.096a.5.5 0 0 1 .31.117l2.827 2.38a.5.5 0 0 0 .473.093l2.546-.81a.5.5 0 0 1 .336.011l2.39.947a.5.5 0 0 1 .295.605l-.156.536a.5.5 0 0 0 .276.597l1.623.723a.5.5 0 0 1 .169.79l-.215.24a.5.5 0 0 0 .056.722l1.183.962a.5.5 0 0 1 .119.636l-.335.587a.5.5 0 0 1-.69.183l-3.061-1.818a.5.5 0 0 0-.598.066l-.773.727a.5.5 0 0 1-.286.132l-4.388.497a.5.5 0 0 1-.39-.126l-1.78-1.602a.5.5 0 0 0-.382-.127Z"/></svg>`,
})
export class Ge {
  protected readonly b = inject(GeoIconBase);
}
