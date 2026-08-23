// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-granma',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.229 5.174a.6.6 0 0 0-.608.402l-.148.428a2 2 0 0 0-.106.787l.062.944a.8.8 0 0 0 .522.698l.94.347c.445.164.713.62.64 1.088a2 2 0 0 1-.91 1.386l-5.15 3.24q-.475.299-.85.716l-1.627 1.815a.98.98 0 0 0 .228 1.495c.367.218.795.311 1.22.264l3.011-.335a2 2 0 0 0 1.003-.406l.268-.207a1 1 0 0 1 .68-.207l2.201.15a1 1 0 0 0 1.031-.73l.009-.03a1 1 0 0 1 .56-.648l1.596-.703a2 2 0 0 1 1.04-.156l2.367.28a2 2 0 0 0 1.146-.206l1.085-.555a1 1 0 0 0 .53-.725l.438-2.612a1 1 0 0 1 .604-.76l.89-.367a1 1 0 0 0 .553-1.28l-.15-.392a1 1 0 0 0-.522-.555l-5.521-2.5a3 3 0 0 0-1.035-.26z"/></svg>`,
})
export class CuGranma {
  protected readonly b = inject(GeoIconBase);
}
