// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-pinar-del-rio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M19.758 5.207a.6.6 0 0 0-.835-.562L10.836 8.09a3 3 0 0 0-1.16.877L8.5 10.427a3 3 0 0 0-.556 1.082l-.551 1.99a2 2 0 0 1-1.08 1.277L3.65 16.023c-.29.136-.602.224-.92.262l-.64.075a.99.99 0 0 0 .012 1.97l.788.082a1 1 0 0 0 .623-.14l2.255-1.367a.706.706 0 0 1 .928 1.032l-.24.313a.817.817 0 0 0 1.195 1.103l1.645-1.475a2 2 0 0 1 .87-.456l1.845-.44a1 1 0 0 0 .755-.814l.2-1.24a1 1 0 0 1 .929-.84l4.84-.28a1 1 0 0 0 .742-.397l1.006-1.338a1 1 0 0 1 .648-.387l.41-.063a1 1 0 0 0 .778-.621l.318-.807a1 1 0 0 0-.035-.814l-.677-1.352a1 1 0 0 0-.553-.493l-.973-.353a1 1 0 0 1-.658-.958z"/></svg>`,
})
export class CuPinarDelRio {
  protected readonly b = inject(GeoIconBase);
}
