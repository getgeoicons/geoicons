// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ke',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.675 20.701 2.646 1.777a.5.5 0 0 0 .73-.199l1.735-3.615a.5.5 0 0 1 .127-.165l2.594-2.202a.5.5 0 0 0 .1-.647l-.806-1.283a.5.5 0 0 1-.076-.263l-.04-7.668a.5.5 0 0 1 .106-.31l2.223-2.845-1.692.234a.5.5 0 0 1-.398-.12l-.573-.501a.5.5 0 0 0-.536-.079l-1.398.635a.5.5 0 0 0-.197.161l-.65.894a.5.5 0 0 1-.487.2l-2.624-.44a.5.5 0 0 1-.206-.086L9.924 2.527a.5.5 0 0 0-.289-.092H7.77a.5.5 0 0 1-.286-.09l-1.37-.956a.5.5 0 0 0-.551-.013L3.476 2.684a.5.5 0 0 0-.18.653l2.287 4.43a.5.5 0 0 1-.032.512L3.216 11.68a.5.5 0 0 0 .052.63l.615.64a.5.5 0 0 1 .06.618l-.436.676a.5.5 0 0 0 .173.706l7.281 4.136a.5.5 0 0 1 .237.306l.272 1.023a.5.5 0 0 0 .205.286Z"/></svg>`,
})
export class Ke {
  protected readonly b = inject(GeoIconBase);
}
