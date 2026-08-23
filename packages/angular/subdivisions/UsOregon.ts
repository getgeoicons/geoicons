// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-oregon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.77 5.249a.6.6 0 0 0-.466-.223l-5.134-.019a1 1 0 0 0-.198.02l-8.107 1.61a1 1 0 0 1-.984-.367l-1.31-1.684a.6.6 0 0 0-.41-.228l-1.846-.194a.6.6 0 0 0-.662.571l-.333 7.908a2 2 0 0 1-.073.458l-.932 3.309a2 2 0 0 0-.055.825l.345 2.41a.3.3 0 0 0 .298.258l19.108-.055a.3.3 0 0 0 .299-.29l.23-6.763a.6.6 0 0 0-.069-.302l-.612-1.155a.6.6 0 0 1-.016-.53l1.803-3.944a.6.6 0 0 0-.079-.626z"/></svg>`,
})
export class UsOregon {
  protected readonly b = inject(GeoIconBase);
}
