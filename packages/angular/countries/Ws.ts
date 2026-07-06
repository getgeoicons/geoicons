// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ws',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.089 12.907-3.602-3.97a.5.5 0 0 1-.019-.65l.313-.387a.5.5 0 0 1 .556-.158l.735.26a.5.5 0 0 0 .287.015l3.866-.955a.5.5 0 0 1 .153-.013l1.57.103a.5.5 0 0 1 .387.228l1.891 2.94a.5.5 0 0 1 .047.448l-.751 1.97a.5.5 0 0 1-.659.283l-1-.414a.5.5 0 0 0-.27-.031l-3.055.488a.5.5 0 0 1-.45-.158Zm7.665.293-.44.51a.5.5 0 0 0 .066.718l1.986 1.58a.5.5 0 0 0 .41.1l.934-.187a.5.5 0 0 1 .402.093l.883.678a.5.5 0 0 0 .289.103l4.749.15a.5.5 0 0 0 .48-.316l.148-.373a.5.5 0 0 0-.162-.581l-2.436-1.858a.5.5 0 0 0-.13-.071l-3.747-1.389a.5.5 0 0 0-.291-.017l-2.881.701a.5.5 0 0 0-.26.16Z"/></svg>`,
})
export class Ws {
  protected readonly b = inject(GeoIconBase);
}
