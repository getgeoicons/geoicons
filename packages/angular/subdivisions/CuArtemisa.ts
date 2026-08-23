// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-artemisa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.871 5.734a.6.6 0 0 0-.819-.579l-1.298.51a6 6 0 0 1-1.088.312l-2.776.518-7.699.8a3 3 0 0 1-.824-.028l-.523-.09a2 2 0 0 0-1.117.126l-.692.291a2 2 0 0 0-.535.332L1.973 9.25a1 1 0 0 0-.334.608l-.38 2.542a1 1 0 0 0 .17.722l.899 1.282a1 1 0 0 0 1.08.392l1.195-.323a.6.6 0 0 1 .636.219l.662.882a2 2 0 0 1 .392 1.013l.134 1.433a1 1 0 0 0 .664.85l.499.175a1 1 0 0 0 .743-.031l4.937-2.224a2 2 0 0 0 1.067-1.165l.285-.816a1 1 0 0 1 1.026-.667l6.352.522a.6.6 0 0 0 .641-.503l.08-.497a.6.6 0 0 0-.387-.66l-.285-.103a.8.8 0 0 1-.52-.646l-.184-1.388a2 2 0 0 1 .185-1.142l.277-.57a1 1 0 0 0-.251-1.2l-.37-.314a1 1 0 0 1-.353-.797z"/></svg>`,
})
export class CuArtemisa {
  protected readonly b = inject(GeoIconBase);
}
