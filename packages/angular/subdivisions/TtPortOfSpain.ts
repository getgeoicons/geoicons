// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-port-of-spain',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.11 7.054a2 2 0 0 1 1.06.592l.744.791a2 2 0 0 1 .514 1.039l.207 1.237a2 2 0 0 1-.067.938l-.308.967a1 1 0 0 0 .534 1.212l1.109.51a1 1 0 0 0 1.2-.286l.033-.04a1 1 0 0 1 1.292-.239l6.71 3.968a1 1 0 0 1 .47.661l.2.98a1 1 0 0 0 .433.636l.297.195a1 1 0 0 0 .754.141l2.604-.55a.6.6 0 0 0 .472-.657l-.508-4.374a.6.6 0 0 1 .486-.66l.953-.177a.6.6 0 0 0 .49-.585l.008-.939a.6.6 0 0 0-.182-.437l-1.372-1.328a.6.6 0 0 1-.183-.433l.013-3.082a.6.6 0 0 0-.78-.575l-3.595 1.136a1 1 0 0 1-.613-.003l-3.072-1.007a1 1 0 0 1-.624-.596l-.566-1.495a.6.6 0 0 0-.445-.376L8.74 3.7a.6.6 0 0 0-.715.594v.036a1 1 0 0 1-.99 1.01l-4.773.05a.6.6 0 0 0-.517.306l-.142.253a.6.6 0 0 0 .404.881z"/></svg>`,
})
export class TtPortOfSpain {
  protected readonly b = inject(GeoIconBase);
}
