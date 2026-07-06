// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-md',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.939 17.323.329 5.222a.25.25 0 0 0 .27.233l1.378-.117a.25.25 0 0 0 .226-.213l.218-1.493a.5.5 0 0 1 .16-.3l1.917-1.718a.5.5 0 0 0 .158-.459l-.437-2.489a.5.5 0 0 1 .566-.58l5.076.744-.703-2.787a.5.5 0 0 0-.257-.323l-1.367-.698a.5.5 0 0 1-.272-.426l-.084-2.128a.5.5 0 0 0-.313-.444l-1.275-.514a.5.5 0 0 1-.313-.484l.122-2.944a.5.5 0 0 0-.262-.46L9.278 1.266a.5.5 0 0 0-.265-.06l-4.027.22a.5.5 0 0 0-.267.094L3.2 2.624l2.148.938a.5.5 0 0 1 .234.209l6.062 10.551c.068.12.085.26.045.392l-.73 2.434a.5.5 0 0 0-.02.175Z"/></svg>`,
})
export class Md {
  protected readonly b = inject(GeoIconBase);
}
