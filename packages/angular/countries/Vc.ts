// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vc',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.268 2.468 9.18 6.583a.5.5 0 0 0-.052.175L8.98 8.18a.5.5 0 0 1-.293.404l-1.43.638a.5.5 0 0 0-.24.23l-1.142 2.233a.5.5 0 0 0-.05.156l-.439 3.037a.5.5 0 0 0 .013.202l.665 2.46a.5.5 0 0 0 .076.162l1.49 2.075a.5.5 0 0 0 .38.208l1.013.053a.5.5 0 0 1 .472.47l.034.576a.5.5 0 0 0 .528.47l.805-.045a.5.5 0 0 1 .392.155l.85.898a.5.5 0 0 0 .341.156l1.664.07a.5.5 0 0 0 .42-.2l1.705-2.265a.5.5 0 0 0 .098-.266l.127-1.79a.5.5 0 0 1 .04-.161l2.09-4.906a.5.5 0 0 0 .04-.206l-.14-7.08a.5.5 0 0 0-.038-.182l-1.289-3.114a.5.5 0 0 0-.164-.21L15.502 1.3a.5.5 0 0 0-.298-.099h-1.962a.5.5 0 0 0-.273.08l-1.528.995a.5.5 0 0 0-.173.193Z"/></svg>`,
})
export class Vc {
  protected readonly b = inject(GeoIconBase);
}
