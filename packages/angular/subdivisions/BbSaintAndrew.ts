// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb-saint-andrew',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M19.651 14.176a1 1 0 0 0-.082-.968L17.02 9.42l-2.554-4.692a7 7 0 0 1-.621-1.567l-.338-1.287a.6.6 0 0 0-.51-.444l-1.548-.183a.6.6 0 0 0-.594.303l-.938 1.68a1 1 0 0 1-1.257.436L6.123 2.613a.6.6 0 0 0-.64.117l-.998.936a.6.6 0 0 0-.095.761l.916 1.429a1 1 0 0 1 .156.592l-.513 9.687a1 1 0 0 0 .177.623l1.1 1.586a.6.6 0 0 1 .052.595l-.313.676a.6.6 0 0 0 .478.849l2.864.318a1 1 0 0 1 .662.36l1.09 1.327a.3.3 0 0 0 .49-.037l.46-.776a2 2 0 0 0 .26-.75l.144-1.044a2 2 0 0 1 .26-.748l1.128-1.902a1 1 0 0 1 .846-.49l2.584-.037a2 2 0 0 0 .85-.202l.034-.017a2 2 0 0 0 .947-.978z"/></svg>`,
})
export class BbSaintAndrew {
  protected readonly b = inject(GeoIconBase);
}
