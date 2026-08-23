// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-west-virginia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.726 10.238a.3.3 0 0 0-.03-.302l-1.23-1.701a1 1 0 0 0-.922-.407l-1.932.216a2 2 0 0 0-1.022.423l-2.803 2.23a.3.3 0 0 1-.487-.243l.067-2.433a.3.3 0 0 0-.301-.309l-2.99.02a.3.3 0 0 1-.301-.299l-.02-4.914a.6.6 0 0 0-.599-.597h-.191a.6.6 0 0 0-.586.465l-1.306 5.7a2 2 0 0 1-.745 1.15l-3.18 2.397a1 1 0 0 0-.181.176L1.51 14.9a1 1 0 0 0-.216.573L1.22 16.97a1 1 0 0 0 .229.687l2.803 3.39a2 2 0 0 0 2.134.636l4.286-1.33a1 1 0 0 0 .601-.513l2.466-5.012a.6.6 0 0 1 .744-.299l1.069.39a.6.6 0 0 0 .69-.211l3.285-4.523a.3.3 0 0 1 .438-.051l1.706 1.467a.3.3 0 0 0 .467-.101z"/></svg>`,
})
export class UsWestVirginia {
  protected readonly b = inject(GeoIconBase);
}
