// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-se',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.366 14.855-1.124 2.92a.5.5 0 0 0-.022.286l.941 4.34a.5.5 0 0 0 .495.394l.713-.008a.5.5 0 0 0 .329-.127l1.177-1.058a.5.5 0 0 0 .157-.275l.52-2.624a.5.5 0 0 1 .117-.235l1.267-1.42a.5.5 0 0 0-.035-.702l-1.016-.932a.5.5 0 0 1-.152-.469l.384-1.887a.5.5 0 0 1 .135-.252l2.502-2.529a.5.5 0 0 0 .143-.315l.133-1.818a.5.5 0 0 1 .456-.462l1.325-.11-.479-4.004a.5.5 0 0 0-.147-.299L14.368 1.5a.5.5 0 0 0-.65-.04l-2.045 1.55a.5.5 0 0 0-.152.187L9.869 6.76a.5.5 0 0 0-.039.124l-.396 2.261a.5.5 0 0 1-.11.236l-1.232 1.46a.5.5 0 0 0-.114.384l.418 3.389a.5.5 0 0 1-.03.24Z"/></svg>`,
})
export class Se {
  protected readonly b = inject(GeoIconBase);
}
