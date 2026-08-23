// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-spanish-wells',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.067 16.678-1.948 1.924a.489.489 0 0 1-.819-.466l.808-3.248a1 1 0 0 1 .29-.49l2.8-2.609a1 1 0 0 1 .587-.264l.314-.03a11 11 0 0 0 2.085-.404l.847-.251a2 2 0 0 0 .916-.578l1.314-1.457a1 1 0 0 1 .456-.288l.137-.041a1 1 0 0 1 .422-.033l3.112.422a1 1 0 0 0 .567-.09l2.808-1.347a11 11 0 0 0 1.97-1.215l.86-.666a.637.637 0 0 1 .89.9L21.432 7.78a7.48 7.48 0 0 1-4.244 2.666l-2.961.66c-.922.205-1.814.528-2.653.961l-1.51.779a2 2 0 0 1-.917.222H6.792a1 1 0 0 0-.876.517l-1.332 2.41a3 3 0 0 1-.517.683Z"/></svg>`,
})
export class BsSpanishWells {
  protected readonly b = inject(GeoIconBase);
}
