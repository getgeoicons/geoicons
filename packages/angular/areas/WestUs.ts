// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-west-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.703 4.312 2.43 2.46a.6.6 0 0 1 .36-.64l1.297-.55a.6.6 0 0 1 .342-.038c4.888.862 11.71.544 14.539.273l.731 9.474 2.133-.152.548 4.753-1.401.122.518 5.88-3.302.258a1 1 0 0 0-.382.109l-1.264.655a1 1 0 0 1-.428.112l-2.438.077a1 1 0 0 1-.44-.087l-3.245-1.45a1 1 0 0 0-.437-.087l-2.297.068-.72-1.321a1 1 0 0 0-.5-.448l-1.46-.594a.6.6 0 0 1-.316-.3l-2.34-4.954a1 1 0 0 1-.094-.382l-.207-4.686a1 1 0 0 1 .038-.321l1.009-3.497a1 1 0 0 0 .029-.422Z"/></svg>`,
})
export class WestUs {
  protected readonly b = inject(GeoIconBase);
}
