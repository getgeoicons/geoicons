// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-idaho',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.665 9.67a.6.6 0 0 0 .09.325l.961 1.552a1 1 0 0 1 .05.963L5.46 15.202a1 1 0 0 0-.067.693l.388 1.463q.071.262.067.535l-.05 4.603a.3.3 0 0 0 .3.304l12.304-.01a.3.3 0 0 0 .3-.301l-.027-6.832a.6.6 0 0 0-.737-.582l-2.4.562a1 1 0 0 1-1.105-.495l-1.29-2.366a1 1 0 0 0-.796-.518l-.172-.014a1 1 0 0 1-.906-1.152l.31-1.978a.6.6 0 0 0-.218-.561L9.26 6.868a1 1 0 0 1-.266-.326L7.987 4.569a1 1 0 0 1-.11-.465l.027-2.6a.3.3 0 0 0-.3-.303l-1.525.008a.3.3 0 0 0-.298.295z"/></svg>`,
})
export class UsIdaho {
  protected readonly b = inject(GeoIconBase);
}
