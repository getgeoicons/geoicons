// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kh',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.253 10.152 2.562 5.14a.5.5 0 0 1 .052.197l.166 3.126a.5.5 0 0 0 .84.339l.84-.783a.5.5 0 0 1 .744.07l.407.551a.5.5 0 0 1-.033.633l-.424.466a.5.5 0 0 0 .341.836l3.05.177a.5.5 0 0 0 .223-.038l4.172-1.76a.5.5 0 0 1 .417.013l1.783.885a.5.5 0 0 0 .651-.192l.186-.311a.5.5 0 0 0-.032-.56l-1.62-2.118a.5.5 0 0 1 .213-.769l6.125-2.425a.5.5 0 0 0 .314-.51l-.203-2.259a.5.5 0 0 1 .04-.244l.64-1.47a.5.5 0 0 0-.008-.418l-.897-1.849a.5.5 0 0 1-.034-.344l.755-2.897a.25.25 0 0 0-.359-.284l-2.526 1.337a.5.5 0 0 1-.56-.064l-.69-.595a.5.5 0 0 0-.565-.061l-1.04.565a.5.5 0 0 0-.26.461l.054 1.222a.5.5 0 0 1-.716.472l-4.06-1.95a.5.5 0 0 0-.234-.05l-7.21.247a.5.5 0 0 0-.441.297l-.904 2.04a.5.5 0 0 1-.263.259l-1.243.521a.5.5 0 0 0-.306.461V9.93a.5.5 0 0 0 .053.223Z"/></svg>`,
})
export class Kh {
  protected readonly b = inject(GeoIconBase);
}
