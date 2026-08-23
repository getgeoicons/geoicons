// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm-saint-elizabeth',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.194 1.219a1 1 0 0 0-.404.046L5.173 3.109a1 1 0 0 0-.477.335L2.755 5.93a.6.6 0 0 0 .045.79l.57.58a.6.6 0 0 1 .128.646L2.02 11.594a1 1 0 0 0-.022.692l.153.459a1 1 0 0 0 1.07.676l2.043-.25a1 1 0 0 1 .562.095l1.246.61a1 1 0 0 1 .56.876l.063 2.72a1 1 0 0 0 .506.846l1.163.66a1 1 0 0 1 .477.625l.166.663a1 1 0 0 0 .344.535l2.191 1.763a1 1 0 0 0 .672.22l7.781-.347a1 1 0 0 0 .942-1.16l-1.147-7.026-1.94-6.925a1 1 0 0 1-.037-.226l-.201-4.679a.6.6 0 0 0-.545-.571z"/></svg>`,
})
export class JmSaintElizabeth {
  protected readonly b = inject(GeoIconBase);
}
