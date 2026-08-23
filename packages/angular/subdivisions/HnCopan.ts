// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-copan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M16.947 1.678a.6.6 0 0 0-.839-.119l-4.606 3.46q-.4.3-.863.493l-3.883 1.62a1 1 0 0 0-.606.79l-.378 2.85a1 1 0 0 1-.339.625l-.607.523a1 1 0 0 0-.259 1.167l1.471 3.277a1 1 0 0 0 .915.59l2.376-.004a1 1 0 0 1 .855.477l2.844 4.636a1 1 0 0 0 .62.45l.587.14a1 1 0 0 0 1.014-.35l1.656-2.078a.8.8 0 0 0 .049-.929l-.862-1.35a.6.6 0 0 1 .47-.922l2.087-.123a.6.6 0 0 0 .544-.756l-.427-1.574a1 1 0 0 1 .058-.682l.59-1.274a1 1 0 0 0-.272-1.192l-.515-.424A1 1 0 0 1 18.36 9.8l1.066-2.261a2 2 0 0 0 .156-1.223l-.201-1.071a2 2 0 0 0-.37-.836z"/></svg>`,
})
export class HnCopan {
  protected readonly b = inject(GeoIconBase);
}
