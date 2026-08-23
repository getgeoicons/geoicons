// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-monte-plata',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M15.358 7.447a3 3 0 0 1-1.042-.985l-.364-.565a1 1 0 0 0-.922-.455l-2.211.18a1.5 1.5 0 0 0-1.05.558l-.555.695a1.5 1.5 0 0 0-.319 1.111l.03.25a1.5 1.5 0 0 1-.269 1.044l-.597.837a1 1 0 0 1-.623.401l-5.422 1.053a.934.934 0 0 0-.41 1.642l3.081 2.494c.192.155.41.273.645.349l.928.3a1 1 0 0 0 .865-.123l.912-.614a2 2 0 0 1 1.158-.34l.66.013a1 1 0 0 1 .832.477l1.298 2.115a.6.6 0 0 0 .977.064l.666-.82a1 1 0 0 1 .424-.306l1.814-.684a.6.6 0 0 1 .441.007l.664.274a.6.6 0 0 0 .77-.295l.87-1.811a2 2 0 0 1 .69-.796l3.117-2.09a.683.683 0 0 0-.375-1.251l-1.381-.011a2 2 0 0 1-.971-.26z"/></svg>`,
})
export class DoMontePlata {
  protected readonly b = inject(GeoIconBase);
}
