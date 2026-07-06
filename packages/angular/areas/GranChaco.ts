// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gran-chaco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.053 22.224-1.338-2.409a1 1 0 0 1 .19-1.215l2.01-1.886a1 1 0 0 0 .314-.676l.22-4.134a1 1 0 0 1 .384-.736l1.022-.796a1 1 0 0 0 .309-.403l1.063-2.543a1 1 0 0 0 .077-.363l.076-3.33a1 1 0 0 1 .204-.582l.917-1.207a1 1 0 0 1 1.346-.231L17.68 4.89a1 1 0 0 1 .368 1.234l-.508 1.17a1 1 0 0 0 0 .798l1.433 3.283a1 1 0 0 1-.058.912l-.56.937a.954.954 0 0 0 .427 1.359c.485.22.697.793.471 1.275l-.062.133a1 1 0 0 1-.617.533l-1.549.468a1 1 0 0 0-.564.435l-.674 1.1a1 1 0 0 1-1.248.397l-1.414-.61a1 1 0 0 0-1.335.574l-.215.588a1 1 0 0 1-.836.65l-.89.093a1 1 0 0 0-.83.634l-.492 1.275a1 1 0 0 1-.979.64l-.666-.031a1 1 0 0 1-.83-.513Z"/></svg>`,
})
export class GranChaco {
  protected readonly b = inject(GeoIconBase);
}
