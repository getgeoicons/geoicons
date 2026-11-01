// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cl',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m13.455 21.948.008-1.117a.6.6 0 0 0-.496-.596l-.276-.048a1 1 0 0 1-.824-.917l-.06-.87a1 1 0 0 1 .05-.386l.8-2.375a1 1 0 0 0 .034-.51l-.287-1.477a1 1 0 0 1 .02-.467l1.091-3.8a1 1 0 0 0 .001-.547l-.174-.618a1 1 0 0 1 .017-.597l1.094-3.185a1 1 0 0 0-.058-.786l-.906-1.741a.6.6 0 0 0-.947-.156l-.357.342a.6.6 0 0 0-.18.37l-.639 6.116a2 2 0 0 1-.126.52l-.64 1.638a2 2 0 0 0-.132.865l.048.684c.016.234-.01.468-.074.693l-.659 2.282a6 6 0 0 0-.156 2.637l.328 1.994a3 3 0 0 0 1.928 2.33l.766.281a.6.6 0 0 0 .806-.559Z"/></svg>`,
})
export class Cl {
  protected readonly b = inject(GeoIconBase);
}
