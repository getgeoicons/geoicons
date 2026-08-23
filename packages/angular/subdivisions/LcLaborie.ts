// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lc-laborie',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.157 4.398a1 1 0 0 1-.08.442L6.65 17.447a.6.6 0 0 0 .275.77l1.5.777a3 3 0 0 0 1.226.332l3.512.18a1 1 0 0 1 .924.779l.236 1.044a1 1 0 0 0 .366.573l.825.634a1 1 0 0 0 .771.194l.393-.065a.796.796 0 0 0 .278-1.47l-.222-.132a1 1 0 0 1-.48-.984l.7-5.564a3 3 0 0 0-.018-.88l-.294-1.72a2 2 0 0 0-.625-1.142l-.583-.531a2 2 0 0 1-.604-1.037l-.615-2.716a2 2 0 0 1-.035-.683l.43-3.547a.83.83 0 0 0-1.518-.554l-.815 1.245a1 1 0 0 0-.162.595z"/></svg>`,
})
export class LcLaborie {
  protected readonly b = inject(GeoIconBase);
}
