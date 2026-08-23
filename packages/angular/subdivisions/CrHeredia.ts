// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cr-heredia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.46 1.325a.6.6 0 0 0-.574.595l-.113 16.877a3 3 0 0 1-.128.848l-.675 2.23a.6.6 0 0 0 .512.77l1.006.107a2 2 0 0 0 .898-.112l1.35-.496a1 1 0 0 0 .615-.66l.99-3.414a2 2 0 0 1 .687-1.018l2.355-1.845a1 1 0 0 0 .359-1.009l-.586-2.576a1 1 0 0 1 .198-.85l.597-.737a1 1 0 0 0 .222-.674l-.16-3.68a1 1 0 0 1 .655-.982l1.872-.683a.6.6 0 0 0 .3-.886l-.61-.96a.6.6 0 0 0-.715-.241l-3.328 1.234a1 1 0 0 1-1.04-.215l-1.519-1.453a1 1 0 0 0-.734-.276z"/></svg>`,
})
export class CrHeredia {
  protected readonly b = inject(GeoIconBase);
}
