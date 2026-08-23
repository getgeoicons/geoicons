// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-arkansas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.25 6.882a.6.6 0 0 0-.52-.908l-1.9.017a.578.578 0 0 1-.362-1.032l1.041-.817a.6.6 0 0 0 .192-.68l-.09-.243a.6.6 0 0 0-.562-.39l-18.506-.01a.3.3 0 0 0-.297.34l.707 5.273q.043.315.034.632l-.208 8.358a.6.6 0 0 0 .465.6l.966.221a.6.6 0 0 1 .466.583l.007 1.98a.3.3 0 0 0 .298.298l11.51.074a.6.6 0 0 0 .604-.6l.005-3.164a1 1 0 0 1 .142-.513z"/></svg>`,
})
export class UsArkansas {
  protected readonly b = inject(GeoIconBase);
}
