// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sv-san-salvador',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.673 2.011a.6.6 0 0 0-.652-.721l-3.216.351a1 1 0 0 0-.779.532l-.461.886a1 1 0 0 0 .312 1.28l1.265.89a1 1 0 0 1 .402 1.035L8 13.22a1 1 0 0 0 .423 1.05l.717.476a1 1 0 0 1 .445.888l-.247 4.473a1 1 0 0 0 .073.433l.673 1.65a.8.8 0 0 0 .635.49l.35.047a.8.8 0 0 0 .808-.409l1.09-1.995a1 1 0 0 0 .03-.9l-.412-.885a.6.6 0 0 1 .505-.852l.892-.058a.6.6 0 0 0 .56-.572l.073-1.595a1 1 0 0 1 .882-.947l.493-.058a.6.6 0 0 0 .467-.864l-1.064-2.128a3 3 0 0 0-.628-.844l-2.03-1.909a.6.6 0 0 1-.146-.658l.324-.817a.8.8 0 0 0-.04-.676l-.663-1.226a1 1 0 0 1-.098-.684z"/></svg>`,
})
export class SvSanSalvador {
  protected readonly b = inject(GeoIconBase);
}
