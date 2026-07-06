// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.026 22.768 1.734.027a.5.5 0 0 0 .459-.285l1.031-2.16a.5.5 0 0 1 .375-.278l1.04-.16a.5.5 0 0 0 .377-.282l2.361-5.056a.5.5 0 0 0 .01-.4l-.643-1.577a.5.5 0 0 1 0-.375l.793-1.978a.5.5 0 0 0-.024-.425l-.566-1.04a.5.5 0 0 1-.015-.447l1.483-3.245a.5.5 0 0 0 .045-.211l-.01-1.654a.5.5 0 0 0-.491-.497l-.99-.015a.5.5 0 0 1-.34-.142l-.949-.925a.5.5 0 0 0-.779.104l-2.489 4.198a.5.5 0 0 1-.576.223L8.854 5.86a.5.5 0 0 0-.646.457l-.673 15.93a.5.5 0 0 0 .491.52Z"/></svg>`,
})
export class Bz {
  protected readonly b = inject(GeoIconBase);
}
