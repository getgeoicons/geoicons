// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-guerrero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M15.503 6.162a1 1 0 0 0-1.207-.207l-2.362 1.257a.6.6 0 0 1-.858-.363l-.395-1.367a.6.6 0 0 0-.528-.432l-.74-.06a.6.6 0 0 0-.64.695l.171 1.057a.6.6 0 0 1-.72.683l-4.046-.879a1 1 0 0 0-.888.241l-.018.016a1 1 0 0 0-.31.573l-.08.474a1 1 0 0 1-.634.772l-.364.136a.943.943 0 0 0-.15 1.694l5.768 3.415 5.921 2.573 3.952 1.098q.432.12.825.331l1.436.773a1 1 0 0 0 1.301-.32l1.577-2.326a1 1 0 0 0 .113-.9l-1.652-4.578a1 1 0 0 0-.574-.591l-1.835-.723a2 2 0 0 1-.742-.51z"/></svg>`,
})
export class MxGuerrero {
  protected readonly b = inject(GeoIconBase);
}
