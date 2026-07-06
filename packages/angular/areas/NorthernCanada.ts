// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-northern-canada',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.565 14.377 3.567-4.16a.25.25 0 0 1 .398.025l.63.96a1 1 0 0 0 .82.452l1.006.015a1 1 0 0 0 .946-.632l.922-2.335a1 1 0 0 1 .73-.613l2.574-.527a1 1 0 0 0 .533-.299l2.35-2.533a.865.865 0 0 1 1.481.763l-.52 2.523a1 1 0 0 0-.008.367l.308 1.85a1 1 0 0 0 .497.707l4.094 2.296a1 1 0 0 1 .503.748l.277 2.215a.6.6 0 0 1-.821.63l-1.407-.57a1 1 0 0 1-.618-.826l-.067-.648a1 1 0 0 0-.729-.862l-.469-.13a1 1 0 0 0-1.26.85l-.043.381a1 1 0 0 0 .286.822l.543.543a.905.905 0 0 1-.83 1.525l-.622-.134a1 1 0 0 0-1.055.442l-.741 1.17a.59.59 0 0 1-.455.274c-5.733.39-10.64-2.606-12.774-4.482a.574.574 0 0 1-.046-.807Z"/></svg>`,
})
export class NorthernCanada {
  protected readonly b = inject(GeoIconBase);
}
