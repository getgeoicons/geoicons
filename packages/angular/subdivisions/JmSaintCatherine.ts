// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-saint-catherine',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.601 4.335a.6.6 0 0 0-.496.776l2.256 7.163q.074.23.108.469l.988 6.789a.6.6 0 0 0 .776.485l2.824-.902a1 1 0 0 1 1.03.265l.308.325a1 1 0 0 1 .165 1.14l-.37.729a.596.596 0 0 0 .485.865l3.545.279a2.8 2.8 0 0 0 2.759-1.608l2.823-6.044a1 1 0 0 0-.227-1.158L19.18 12.62a1 1 0 0 1-.264-1.07l1.001-2.82a1 1 0 0 0 .043-.505l-.312-1.804a1 1 0 0 0-.542-.727l-.683-.338a2 2 0 0 1-.95-.999l-1.14-2.638a.8.8 0 0 0-.71-.482l-.943-.03a1 1 0 0 0-.455.094l-4.53 2.115a3 3 0 0 1-.89.257z"/></svg>`,
})
export class JmSaintCatherine {
  protected readonly b = inject(GeoIconBase);
}
