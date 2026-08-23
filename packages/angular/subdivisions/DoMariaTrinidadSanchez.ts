// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-maria-trinidad-sanchez',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.531 19.59a1 1 0 0 0-.286-.691L19.03 16.64a9 9 0 0 1-1.353-1.773l-1.184-2.033a2 2 0 0 1-.257-1.249l.242-1.99a1 1 0 0 0-.392-.92l-.663-.498a1 1 0 0 1-.371-1.039l.52-2.114a2 2 0 0 0-.079-1.208l-.166-.424a2 2 0 0 0-.867-1.006l-1.549-.888a2 2 0 0 0-1.118-.261l-2.101.129a2 2 0 0 0-1.376.672l-.698.79a1 1 0 0 0-.25.662v1.572a1 1 0 0 1-.57.902l-1.278.61a2 2 0 0 1-.798.195l-1.97.064a.3.3 0 0 0-.29.31l.047 1.314a.3.3 0 0 0 .254.286l1.526.233a1 1 0 0 1 .835.83l.366 2.27a.3.3 0 0 0 .255.25l1.564.213a.3.3 0 0 1 .24.401l-1.08 2.91a.3.3 0 0 0 .202.393l3.28.902a.3.3 0 0 1 .22.316l-.159 1.78a.3.3 0 0 0 .206.312l9.395 3.083a1 1 0 0 0 .92-.156l.62-.476a1 1 0 0 0 .393-.803z"/></svg>`,
})
export class DoMariaTrinidadSanchez {
  protected readonly b = inject(GeoIconBase);
}
