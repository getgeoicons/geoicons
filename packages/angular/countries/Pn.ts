// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.57 4.033 5.386 8.258a2.5 2.5 0 0 0-.237 1.603l.438 2.362a2.5 2.5 0 0 0 .391.952l1.689 2.48q.02.03.036.063l1.07 2.2a2.5 2.5 0 0 0 .7.871l.97.766c.363.285.796.465 1.253.52l2.362.28a.5.5 0 0 1 .232.09l2.652 1.908a1 1 0 0 0 1.216-.037l.397-.324a1 1 0 0 0 .353-.944l-.482-2.81a2.5 2.5 0 0 1-.027-.634l.235-2.781a.5.5 0 0 0-.053-.269L17.59 12.6a.5.5 0 0 1-.038-.102L15.919 6.14a2.5 2.5 0 0 1 .035-1.367L17.071 1.2s-2.934 1.976-5.087 2.202c-.827.086-1.907-.046-2.716-.185-.683-.116-1.38.2-1.698.816Z"/></svg>`,
})
export class Pn {
  protected readonly b = inject(GeoIconBase);
}
