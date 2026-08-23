// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-harbour-island',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.12 3.703V2.31a.962.962 0 0 0-1.74-.565l-.125.172a1 1 0 0 0-.177.755l.512 3.03a1 1 0 0 1-.04.491L9.488 9.295a1 1 0 0 0-.01.613l.905 2.992q.105.348.29.66l.367.619a1 1 0 0 1 .104.774l-.411 1.498a1 1 0 0 0 .236.95l.905.962a1 1 0 0 1 .27.619l.176 2.65a1 1 0 0 0 .58.84l.22.103a1 1 0 0 0 .945-.058l.051-.032a1 1 0 0 0 .473-.896l-.097-2.1a2 2 0 0 0-.217-.819l-.8-1.564a1 1 0 0 1-.11-.445l-.09-8.903a2 2 0 0 0-.105-.62l-.945-2.794a2 2 0 0 1-.105-.64Z"/></svg>`,
})
export class BsHarbourIsland {
  protected readonly b = inject(GeoIconBase);
}
