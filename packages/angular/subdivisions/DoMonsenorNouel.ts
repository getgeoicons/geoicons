// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-monsenor-nouel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M19.22 18.43a1 1 0 0 0 .556-.925l-.025-.876a1 1 0 0 1 .197-.625l.742-.999a1 1 0 0 0 .01-1.177l-1.08-1.513a2 2 0 0 0-.936-.714l-.819-.302a2 2 0 0 1-.998-.808l-1.068-1.689a1 1 0 0 0-.5-.404l-.877-.322a1 1 0 0 1-.653-.878l-.1-1.666a1 1 0 0 0-.216-.562l-2.606-3.28a.6.6 0 0 0-.863-.08l-.923.801a1 1 0 0 1-1.259.042l-.528-.4a.8.8 0 0 0-.77-.108l-.642.247a.8.8 0 0 0-.486.953l.807 3.019a2 2 0 0 1-.256 1.609L3.19 11.97a1 1 0 0 0-.055.996l1.028 2.038a1 1 0 0 1 .07.723l-.217.765a1 1 0 0 0 .141.844l.562.807a2 2 0 0 0 .5.5l1.678 1.166c.251.174.538.288.84.334l3.826.585a2 2 0 0 1 .627.205l2.962 1.553a1 1 0 0 0 1.113-.124l.563-.479a1 1 0 0 0 .34-.915l-.108-.69a1 1 0 0 1 .545-1.049z"/></svg>`,
})
export class DoMonsenorNouel {
  protected readonly b = inject(GeoIconBase);
}
