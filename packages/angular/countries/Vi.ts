// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vi',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.706 18.058-.477 3.2a.5.5 0 0 0 .527.573l7.836-.519a.5.5 0 0 0 .146-.032l5.602-2.154a.5.5 0 0 0 .29-.639l-.262-.712a.5.5 0 0 0-.45-.328l-7.634-.28-5.129.467a.5.5 0 0 0-.449.424ZM4.957 2.176l-2.421.69a.5.5 0 0 0-.057.941L7.738 6.02a.5.5 0 0 0 .508-.073L9.651 4.81a.5.5 0 0 0-.123-.85L5.286 2.194a.5.5 0 0 0-.33-.019Zm9.888.071-1.876 1.108a.5.5 0 0 0-.234.318l-.36 1.571a.5.5 0 0 0 .47.612l3.846.134a.5.5 0 0 0 .419-.202l1.724-2.324-3.568-1.258a.5.5 0 0 0-.421.04Z"/></svg>`,
})
export class Vi {
  protected readonly b = inject(GeoIconBase);
}
