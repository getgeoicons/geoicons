// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-au-mainland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.324 18.238-.946-.351a.5.5 0 0 1-.325-.506l.152-2.053a.5.5 0 0 0-.035-.223l-.924-2.3a.5.5 0 0 1-.034-.234l.223-2.285a.5.5 0 0 1 .355-.431l3.24-.964a.5.5 0 0 0 .246-.164l2.5-3.08a.5.5 0 0 1 .654-.108l.69.433a.5.5 0 0 0 .652-.105l1.437-1.739a.5.5 0 0 1 .481-.172l1.713.334a.5.5 0 0 1 .32.768l-.42.631a.5.5 0 0 0 .172.714l1.756.982a.5.5 0 0 0 .73-.323l.713-3.08a.25.25 0 0 1 .474-.041l1.838 4.354a.5.5 0 0 0 .099.15l3.178 3.338a.5.5 0 0 1 .13.252l.382 2.027a.5.5 0 0 1-.022.264l-2.005 5.483a.5.5 0 0 1-.334.31l-2.18.616a.5.5 0 0 1-.25.005l-2.085-.49a.5.5 0 0 1-.367-.352l-.313-1.118a.5.5 0 0 0-.345-.346l-1.737-.492a.5.5 0 0 1-.198-.11l-1.96-1.768a.5.5 0 0 0-.493-.103l-6.83 2.282a.5.5 0 0 1-.332-.005Z"/></svg>`,
})
export class AuMainland {
  protected readonly b = inject(GeoIconBase);
}
