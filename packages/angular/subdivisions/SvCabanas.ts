// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sv-cabanas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.212 17.06a1 1 0 0 0 .588.014l3.749-1.053a6 6 0 0 1 2.077-.207l1.845.14c.596.046 1.183.18 1.74.399l1.094.43a1 1 0 0 1 .521.468l.412.79a.6.6 0 0 0 .592.319l1.943-.198a.6.6 0 0 0 .51-.412l1.406-4.335a1 1 0 0 0-.02-.675l-.58-1.469a2 2 0 0 1-.094-1.151l.236-1.103a1 1 0 0 0-.333-.974l-.398-.336a1 1 0 0 0-.745-.23l-1.024.102a1 1 0 0 1-.628-.146l-2.095-1.304a2 2 0 0 0-1.788-.163L6.51 9.388a2 2 0 0 1-.72.139l-2.509.015a1 1 0 0 0-.662.257l-.916.824a1 1 0 0 0-.325.627l-.107.918a1 1 0 0 0 .442.95L3.71 14.44a1 1 0 0 1 .445.752l.046.557a1 1 0 0 0 .68.866z"/></svg>`,
})
export class SvCabanas {
  protected readonly b = inject(GeoIconBase);
}
