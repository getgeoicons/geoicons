// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb-saint-peter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.439 9.642a.6.6 0 0 0-.162.564l.497 2.121a2 2 0 0 1 .046.625l-.393 4.635a2 2 0 0 0 .136.911l.311.778a2 2 0 0 1 .134.932l-.101 1.071a.3.3 0 0 0 .306.329l4.95-.133a.3.3 0 0 0 .29-.343l-.365-2.549a.3.3 0 0 1 .426-.313l1.44.684a2 2 0 0 0 .755.191l3.532.183a1 1 0 0 0 .74-.273l.198-.187a1 1 0 0 0 .311-.752l-.176-6.74a2 2 0 0 0-.477-1.246l-.515-.605a.8.8 0 0 1 .023-1.064l.363-.39a.8.8 0 0 1 .784-.23l3.415.879a1 1 0 0 0 1.084-.418l.9-1.363a1 1 0 0 1 .804-.449l1.488-.046a.611.611 0 0 0 .497-.94l-1.76-2.753a.6.6 0 0 0-.657-.258l-4.439 1.154a2 2 0 0 0-.685.327l-.745.55a2 2 0 0 1-1.08.39l-2.735.147a1 1 0 0 0-.647.286L8.186 7.064a1 1 0 0 1-.995.243l-2.13-.654a.8.8 0 0 0-.797.196z"/></svg>`,
})
export class BbSaintPeter {
  protected readonly b = inject(GeoIconBase);
}
