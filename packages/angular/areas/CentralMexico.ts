// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-central-mexico',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.995 9.995-1.72 4.362a.6.6 0 0 0-.016.391l.41 1.376a.6.6 0 0 0 .858.358l1.174-.628a1 1 0 0 1 1.179.174l1.773 1.774a1 1 0 0 0 .707.293h2.433a1 1 0 0 0 .394-.081l1.685-.723a1 1 0 0 0 .494-.46l.271-.524a.6.6 0 0 1 .933-.173l1.378 1.23a.6.6 0 0 1 .198.388l.124 1.239a.6.6 0 0 0 .228.413l.007.006a.6.6 0 0 0 .653.054l.72-.387a.6.6 0 0 1 .746.145l.907 1.096a.6.6 0 0 0 .414.215l2.407.193a.6.6 0 0 0 .398-.111l.581-.418a.6.6 0 0 0 .15-.82l-1.155-1.736a.6.6 0 0 0-.44-.265l-1.198-.12a.6.6 0 0 1-.404-.217l-.742-.906a.6.6 0 0 0-.318-.202l-2.124-.534a1 1 0 0 1-.643-.507l-1.526-2.925a1 1 0 0 0-.086-.137l-2.412-3.216a1 1 0 0 1-.2-.588l-.019-1.563a1 1 0 0 0-.149-.513l-.958-1.555a1 1 0 0 0-.561-.433l-1.453-.44a.6.6 0 0 0-.77.638l.303 2.824a.6.6 0 0 1-.565.664l-1.752.092a1 1 0 0 0-.697.336L3.176 9.7a1 1 0 0 0-.181.295Z"/></svg>`,
})
export class CentralMexico {
  protected readonly b = inject(GeoIconBase);
}
