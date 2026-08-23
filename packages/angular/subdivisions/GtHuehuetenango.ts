// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-huehuetenango',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.642 2.647a1 1 0 0 0-.905-.56l-11.473.085a.6.6 0 0 0-.515.3L1.32 15.335a.6.6 0 0 0-.065.437l.578 2.478a1 1 0 0 0 .785.755l.358.069a1 1 0 0 0 .813-.202l1.815-1.452a1 1 0 0 1 .751-.21l2.279.29a1 1 0 0 1 .612.317l1.62 1.772a1 1 0 0 0 .47.29l1.516.422a.6.6 0 0 1 .438.533l.039.528a.6.6 0 0 0 .598.556h1.577a.6.6 0 0 0 .6-.567l.055-.99a.6.6 0 0 1 .427-.541l2.956-.887a1 1 0 0 0 .68-.707l.23-.889a.6.6 0 0 0-.632-.748l-.66.057a1 1 0 0 1-.734-.234l-.776-.66a1 1 0 0 1-.352-.737l-.039-1.533a1 1 0 0 1 .272-.711l2.323-2.466a1 1 0 0 0 .26-.534l.391-2.55 1.548.683.655-2.537a1 1 0 0 0-.07-.69z"/></svg>`,
})
export class GtHuehuetenango {
  protected readonly b = inject(GeoIconBase);
}
