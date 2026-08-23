// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-point-fortin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.857 2.272a.61.61 0 0 0-.771 0c-4.5 3.698-8.062 5.029-14.884 6.251-.202.037-.39.134-.536.279l-.787.787a1 1 0 0 0-.27.922l.619 2.819a1 1 0 0 1-.495 1.09l-1.921 1.058a1 1 0 0 0-.506 1.027l.29 1.902a1 1 0 0 0 .457.696l.867.544a.6.6 0 0 1 .28.518l-.019 1.198a.6.6 0 0 0 .669.606l3.366-.39a1 1 0 0 0 .514-.216l3.455-2.796a1 1 0 0 0 .146-.146l3.202-3.936a.6.6 0 0 1 .443-.22l1.876-.07a1 1 0 0 0 .922-.717l.887-2.999q.085-.286.249-.535l1.505-2.278a2 2 0 0 1 .92-.753l.83-.334a1 1 0 0 0 .625-.942l-.02-1.325a1 1 0 0 0-.361-.756z"/></svg>`,
})
export class TtPointFortin {
  protected readonly b = inject(GeoIconBase);
}
