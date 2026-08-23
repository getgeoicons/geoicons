// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-kentucky',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.251 13.518a.6.6 0 0 0 .118-.884l-.908-1.07a1 1 0 0 1-.236-.588l-.023-.392a2 2 0 0 0-.346-1.011l-.42-.616a1 1 0 0 0-.95-.428l-1.393.174a1 1 0 0 1-.648-.141l-1.784-1.1a1 1 0 0 0-1.032-.01l-1.651.97a1 1 0 0 0-.334.32l-1.228 1.906a1 1 0 0 1-.766.456l-4.595.343a.6.6 0 0 0-.488.323l-1.229 2.374a.6.6 0 0 1-.643.314l-.885-.166a.6.6 0 0 0-.661.353L1.567 16a.6.6 0 0 0 .563.837l15.548-.304a.6.6 0 0 0 .328-.105z"/></svg>`,
})
export class UsKentucky {
  protected readonly b = inject(GeoIconBase);
}
