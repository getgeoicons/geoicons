// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-nippes',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.098 10.925a.6.6 0 0 0-.459-.647L18.205 9.7a3 3 0 0 0-.879-.075l-2.376.148a4 4 0 0 1-.857-.039L9.95 9.098a3 3 0 0 0-.977.01l-3.8.67a.742.742 0 0 1-.279-1.456l2.03-.421a.841.841 0 0 0-.297-1.655l-2.778.422a2 2 0 0 0-.849.34l-.136.096a2 2 0 0 0-.797 1.176l-.718 3.04a.6.6 0 0 0 .493.732l1.444.22a1 1 0 0 0 .68-.14l.477-.297a1 1 0 0 1 .766-.123l1.59.388a1 1 0 0 1 .743 1.173l-.06.294a.6.6 0 0 0 .617.72l4.07-.203a1 1 0 0 0 .634-.268l.441-.413a1 1 0 0 1 .775-.265l4.787.44a1 1 0 0 1 .776.499l1.983 3.46a.6.6 0 0 0 .494.302l.061.003a.6.6 0 0 0 .627-.59l.045-2.716a1 1 0 0 0-.31-.74l-1.178-1.122a1 1 0 0 1-.305-.83z"/></svg>`,
})
export class HtNippes {
  protected readonly b = inject(GeoIconBase);
}
