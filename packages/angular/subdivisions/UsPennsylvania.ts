// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-pennsylvania',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.2 17.968a.3.3 0 0 0 .3.3l16.964-.009a1 1 0 0 0 .415-.09l3.588-1.637a.3.3 0 0 0 .118-.45l-1.428-1.971a1 1 0 0 1-.058-1.083l1.366-2.388a.6.6 0 0 0-.05-.67l-1.913-2.422a1 1 0 0 0-.785-.38H3.993L4 5.731l-2.613 1.35a.3.3 0 0 0-.162.266z"/></svg>`,
})
export class UsPennsylvania {
  protected readonly b = inject(GeoIconBase);
}
