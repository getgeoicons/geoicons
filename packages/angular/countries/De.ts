// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-de',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.798 21.139.711-2.105a.6.6 0 0 0-.325-.74l-2.027-.9a1 1 0 0 1-.588-.803L3.993 11.4a1 1 0 0 1 .31-.84l1.279-1.196a1 1 0 0 0 .317-.725l.014-2.352a1 1 0 0 1 .798-.974l1.17-.24a1 1 0 0 0 .795-1.064L8.507 2.02a.6.6 0 0 1 .733-.635l1.232.283a2 2 0 0 1 1.013.584l1.433 1.534a1 1 0 0 0 1.243.176l2.081-1.24a1 1 0 0 1 1.278.215l1.06 1.262a1 1 0 0 1 .233.688l-.11 2.473a2 2 0 0 0 .114.763l1.155 3.233a1 1 0 0 1 .042.518l-.15.807a1 1 0 0 1-.69.775l-3.709 1.14a.6.6 0 0 0-.293.947l2.595 3.257a.6.6 0 0 1-.232.925l-.92.396a1 1 0 0 0-.604.896l-.018.79a.6.6 0 0 1-.531.582l-3.097.355a2 2 0 0 1-.946-.12l-1.341-.516a2 2 0 0 0-.988-.115l-1.426.194a.8.8 0 0 1-.866-1.048Z"/></svg>`,
})
export class De {
  protected readonly b = inject(GeoIconBase);
}
