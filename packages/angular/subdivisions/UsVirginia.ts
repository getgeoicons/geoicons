// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-virginia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.853 16.205a.3.3 0 0 0 .29-.38l-.882-3.156a1 1 0 0 0-.36-.528l-1.103-.835a1 1 0 0 1-.328-1.16l.137-.351a.6.6 0 0 0-.295-.757l-2.035-.997a.6.6 0 0 0-.785.241l-1.115 1.948a.6.6 0 0 1-.575.3l-.472-.043a.6.6 0 0 0-.597.342L9.73 12.964a1 1 0 0 1-.644.54l-1.652.447a1 1 0 0 1-.912-.205l-.584-.5a.3.3 0 0 0-.362-.022L1.2 16.157z"/></svg>`,
})
export class UsVirginia {
  protected readonly b = inject(GeoIconBase);
}
