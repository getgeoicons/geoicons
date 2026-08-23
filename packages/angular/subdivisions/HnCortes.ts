// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-cortes',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.875 1.728a.3.3 0 0 0-.343-.405l-3.618.796a1 1 0 0 0-.54.322L11.95 5.24a1 1 0 0 1-1.016.311l-1.332-.36a1 1 0 0 0-.92.215l-3.357 2.95a.3.3 0 0 0 .116.515l3.416.969a1 1 0 0 1 .552.396l2.68 3.905a.6.6 0 0 1 .047.598l-.423.89a.6.6 0 0 0 .072.63l1.13 1.421a1 1 0 0 1 .21.738l-.163 1.416a1 1 0 0 0 .169.681l1.217 1.77a.6.6 0 0 0 .855.14l3.183-2.393a1 1 0 0 0 .4-.796l.006-1.743a1 1 0 0 0-.438-.83l-2.672-1.82a1 1 0 0 1-.334-1.27l2.688-5.44a1 1 0 0 0 .04-.793l-.572-1.531a1 1 0 0 1 .01-.726z"/></svg>`,
})
export class HnCortes {
  protected readonly b = inject(GeoIconBase);
}
