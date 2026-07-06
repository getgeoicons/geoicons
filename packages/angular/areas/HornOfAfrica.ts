// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-horn-of-africa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.2 10.524-1.183 1.578 1.361.922a1 1 0 0 1 .368.456l.572 1.431a1 1 0 0 0 .418.489l2.392 1.42a1 1 0 0 0 .87.073l1.276-.49a1 1 0 0 1 .549-.05l.775.15a.6.6 0 0 1 .417.87L10.946 19.4a1 1 0 0 0-.062.787l.886 2.613 2.012-2.846a1 1 0 0 1 .205-.214l3.09-2.388a1 1 0 0 0 .27-.32l3.513-6.593a1 1 0 0 0 .117-.491l-.045-2.196L15.283 9.7a1 1 0 0 1-.584.02l-.655-.174a1 1 0 0 1-.718-.747l-.252-1.118a1 1 0 0 0-.346-.557L9.244 4.3a1 1 0 0 1-.355-.601l-.265-1.486a.6.6 0 0 0-.974-.357l-.944.783a1 1 0 0 0-.362.77v2.912a1 1 0 0 1-.12.475l-1.943 3.602q-.036.066-.08.125Z"/></svg>`,
})
export class HornOfAfrica {
  protected readonly b = inject(GeoIconBase);
}
