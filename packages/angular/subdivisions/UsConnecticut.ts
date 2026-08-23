// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-connecticut',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.17 4.08a.3.3 0 0 0-.306.278l-.737 10.14a1 1 0 0 0 .088.49l.609 1.328a.3.3 0 0 1-.117.381l-2.279 1.386a.3.3 0 0 0-.117.382l.42.912a.6.6 0 0 0 .797.294l6.804-3.159c.323-.15.67-.241 1.025-.27l5.848-.467 5.21-.847a1 1 0 0 0 .702-.481l.542-.925a1 1 0 0 0 .138-.519l-.102-8.248a.3.3 0 0 0-.293-.296l-9.786-.243-.231 1.024-1.724.092.046-1.132z"/></svg>`,
})
export class UsConnecticut {
  protected readonly b = inject(GeoIconBase);
}
