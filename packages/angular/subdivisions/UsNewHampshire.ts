// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-new-hampshire',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M16.592 21.492a.6.6 0 0 0 .28-.293l.461-1.037a.6.6 0 0 0-.028-.543L16.22 17.73a2 2 0 0 1-.263-.905l-.679-14.899a.6.6 0 0 0-.74-.556l-.71.171a1 1 0 0 0-.727.693l-1.05 3.609a1 1 0 0 0-.028.427l.211 1.413a1 1 0 0 1-.575 1.058l-1.76.8a.6.6 0 0 0-.35.587l.062.93a2 2 0 0 1-.206 1.027l-1.75 3.509a1 1 0 0 0-.09.269l-.983 5.467a.6.6 0 0 0 .07.404l.308.539a.6.6 0 0 0 .5.301l6.263.217a1 1 0 0 0 .482-.105z"/></svg>`,
})
export class UsNewHampshire {
  protected readonly b = inject(GeoIconBase);
}
