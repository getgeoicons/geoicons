// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-ciudad-de-mexico',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.079 21.655a.6.6 0 0 0 .698-.483l.86-4.72a1.5 1.5 0 0 0 .015-.44l-.41-3.585a1 1 0 0 0-.399-.69l-2.614-1.932a1 1 0 0 1-.373-1.06l.224-.847a1 1 0 0 0-.011-.551l-.383-1.239a1 1 0 0 0-.528-.608l-1.364-.646A.6.6 0 0 1 13.54 4l.547-.895a.6.6 0 0 0-.088-.737l-.561-.562a.6.6 0 0 0-.968.17l-.754 1.613a1 1 0 0 1-.32.385l-1.114.809a1 1 0 0 0-.409.717l-.166 1.792a2 2 0 0 1-.94 1.517l-2.08 1.287a2 2 0 0 0-.704.742l-1.334 2.44a1 1 0 0 0 .107 1.117l1.342 1.624a3 3 0 0 1 .544.997l.638 1.996a1.5 1.5 0 0 0 .499.72l1.284 1.014c.24.19.533.302.838.32l2.478.153a.6.6 0 0 1 .531.404l.136.397a.6.6 0 0 0 .454.395l1.577.305a.6.6 0 0 0 .633-.286l.285-.49a1 1 0 0 1 1.044-.479z"/></svg>`,
})
export class MxCiudadDeMexico {
  protected readonly b = inject(GeoIconBase);
}
