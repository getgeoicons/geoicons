// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-queretaro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.17 19.74a1 1 0 0 1 .418.91l-.074.786a1 1 0 0 0 .59 1.007l.416.185a1 1 0 0 0 .78.014l.812-.328a1 1 0 0 0 .59-1.198l-.205-.727a.6.6 0 0 1 .29-.69l.615-.334a.6.6 0 0 0 .31-.467l.267-2.665a.8.8 0 0 1 .49-.66l2.62-1.082a1 1 0 0 0 .55-.561l1.94-4.976a1 1 0 0 1 .687-.606l2.532-.637a.6.6 0 0 0 .431-.746l-1.328-4.669a.6.6 0 0 0-1.04-.218l-1.356 1.637a1 1 0 0 1-1.198.265L13.62 2.707a.6.6 0 0 0-.85.462l-.216 1.58a1 1 0 0 0 .103.594l.198.382a1 1 0 0 1-.78 1.454l-1.648.179a1 1 0 0 0-.872.795L9.2 9.893a1 1 0 0 1-.998.8l-3.691-.064a1 1 0 0 0-.934.599l-.814 1.86a1 1 0 0 0-.02.753l1.31 3.48a1 1 0 0 0 .357.465z"/></svg>`,
})
export class MxQueretaro {
  protected readonly b = inject(GeoIconBase);
}
