// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bq-sint-eustatius',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.398 20.142-.801-2.978a1 1 0 0 0-.41-.571l-2.5-1.672a1 1 0 0 1-.325-.357l-.693-1.287a1 1 0 0 1-.114-.377l-.152-1.572a1 1 0 0 0-.149-.435L2.53 9.737a1 1 0 0 1-.153-.531v-.922a1 1 0 0 1 .19-.586l.696-.963a1 1 0 0 0 .128-.932l-.227-.615a1 1 0 0 1-.059-.418l.065-.89.357-1.69a1 1 0 0 1 1.197-.769l.83.186a1 1 0 0 1 .664.506l.238.447a1 1 0 0 1 .109.339l.157 1.197a1 1 0 0 0 .51.745l.143.079a1 1 0 0 0 .833.06l.645-.243a1 1 0 0 1 1.228.455l.282.513a1 1 0 0 1 .044.872l-.368.869a1 1 0 0 0 .185 1.067l.79.857a1 1 0 0 0 .26.203l1.228.66a1 1 0 0 0 .77.075l.616-.19a1 1 0 0 1 .796.088l.683.394a1 1 0 0 1 .357.352l.49.816c.078.13.185.24.312.323l1.833 1.196a1 1 0 0 0 .546.162h.487a1 1 0 0 1 .628.222l.777.628a1 1 0 0 1 .325.476l.419 1.327a1 1 0 0 1 .019.535l-.497 2.071a1 1 0 0 1-.097.25l-1.316 2.385a1 1 0 0 1-.603.479l-3.322.94a1 1 0 0 1-.273.038h-3.943a1 1 0 0 1-.666-.255l-2.145-1.918a1 1 0 0 1-.299-.485Z"/></svg>`,
})
export class BqSintEustatius {
  protected readonly b = inject(GeoIconBase);
}
