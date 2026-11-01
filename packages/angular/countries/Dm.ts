// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.485 22.725.498-.042a1 1 0 0 0 .811-.55l.31-.619a1 1 0 0 1 .811-.55l.923-.076a1.5 1.5 0 0 0 1.348-1.214l.399-2.088c.091-.481.112-.974.06-1.46l-.418-3.97a2 2 0 0 1 .065-.754l.358-1.269a1.5 1.5 0 0 0-.12-1.112l-2.488-4.672a1 1 0 0 0-.736-.52l-3.18-.468a1 1 0 0 1-.734-.515l-.597-1.109a1 1 0 0 0-.9-.525l-1.066.02a1 1 0 0 0-.967 1.167l.283 1.666a1 1 0 0 1-.113.654L6.36 5.921a1 1 0 0 0-.112.661L6.427 7.6a4 4 0 0 0 .396 1.164l2.948 5.625c.179.342.307.707.382 1.085l1.267 6.448a1 1 0 0 0 1.065.803Z"/></svg>`,
})
export class Dm {
  protected readonly b = inject(GeoIconBase);
}
