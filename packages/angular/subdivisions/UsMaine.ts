// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-maine',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.045 22.649a.3.3 0 0 0 .545.047l1.832-3.28a1 1 0 0 1 .603-.475l1.814-.51a1 1 0 0 0 .568-.417l.433-.666a1 1 0 0 1 .915-.452l1.732.133a1 1 0 0 0 .6-.145l3.055-1.876a1 1 0 0 0 .295-1.427l-2.26-3.215a1 1 0 0 1-.182-.57l-.034-5.76a1 1 0 0 0-.312-.72l-.641-.608a1 1 0 0 0-1.18-.145l-.854.483a.6.6 0 0 1-.875-.367l-.131-.49a.6.6 0 0 0-.467-.433l-.02-.004a.6.6 0 0 0-.613.258L8.173 6.086a1 1 0 0 0-.151.378L7.4 9.992a1 1 0 0 1-.345.595l-1.88 1.567a.6.6 0 0 0-.216.48l.238 7.321q.01.307.111.598z"/></svg>`,
})
export class UsMaine {
  protected readonly b = inject(GeoIconBase);
}
