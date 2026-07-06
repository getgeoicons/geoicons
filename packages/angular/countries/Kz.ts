// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.462 10.64-.219 1.14a.5.5 0 0 0 .1.407l.954 1.193a.5.5 0 0 0 .526.17l.83-.235a.5.5 0 0 1 .547.197l.018.026a.5.5 0 0 1-.031.61l-.685.8a.5.5 0 0 0-.061.56l.57 1.072a.5.5 0 0 0 .323.252l1.24.3a.5.5 0 0 0 .617-.491l-.019-1.64a.5.5 0 0 1 .339-.48l.74-.252a.5.5 0 0 1 .488.096l1.48 1.282a.5.5 0 0 0 .347.122l1.048-.043a.5.5 0 0 1 .42.2l1.134 1.508a.5.5 0 0 0 .753.053l1.081-1.082a.5.5 0 0 1 .412-.143l3.895.453a.5.5 0 0 0 .555-.547l-.125-1.207a.5.5 0 0 1 .12-.378l1.03-1.19a.5.5 0 0 1 .49-.16l.686.158a.5.5 0 0 0 .53-.213l.93-1.41a.5.5 0 0 0-.145-.694l-1.716-1.121a.5.5 0 0 0-.312-.08l-1.236.094a.5.5 0 0 1-.475-.257l-1.306-2.364a.5.5 0 0 0-.62-.224l-1.184.464a.5.5 0 0 1-.434-.034l-2.308-1.34a.5.5 0 0 0-.387-.048l-3.265.921a.5.5 0 0 0-.36.407L8.53 9.143a.5.5 0 0 1-.56.422L3.934 9.04a.5.5 0 0 0-.33.072L1.688 10.31a.5.5 0 0 0-.226.33Z"/></svg>`,
})
export class Kz {
  protected readonly b = inject(GeoIconBase);
}
