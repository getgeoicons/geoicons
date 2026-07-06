// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-no',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.1 21.354 2.935 17.3a.5.5 0 0 1 .136-.363l4.377-4.638a.5.5 0 0 0 .082-.117l1.81-3.558a.5.5 0 0 0-.125-.61l-.33-.276A.5.5 0 0 1 8.853 7l2.99-2.975a.5.5 0 0 1 .083-.067l2.67-1.714a.5.5 0 0 1 .08-.042l2.319-.946a.5.5 0 0 1 .283-.028l2.214.425a.5.5 0 0 1 .218.1l1.163.93a.5.5 0 0 1 .188.385l.011 1.074a.5.5 0 0 1-.2.405l-.9.676a.5.5 0 0 1-.784-.274l-.17-.65a.5.5 0 0 0-.698-.325l-.562.267a.5.5 0 0 0-.272.338l-.36 1.542a.5.5 0 0 1-.52.386l-.848-.058a.5.5 0 0 1-.342-.17l-.517-.59a.5.5 0 0 0-.668-.077l-2.642 1.9a.5.5 0 0 0-.184.25l-1.991 6.095a.5.5 0 0 1-.184.25l-.741.533a.5.5 0 0 0-.208.376l-.096 1.605a.5.5 0 0 0 .063.274l.637 1.142a.5.5 0 0 1 .039.4l-.797 2.433a.5.5 0 0 1-.357.33l-.942.23a.5.5 0 0 0-.203.103l-1.238 1.04a.5.5 0 0 1-.574.05l-1.465-.858a.5.5 0 0 1-.247-.41Z"/></svg>`,
})
export class No {
  protected readonly b = inject(GeoIconBase);
}
