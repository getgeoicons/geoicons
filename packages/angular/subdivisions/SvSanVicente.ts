// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sv-san-vicente',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.915 6.02a1 1 0 0 0-.323.847l.141 1.319a1 1 0 0 0 .927.89l.578.04a1 1 0 0 1 .86.621l.544 1.34a2 2 0 0 1 .113 1.12L7.43 13.93a1 1 0 0 0 .16.753l1.187 1.713a1 1 0 0 1 .146.82l-.447 1.724a1 1 0 0 1-.29.484L6.33 21.136a.6.6 0 0 0 .132.975l.937.481a.6.6 0 0 0 .713-.124l2.852-3.061a1 1 0 0 0 .268-.689l-.013-1.82a1 1 0 0 1 .24-.657l1.322-1.543a1 1 0 0 0 .231-.512l.334-2.385c.05-.354.194-.688.416-.968l.551-.692a2 2 0 0 1 1.022-.679l1.415-.399a1 1 0 0 0 .509-.337l1.861-2.327a1 1 0 0 0 .166-.947l-.495-1.454a1 1 0 0 0-1.017-.675l-1.142.081a1 1 0 0 1-.701-.22l-1.63-1.325a2 2 0 0 0-1.115-.442l-2.442-.179a3 3 0 0 0-1.029.104l-3.153.883a1 1 0 0 0-.73.969l.009 1.537a1 1 0 0 1-.329.746z"/></svg>`,
})
export class SvSanVicente {
  protected readonly b = inject(GeoIconBase);
}
