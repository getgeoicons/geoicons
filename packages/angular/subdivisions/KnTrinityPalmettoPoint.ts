// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kn-trinity-palmetto-point',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.344 12.43-.635.6a1 1 0 0 0-.229 1.126l.166.38a1 1 0 0 0 .845.599l1.31.094c.212.015.42.064.616.145l1.77.726a2 2 0 0 1 .971.846l.262.45a2 2 0 0 0 1.044.875l2.033.741c.25.091.517.132.783.119l1.913-.095a1 1 0 0 1 .565.143l.777.468a2 2 0 0 0 .964.285l4.822.165a1 1 0 0 1 .939.767l.15.628a.66.66 0 0 0 1.297-.236l-.157-1.25a2 2 0 0 0-.39-.958l-1.312-1.733a1 1 0 0 1-.203-.612l.009-.991a1 1 0 0 0-.168-.562l-1.134-1.705a.6.6 0 0 1 .13-.806l.98-.762c.13-.1.232-.231.299-.38l.025-.057a1 1 0 0 0-.119-1.018L19.055 8.32a2 2 0 0 1-.41-1.339l.2-3.292a.6.6 0 0 0-.477-.624L13.52 2.07a.6.6 0 0 0-.566.186L9.808 5.734a2 2 0 0 1-.673.487L5.466 7.845a2 2 0 0 0-.95.878l-1.594 2.953a3 3 0 0 1-.578.753Z"/></svg>`,
})
export class KnTrinityPalmettoPoint {
  protected readonly b = inject(GeoIconBase);
}
