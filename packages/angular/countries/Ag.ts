// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.421 21.019a94 94 0 0 0-.212-1.629c-.04-.287.046-.577.236-.796l1.382-1.592a1 1 0 0 1 1.34-.156l2.936 2.115a1 1 0 0 1 .41.705l.098.918a1 1 0 0 1-.367.885l-.984.793a2 2 0 0 1-1.517.425l-1.369-.18a2 2 0 0 1-.592-.175l-.661-.312c-.382-.18-.65-.582-.7-1.001Zm1.517-14.192 2.185.599a.6.6 0 0 0 .755-.508l.163-1.373a1 1 0 0 0-.202-.73l-2.411-3.117a.6.6 0 0 0-.865-.088l-.678.58a.6.6 0 0 0-.056.857l.863.958a1 1 0 0 1 .202.997l-.364 1.05a.6.6 0 0 0 .408.775Z"/></svg>`,
})
export class Ag {
  protected readonly b = inject(GeoIconBase);
}
