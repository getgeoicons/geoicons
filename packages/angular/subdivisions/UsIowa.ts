// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-iowa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.875 17.88a.3.3 0 0 0 .29.218l12.384-.106a.6.6 0 0 1 .32.09l1.296.8a.6.6 0 0 0 .855-.249l.887-1.835a1 1 0 0 0 .067-.688l-.307-1.172a.664.664 0 0 1 .484-.813l1.421-.348a1 1 0 0 0 .713-.663l.337-1.04a1 1 0 0 0-.206-.976L20.113 8.53a1 1 0 0 1-.23-.449l-.651-2.905a.3.3 0 0 0-.29-.234L1.587 4.77a.3.3 0 0 0-.303.292l-.08 3.364a1 1 0 0 0 .038.3z"/></svg>`,
})
export class UsIowa {
  protected readonly b = inject(GeoIconBase);
}
