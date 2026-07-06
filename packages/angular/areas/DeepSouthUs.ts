// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-deep-south-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.245 13.548 1.2 11.144l3.176.05.081-3.39h2.166v1.388a.6.6 0 0 0 .298.519l.773.45c.15.088.32.135.493.137l1.986.02.024-2.514c1.74.166 8.243-.764 11.65-1.256a.6.6 0 0 1 .631.35l.156.353a.6.6 0 0 1-.12.663l-2.408 2.456a1 1 0 0 0-.285.729l.025.876a1 1 0 0 0 .125.457l1.116 2.012a1 1 0 0 1 .118.358l.12.937a.902.902 0 0 1-1.671.574l-.813-1.375a1 1 0 0 1-.132-.39l-.07-.584a1 1 0 0 0-.261-.563l-.418-.447a1 1 0 0 0-.707-.318l-2.205-.053a1 1 0 0 0-.92.554l-.19.382a.6.6 0 0 1-.673.317l-1.88-.439a1 1 0 0 0-.768.133l-1.57 1.01a1 1 0 0 0-.46.855l.016 1.11a.6.6 0 0 1-.816.568L7 16.769a.6.6 0 0 1-.351-.365l-.7-2.044a1 1 0 0 0-1.245-.63l-.398.125a1 1 0 0 1-1.06-.307Z"/></svg>`,
})
export class DeepSouthUs {
  protected readonly b = inject(GeoIconBase);
}
