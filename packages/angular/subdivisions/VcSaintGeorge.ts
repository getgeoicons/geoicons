// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vc-saint-george',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.436 1.56a.6.6 0 0 0-.773-.066l-.193.137a.6.6 0 0 0-.19.758l.817 1.633a.6.6 0 0 1-.152.729L4.39 8.55a2 2 0 0 0-.647 1.003l-.392 1.421a2 2 0 0 1-.494.862l-1.445 1.485a.6.6 0 0 0 .142.945l1.933 1.057a1 1 0 0 1 .392 1.367l-.553.985a1 1 0 0 0 .361 1.348l.066.04a1 1 0 0 0 .987.02l1.435-.776a1 1 0 0 1 1.013.037l3.443 2.195a1 1 0 0 1 .46.913l-.014.195a1 1 0 0 0 1.071 1.067l4.621-.34a1 1 0 0 0 .846-.604l1.742-4.071a1 1 0 0 1 .867-.605l.905-.047a1 1 0 0 0 .831-.53l.675-1.27a3 3 0 0 0 .34-1.147l.112-1.292a1 1 0 0 0-.441-.918l-3.592-2.4a1 1 0 0 0-.494-.166l-2.154-.134a1 1 0 0 1-.723-.377l-3.76-4.754z"/></svg>`,
})
export class VcSaintGeorge {
  protected readonly b = inject(GeoIconBase);
}
