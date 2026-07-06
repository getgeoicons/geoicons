// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gulf-of-guinea',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m18.89 19.936-4.952-.263.954-2.583a1 1 0 0 0-.033-.772l-1.781-3.785a1 1 0 0 1-.093-.494l.062-.901a1 1 0 0 0-.543-.959l-1.784-.912a1 1 0 0 0-.634-.094l-4.358.79A1 1 0 0 1 5 9.814L3.017 8.51a1 1 0 0 1-.244-.228L1.409 6.5a1 1 0 0 1-.205-.618l.01-.852a.893.893 0 0 1 1.693-.386l.635 1.284a1 1 0 0 0 .545.493l2.303.864a1 1 0 0 0 .515.05l2.148-.357a1 1 0 0 0 .51-.248l.894-.815a1 1 0 0 1 .637-.26l3.24-.117a1 1 0 0 1 1.026.856l.437 3.019a1 1 0 0 0 1.153.843l4.184-.692a1 1 0 0 1 .937.354l.332.406a1 1 0 0 1 .132 1.056l-.483 1.033a1 1 0 0 0-.055.697l.559 1.957a1 1 0 0 1-.09.765l-.727 1.292a.6.6 0 0 1-.69.282l-1.16-.335a.6.6 0 0 0-.763.516z"/></svg>`,
})
export class GulfOfGuinea {
  protected readonly b = inject(GeoIconBase);
}
