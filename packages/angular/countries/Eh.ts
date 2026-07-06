// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-eh',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.62 20.987H1.2l.247-1.839a.5.5 0 0 1 .188-.327l.971-.759a.5.5 0 0 0 .166-.23l1.165-3.384a.5.5 0 0 1 .11-.18L6.56 11.61a.5.5 0 0 0 .124-.23l.925-3.952a.5.5 0 0 1 .24-.32L9.914 5.93a.5.5 0 0 0 .216-.245l1.092-2.673H22.8v4.752h-8.56v7.282l-3.017 1.523z"/></svg>`,
})
export class Eh {
  protected readonly b = inject(GeoIconBase);
}
