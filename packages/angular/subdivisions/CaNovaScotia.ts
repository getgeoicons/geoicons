// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-nova-scotia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.966 10.041-4.29-1.423a.6.6 0 0 0-.61.141l-2.15 2.115a1 1 0 0 0-.295.612l-.097.958a.6.6 0 0 1-.213.401l-3.742 3.112a1 1 0 0 0-.36.786l.036 2.107a1 1 0 0 0 .324.72l1.001.916a1 1 0 0 0 1.194.118l2.165-1.315a2 2 0 0 0 .604-.567l1.518-2.183a1 1 0 0 1 .782-.428l1.324-.053a1 1 0 0 0 .341-.074l7.337-3.017a1 1 0 0 0 .617-.85l.008-.106a1 1 0 0 1 .903-.92l.828-.079a1 1 0 0 0 .466-.167l1.65-1.115a1 1 0 0 0 .436-.924l-.024-.248a1 1 0 0 0-.516-.782l-.868-.473a1 1 0 0 1-.486-1.138l.331-1.23a.6.6 0 0 0-.172-.596l-.872-.805a.6.6 0 0 0-.936.159l-1.79 3.356q-.186.35-.276.736l-.259 1.123a1 1 0 0 1-1.104.767l-.662-.087a1 1 0 0 0-.49.059l-.98.378a1 1 0 0 1-.674.016Z"/></svg>`,
})
export class CaNovaScotia {
  protected readonly b = inject(GeoIconBase);
}
