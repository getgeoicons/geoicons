// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-td',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.097 20.04 1.543 2.191a1 1 0 0 0 1.073.391l3.243-.857a3 3 0 0 0 .962-.448l4.072-2.87a1 1 0 0 0 .288-1.32l-.809-1.394a1 1 0 0 1-.09-.8l.812-2.602a.6.6 0 0 1 .588-.42l.544.013a.6.6 0 0 0 .615-.6V7.237a1 1 0 0 0-.539-.887L8.734 1.333a.6.6 0 0 0-.52-.016l-.68.303a.6.6 0 0 0-.328.732l.92 2.849a2 2 0 0 1 .093.72l-.223 4.22a1 1 0 0 1-.266.629l-2.32 2.496a.6.6 0 0 0-.032.779l1.547 1.97a1 1 0 0 1 .156.286l.868 2.466a.3.3 0 0 1-.2.389l-1.488.423a.3.3 0 0 0-.164.461Z"/></svg>`,
})
export class Td {
  protected readonly b = inject(GeoIconBase);
}
