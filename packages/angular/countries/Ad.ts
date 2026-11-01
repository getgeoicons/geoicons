// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ad',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.114 4.17-.775-.276a1 1 0 0 0-1.211.458l-.2.362a1 1 0 0 0-.052.863l.043.105a1 1 0 0 1-.4 1.23l-1.418.876a1 1 0 0 0-.412 1.198l.16.434a1 1 0 0 1-.185 1.005l-1.244 1.42a.587.587 0 0 0 .638.94l.745-.262a1 1 0 0 1 1.234.51l.403.837a.8.8 0 0 1-.328 1.043l-1.456.823a.8.8 0 0 0-.359.968l1.074 2.976a1 1 0 0 0 .896.66l4.308.192a.8.8 0 0 0 .76-.458l.49-1.04a1 1 0 0 1 .767-.563l4.033-.563a1 1 0 0 0 .838-.775l.27-1.217a.6.6 0 0 1 .753-.446l1.13.33a1 1 0 0 0 1.058-.331l.406-.502a1 1 0 0 0 .213-.49l.334-2.387a1 1 0 0 1 .516-.742l2.234-1.202a.6.6 0 0 0 .293-.69l-.03-.108a.6.6 0 0 0-.52-.435l-1.975-.188a.8.8 0 0 1-.712-.938l.13-.723a.6.6 0 0 0-.52-.701l-6.89-.832a1 1 0 0 1-.712-.438l-.593-.89a1 1 0 0 0-.532-.398l-.747-.235a1 1 0 0 0-.772.072l-.875.469a1 1 0 0 1-.808.06Z"/></svg>`,
})
export class Ad {
  protected readonly b = inject(GeoIconBase);
}
