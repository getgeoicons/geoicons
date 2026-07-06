// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.862 17.729-2.135.455a.5.5 0 0 1-.487-.166L4.306 12.17a.5.5 0 0 0-.177-.134l-2.525-1.13a.5.5 0 0 1-.274-.603l.33-1.072a.5.5 0 0 1 .413-.348l1.322-.174a.5.5 0 0 0 .404-.323l.177-.483a.5.5 0 0 1 .422-.325l.92-.088a.5.5 0 0 1 .48.25l.673 1.172a.5.5 0 0 0 .44.252l3.411-.038a.5.5 0 0 0 .291-.097l1.583-1.165a.5.5 0 0 1 .522-.043l1.686.854a.5.5 0 0 0 .596-.11l1.584-1.745a.5.5 0 0 0 .096-.517l-.546-1.41.98-.571a.5.5 0 0 1 .296-.066l1.1.097-.083 2.264a.5.5 0 0 0 .106.326l.778.998a.5.5 0 0 1 .102.25l.24 2.086a.5.5 0 0 1-.483.557l-.679.019a.5.5 0 0 0-.46.344l-.21.64a.5.5 0 0 0 .232.591l2.835 1.583a.5.5 0 0 1 .246.334l.264 1.262a.5.5 0 0 0 .413.392l.989.152v1.27a.5.5 0 0 1-.657.474l-1.218-.402a.5.5 0 0 0-.489.101l-1.59 1.415a.5.5 0 0 1-.265.122l-4.321.59a.5.5 0 0 1-.443-.163l-1.476-1.671a.5.5 0 0 0-.479-.158Z"/></svg>`,
})
export class Ss {
  protected readonly b = inject(GeoIconBase);
}
