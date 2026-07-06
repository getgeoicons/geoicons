// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-az-mainland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.033 3.314-.722.6a.5.5 0 0 0 .027.79l1.45 1.044a.5.5 0 0 1 .177.581l-.34.905a.5.5 0 0 1-.7.267L2.903 5.397a.5.5 0 0 0-.616.123l-.718.86a.5.5 0 0 0 .12.746l1.692 1.05a.5.5 0 0 1 .165.681l-.444.741a.5.5 0 0 0 .147.67l1.51 1.028a.5.5 0 0 1 .18.608l-.567 1.343a.5.5 0 0 0 .092.532l1.024 1.12a.5.5 0 0 0 .472.153l.557-.117a.5.5 0 0 1 .597.41l.454 2.859a.25.25 0 0 0 .404.155l4.577-3.696a.5.5 0 0 1 .704.076l.742.922a.5.5 0 0 1 .11.307l.024 1.635a.5.5 0 0 1-.194.402l-.61.471a.5.5 0 0 0-.033.763l1.663 1.536a.5.5 0 0 0 .468.116l.476-.127a.5.5 0 0 0 .371-.491l-.044-2.714a.5.5 0 0 1 .45-.506l.905-.09a.5.5 0 0 0 .442-.41l.738-4.13a.5.5 0 0 1 .434-.409l3.121-.367a.25.25 0 0 0 .155-.417l-1.121-1.226a.5.5 0 0 0-.322-.16l-1.98-.186a.5.5 0 0 1-.385-.247l-3.224-5.56a.25.25 0 0 0-.395-.05l-2.86 2.934a.5.5 0 0 1-.694.023l-3.802-3.43a.5.5 0 0 0-.654-.014Z"/></svg>`,
})
export class AzMainland {
  protected readonly b = inject(GeoIconBase);
}
