// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gd',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.201 20.35-1.664 1.53a.25.25 0 0 0 .13.43l2.918.462a.5.5 0 0 0 .328-.06L10.54 21.2a.5.5 0 0 0 .213-.243l1.493-3.622a.5.5 0 0 0 .033-.118l.642-4.426a.5.5 0 0 0-.445-.569l-2.345-.236a.5.5 0 0 0-.385.126L7.59 14.058a.5.5 0 0 0-.104.133L6.122 16.7a.5.5 0 0 0-.058.29l.297 2.942a.5.5 0 0 1-.16.418ZM16.992 3.327l-1.312.444a.5.5 0 0 0-.336.408l-.182 1.387a.5.5 0 0 0 .693.525l2.958-1.268a.5.5 0 0 0 .288-.337l.611-2.427a.5.5 0 0 0-.398-.615l-.967-.17a.5.5 0 0 0-.56.33l-.482 1.411a.5.5 0 0 1-.313.312Z"/></svg>`,
})
export class Gd {
  protected readonly b = inject(GeoIconBase);
}
