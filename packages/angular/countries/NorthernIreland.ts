// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-northern-ireland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.18 7.511 6.64 9.68a1 1 0 0 1-.95.758l-1.298.026a.996.996 0 0 0-.858 1.466l.338.63a.75.75 0 0 1-.396 1.056l-1.538.581a.6.6 0 0 0-.272.916l1.97 2.691a1 1 0 0 0 .545.374l3.284.896a1 1 0 0 0 .975-.262l.582-.59a1 1 0 0 0 .193-1.126l-.086-.186a1 1 0 0 1 .219-1.151l.564-.532a.6.6 0 0 1 .933.14l2.414 4.243a.6.6 0 0 0 .753.256l1.444-.603a1 1 0 0 1 .88.053l.962.547a1 1 0 0 0 1.088-.065l.409-.302a1 1 0 0 0 .405-.811l-.002-.383a1 1 0 0 1 1.069-1.005l.47.033a1 1 0 0 0 .848-.37l.5-.619a1 1 0 0 0 .175-.328l.43-1.37a1 1 0 0 0-.035-.692l-.602-1.408a1 1 0 0 0-1.267-.545l-.83.308a.784.784 0 0 1-.684-1.403l.572-.352a1 1 0 0 0 .205-1.536l-1.415-1.51a1 1 0 0 1-.256-.515l-.317-1.847a1 1 0 0 0-.787-.811l-2.173-.441a1 1 0 0 0-.681.104l-1.348.743a1 1 0 0 1-.7.1l-1.088-.242a.6.6 0 0 0-.696.386l-.305.867a1 1 0 0 1-1.105.654l-.372-.06a1 1 0 0 0-.708.15l-.495.323a1 1 0 0 0-.423.596Z"/></svg>`,
})
export class NorthernIreland {
  protected readonly b = inject(GeoIconBase);
}
