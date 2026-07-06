// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.986 7.168-.081.23a1 1 0 0 0 .248 1.052l2.002 1.932a1 1 0 0 1 .24.362l.619 1.619a1 1 0 0 0 .368.467l.606.416a1 1 0 0 0 .988.082l.095-.044a1 1 0 0 1 1.031.114l.357.274a1 1 0 0 1 .318.417L9.51 15.9a1 1 0 0 0 .3.403l1.557 1.256a1 1 0 0 0 .385.192l2.15.537a1 1 0 0 1 .243.096l5.263 2.924a1 1 0 0 0 .486.126h2.522a.5.5 0 0 0 .372-.832l-3.034-3.394a1 1 0 0 1-.185-.3l-.51-1.298a1 1 0 0 0-.354-.452l-1.614-1.139a1 1 0 0 0-.576-.183h-2.201a1 1 0 0 1-.267-.036l-3.088-.855a1 1 0 0 1-.365-.189l-2.09-1.703a1 1 0 0 1-.2-.219L7.162 9.13a1 1 0 0 1-.169-.557v-1.57a1 1 0 0 0-.132-.496l-.889-1.556a1 1 0 0 0-.668-.484l-1.177-.241a1 1 0 0 1-.388-.171l-1.498-1.09a.788.788 0 0 0-1.04 1.175l.285.306a1 1 0 0 1 .254.514l.289 1.708a1 1 0 0 1-.043.5Z"/></svg>`,
})
export class Cw {
  protected readonly b = inject(GeoIconBase);
}
