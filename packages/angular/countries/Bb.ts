// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m11.341 21.268-4.247-.891a.5.5 0 0 1-.397-.49v-.977a.5.5 0 0 0-.317-.466l-1.042-.408a.5.5 0 0 1-.315-.416L3.665 3.86a.5.5 0 0 1 .174-.43l2.33-1.978a.5.5 0 0 1 .614-.025l2.058 1.47a.5.5 0 0 1 .169.208l2.613 6.042a.5.5 0 0 0 .223.242l7.145 3.842q.083.044.143.115l.994 1.16a.5.5 0 0 1 .051.579l-2.353 3.99a.5.5 0 0 1-.146.158l-4.746 3.275a.5.5 0 0 1-.704-.14l-.572-.883a.5.5 0 0 0-.317-.217Z"/></svg>`,
})
export class Bb {
  protected readonly b = inject(GeoIconBase);
}
