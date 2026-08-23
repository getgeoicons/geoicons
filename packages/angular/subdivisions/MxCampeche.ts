// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-campeche',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.625 16.8 2.695-.192a7 7 0 0 0 1.2-.184c2.639-.66 4.13-1.493 6.157-3.273.319-.28.58-.619.781-.992.15-.279.227-.59.224-.908l-.003-.36a3.28 3.28 0 0 1 .826-2.205l.113-.128a1.86 1.86 0 0 0 .444-1.543l-.37-2.209a3 3 0 0 1 .021-1.104l.387-1.865a.658.658 0 0 1 1.3.086l.109 1.499a.6.6 0 0 0 .362.508l1.415.607a1 1 0 0 1 .474.422l1.993 3.484q.227.397.54.734l2.183 2.354a1 1 0 0 1 .267.675l.055 10.18a.3.3 0 0 1-.3.301H11.32a.3.3 0 0 1-.3-.298l-.005-1a.3.3 0 0 0-.213-.286l-3.347-1.007a.3.3 0 0 0-.386.265l-.092 1.246a.3.3 0 0 1-.427.25L4.262 20.78a1 1 0 0 1-.573-.869l-.044-1.218a.3.3 0 0 0-.313-.29l-1 .045a.6.6 0 0 1-.575-.357l-.385-.87a.3.3 0 0 1 .253-.42Z"/></svg>`,
})
export class MxCampeche {
  protected readonly b = inject(GeoIconBase);
}
