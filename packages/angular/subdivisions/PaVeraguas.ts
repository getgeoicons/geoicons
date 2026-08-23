// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pa-veraguas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.775 15.644-.93-2.826a1 1 0 0 1 .043-.736l1.172-2.51a2 2 0 0 0 .18-.67l.1-1.137a1 1 0 0 1 .382-.7l1.297-1.012a1 1 0 0 1 .8-.195l.753.142a.6.6 0 0 0 .71-.597l-.025-2.184a1 1 0 0 1 .727-.974l3.19-.907a1 1 0 0 1 .887.172l1.292 1.002a1 1 0 0 1 .322 1.145l-.587 1.548a1 1 0 0 0 .079.87l1.19 1.973a1 1 0 0 1 .134.658l-.219 1.532a1 1 0 0 1-.365.64l-.87.695a3 3 0 0 0-.73.854l-1.136 1.988a1 1 0 0 0-.044.906l1.093 2.432a1 1 0 0 0 .436.47l.53.288a1 1 0 0 1 .427.449l1.272 2.67a.7.7 0 0 1-.59 1l-2.466.149a1 1 0 0 1-.642-.185l-.025-.018a1 1 0 0 1-.333-1.217l.169-.384a2 2 0 0 0 .052-1.483l-1.504-4.188a.967.967 0 0 0-1.849.096l-.383 1.556a.6.6 0 0 1-.782.422l-3.14-1.104a1 1 0 0 1-.617-.63ZM4.77 17.387l-.618.652a1 1 0 0 0-.17 1.136l.402.804a2 2 0 0 0 1.127.992l1.216.427a.788.788 0 0 0 .947-1.13l-1.526-2.71a.863.863 0 0 0-1.377-.17Z"/></svg>`,
})
export class PaVeraguas {
  protected readonly b = inject(GeoIconBase);
}
