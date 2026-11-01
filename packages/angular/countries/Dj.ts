// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dj',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.87 22.46 2.175.266a3 3 0 0 0 1.191-.094l5.947-1.703a1 1 0 0 1 .78.098l.973.569a2 2 0 0 0 1.096.271l.862-.037a.8.8 0 0 0 .647-.379l2.769-4.49a1 1 0 0 0-.06-1.136l-.654-.846a1 1 0 0 0-.934-.38l-3.183.461a1 1 0 0 1-1.084-1.328l.164-.457a1 1 0 0 1 .722-.638l2.382-.535a2 2 0 0 0 1.107-.682l.302-.367a2 2 0 0 1 1.351-.72l1.06-.104a1 1 0 0 0 .842-.652l.22-.604a2 2 0 0 0 .04-1.252l-.817-2.775a3 3 0 0 0-.456-.922l-1.593-2.179a1 1 0 0 0-1.205-.327l-1.87.81a1 1 0 0 0-.578.697l-.207.912a1 1 0 0 1-.324.537l-.974.837a.6.6 0 0 1-.76.017l-1.828-1.431a.8.8 0 0 0-1.16.187L4.795 11.64a2 2 0 0 1-.563.562l-.784.518a2 2 0 0 0-.849 1.232l-.24 1.074a3 3 0 0 0-.027 1.174l.24 1.365a3 3 0 0 0 .568 1.3l.32.419a.6.6 0 0 1-.115.841l-.485.369a1 1 0 0 0-.377.603l-.128.651a.6.6 0 0 0 .516.712Z"/></svg>`,
})
export class Dj {
  protected readonly b = inject(GeoIconBase);
}
