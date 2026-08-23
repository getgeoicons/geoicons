// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kn-saint-thomas-lowland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.04 6.33c-2.553 3.525-2.715 8.59-1.906 12.082.072.31-.001.632-.17.902a3.88 3.88 0 0 0-.538 2.726c3.022-.366 5.587.133 6.902.556.37.119.762.168 1.145.1l1.302-.234a2 2 0 0 0 1.079-.571l4.632-4.745a.3.3 0 0 0 .06-.33l-3.75-8.517a4 4 0 0 0-.708-1.087L9.984 1.627a.6.6 0 0 0-.832-.052l-.561.477a.6.6 0 0 0-.115.784l.24.37a.6.6 0 0 1 .013.63l-.287.488c-.413.704-.924 1.345-1.403 2.006Z"/></svg>`,
})
export class KnSaintThomasLowland {
  protected readonly b = inject(GeoIconBase);
}
