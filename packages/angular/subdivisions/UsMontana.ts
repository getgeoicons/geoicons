// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-montana',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M10.186 16.798a1 1 0 0 1 .369-.072L22.5 16.7a.3.3 0 0 0 .3-.3l-.008-10.193a.3.3 0 0 0-.3-.3H1.503a.3.3 0 0 0-.3.303l.02 2.184a1 1 0 0 0 .062.338l.508 1.374a1 1 0 0 0 .277.404l1.99 1.75a.6.6 0 0 1 .194.552l-.278 1.627a.6.6 0 0 0 .502.695l.708.106a.6.6 0 0 1 .443.317l1.065 2.055a.6.6 0 0 0 .755.28z"/></svg>`,
})
export class UsMontana {
  protected readonly b = inject(GeoIconBase);
}
