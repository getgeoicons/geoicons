// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lk',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.93 22.264-.753-.678a1 1 0 0 1-.296-.482l-1.034-3.811a1 1 0 0 1-.034-.204l-.215-3.705-.428-2.77a.5.5 0 0 1 .038-.282l1.013-2.234a.5.5 0 0 0 .028-.334l-.266-1.011a.5.5 0 0 1 .177-.523l.835-.647a.5.5 0 0 0 .175-.258l.384-1.344a.5.5 0 0 0-.298-.602L6.989 2.88a.5.5 0 0 1-.3-.594l.093-.352a.5.5 0 0 1 .379-.36l1.394-.297a.5.5 0 0 1 .543.248l.486.887a.5.5 0 0 0 .133.156l2.253 1.739q.065.05.11.116l2.83 4.204a.5.5 0 0 1 .071.161l.427 1.756a.5.5 0 0 0 .064.15l1.618 2.536a1 1 0 0 1 .138.343l.581 2.928a1 1 0 0 1-.01.436l-.508 2.041a1 1 0 0 1-.256.459l-1.498 1.529a1 1 0 0 1-.364.236L11.165 22.7a1 1 0 0 1-.546.044l-1.216-.243a1 1 0 0 1-.473-.237Z"/></svg>`,
})
export class Lk {
  protected readonly b = inject(GeoIconBase);
}
