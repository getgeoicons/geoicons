// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-congo-basin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.353 17.023-2.55.218-2.6-3.414a1 1 0 0 1-.159-.907l.722-2.286a1 1 0 0 0-.36-1.107l-.466-.343a1 1 0 0 1-.294-1.268l.417-.798a1 1 0 0 1 .887-.538h.678a1 1 0 0 0 .948-.683L7 1.641a.581.581 0 0 1 1.13.125l.333 3.294a1 1 0 0 0 1.241.869l1.135-.288a1 1 0 0 0 .438-.239l2.392-2.238a.848.848 0 0 1 1.368.307l.527 1.332q.067.167.186.3l2.446 2.728a1 1 0 0 0 .552.314l1.57.308a1 1 0 0 1 .632.418l.486.711a1 1 0 0 1 .088.97l-1.156 2.602a1 1 0 0 0-.085.355l-.157 3.06a1 1 0 0 0 .145.572l.722 1.18a.6.6 0 0 1-.133.777l-.893.73a1 1 0 0 0-.366.717l-.129 2.255-5.558-1.185-.274-3.371-3.024.716a.6.6 0 0 1-.66-.289l-.647-1.144a1 1 0 0 0-.956-.504Z"/></svg>`,
})
export class CongoBasin {
  protected readonly b = inject(GeoIconBase);
}
