// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-ohio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.891 9.832a1 1 0 0 0 .044-.296l-.039-7.886a.3.3 0 0 0-.416-.275L13.374 4.79a1 1 0 0 1-.822-.02L8.657 2.897a1 1 0 0 0-.469-.099l-5.753.203a.3.3 0 0 0-.29.298l-.08 15.022a.3.3 0 0 0 .262.3l1.288.167a1 1 0 0 1 .807.64l.223.595a1 1 0 0 0 .531.563l1.953.864a1 1 0 0 0 .579.07l3.001-.53a.6.6 0 0 1 .578.22l.985 1.26a.6.6 0 0 0 .657.2l.682-.22a.6.6 0 0 0 .37-.34l1.159-2.789a.6.6 0 0 1 .212-.263l4.44-3.074a1 1 0 0 0 .386-.53z"/></svg>`,
})
export class UsOhio {
  protected readonly b = inject(GeoIconBase);
}
