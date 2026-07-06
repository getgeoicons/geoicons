// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cy',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.35 17.75-2.083-.892a.5.5 0 0 1-.251-.238L1.45 13.45a.25.25 0 0 1 .292-.351l1.745.495a.5.5 0 0 0 .528-.17l.68-.854a.5.5 0 0 1 .497-.178l1.45.314a.5.5 0 0 0 .541-.242l.355-.625a.5.5 0 0 0 .05-.375l-.32-1.209a.25.25 0 0 1 .313-.303l2.682.793a.5.5 0 0 0 .174.02l2.86-.186a.5.5 0 0 0 .195-.054l8.238-4.203a.5.5 0 0 1 .634.155l.118.165a.5.5 0 0 1-.154.722l-4.226 2.48a.5.5 0 0 0-.11.086l-.705.744a.5.5 0 0 1-.34.155l-.572.026a.5.5 0 0 0-.434.297l-.268.603a.5.5 0 0 0 .071.52l1.683 2.046a.25.25 0 0 1-.176.408l-1.666.118a.5.5 0 0 1-.294-.071l-.519-.315a.5.5 0 0 0-.388-.055l-.643.171a.5.5 0 0 0-.364.396l-.152.862a.5.5 0 0 1-.323.383l-4.44 1.595a.5.5 0 0 1-.338 0l-1.227-.438a.5.5 0 0 0-.378.017l-.762.353a.5.5 0 0 1-.407.006Z"/></svg>`,
})
export class Cy {
  protected readonly b = inject(GeoIconBase);
}
