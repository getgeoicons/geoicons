// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.29 17.889 9.61 16.32a1 1 0 0 1-.387-.41l-.929-1.83a1 1 0 0 0-.917-.548l-.944.025a1 1 0 0 1-.898-.51l-1.236-2.2a2 2 0 0 0-.456-.55l-1.68-1.415a1 1 0 0 1-.347-.63l-.565-4.165a.926.926 0 0 1 1.463-.873L4.31 4.377a2 2 0 0 0 .581.292l.24.075a2 2 0 0 1 1.074.807l.603.912a1 1 0 0 1 .165.524l.033 1.248a3 3 0 0 0 .443 1.49l.398.648a3 3 0 0 0 .676.768l1.845 1.484a3 3 0 0 0 1.401.624l3.981.644a3 3 0 0 1 1.16.45l1.15.75a3 3 0 0 1 .915.938l1.148 1.864q.151.245.347.457l1.93 2.098a.3.3 0 0 1-.186.5l-2.836.329a1 1 0 0 1-.649-.148l-2.256-1.422a3 3 0 0 0-.426-.223z"/></svg>`,
})
export class Cw {
  protected readonly b = inject(GeoIconBase);
}
