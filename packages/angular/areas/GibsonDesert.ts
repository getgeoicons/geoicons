// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gibson-desert',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.703 15.337 2.163 2.911a1 1 0 0 0 .599.383l1.905.397a1 1 0 0 1 .625.42l1.659 2.465a1 1 0 0 0 1.442.232l3.987-3.088a.6.6 0 0 0-.278-1.068l-1.025-.154a1 1 0 0 1-.844-1.106l.013-.112a1 1 0 0 1 .562-.785l.891-.426a1 1 0 0 0 .513-.57l1.075-3.065a1 1 0 0 1 .398-.506l4.305-2.804a1 1 0 0 0 .316-1.346l-.401-.68a1 1 0 0 0-.845-.492l-2.982-.05a.6.6 0 0 1-.587-.652l.076-.888a1 1 0 0 0-.366-.862l-1.297-1.053a1 1 0 0 0-.384-.193l-3.841-.976a1 1 0 0 0-.542.014l-4.43 1.37a.6.6 0 0 0-.353.854l.45.849a1 1 0 0 1-.383 1.334l-.436.252a1 1 0 0 0-.446.544l-1.683 4.947a1 1 0 0 0-.053.322v2.985a1 1 0 0 0 .197.597Z"/></svg>`,
})
export class GibsonDesert {
  protected readonly b = inject(GeoIconBase);
}
