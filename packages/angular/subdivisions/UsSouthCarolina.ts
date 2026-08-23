// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-south-carolina',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.432 4.248a3 3 0 0 0-1.021.534l-.65.52a1 1 0 0 0-.345.534l-.017.067a1 1 0 0 0 .52 1.14l1.12.563a3 3 0 0 1 1.303 1.272l.74 1.39q.185.346.453.634l3.708 3.986a3 3 0 0 1 .654 1.107l1.209 3.678a.6.6 0 0 0 .433.396l1.339.314a.6.6 0 0 0 .516-.12l6.042-4.94a2 2 0 0 0 .59-.804l.523-1.303a3 3 0 0 1 .773-1.11l1.246-1.126a.3.3 0 0 0 .012-.433l-4.4-4.474a1 1 0 0 0-.697-.298l-4.26-.068a.6.6 0 0 1-.502-.287l-.756-1.237a.6.6 0 0 0-.475-.286l-5.171-.315a3 3 0 0 0-1.036.118z"/></svg>`,
})
export class UsSouthCarolina {
  protected readonly b = inject(GeoIconBase);
}
