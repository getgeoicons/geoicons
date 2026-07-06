// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.604 14.794-.32 1.915a.5.5 0 0 0 .42.577l2.365.352a.5.5 0 0 1 .368.26l.722 1.364a.5.5 0 0 0 .446.267l.573-.006a.5.5 0 0 0 .43-.254l.63-1.113a.5.5 0 0 1 .339-.245l1.58-.31a.5.5 0 0 1 .209.003l4.171.951a.5.5 0 0 0 .173.009l5.793-.724a.5.5 0 0 1 .413.14l1.758 1.734a.25.25 0 0 0 .423-.15l.266-2.311a.5.5 0 0 0-.142-.41l-1.608-1.618a.5.5 0 0 1 .216-.833l1.107-.32a.5.5 0 0 0 .328-.661l-.566-1.46a.5.5 0 0 1 .061-.474l.916-1.268a.5.5 0 0 0 .086-.384l-.67-3.621a.5.5 0 0 0-.468-.409l-3.51-.17a.5.5 0 0 1-.188-.047l-3.343-1.564a.5.5 0 0 0-.204-.047l-2.644-.04a.5.5 0 0 0-.227.052L9.355 5.032a.5.5 0 0 0-.28.443l-.011.876a.5.5 0 0 0 .564.502l2.525-.325a.5.5 0 0 1 .323.068l2.203 1.336a.5.5 0 0 1 .213.593l-.853 2.445a.5.5 0 0 0 .179.57l3.412 2.47a.5.5 0 0 1 .176.579l-.248.664a.5.5 0 0 1-.63.299l-1.235-.42a.5.5 0 0 0-.532.14l-.61.678a.5.5 0 0 1-.431.162l-6.545-.772a.5.5 0 0 1-.12-.029L4.265 14.1a.5.5 0 0 0-.254-.027l-1.99.309a.5.5 0 0 0-.416.412Z"/></svg>`,
})
export class Ht {
  protected readonly b = inject(GeoIconBase);
}
