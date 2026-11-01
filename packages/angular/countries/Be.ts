// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-be',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.286 7.157.352 1.691a1 1 0 0 0 .373.593l.536.408a.97.97 0 0 0 .99.108.965.965 0 0 1 1.326.59l.195.63a1 1 0 0 0 .843.699l.518.059a1 1 0 0 1 .834.672l.036.106a1 1 0 0 0 .935.679l.672.007a1 1 0 0 1 .988 1.026l-.022.86a1 1 0 0 0 1.068 1.024l.692-.047a1 1 0 0 0 .759-.437l.698-1.029a.81.81 0 0 1 1.46.64l-.412 1.755a1 1 0 0 0 .365 1.02l2.636 2.025a1 1 0 0 0 .717.201l.67-.072a1.395 1.395 0 0 0 1.065-2.073l-.142-.25a2 2 0 0 1-.112-1.737l.303-.748a1 1 0 0 1 .72-.602l.44-.093a2 2 0 0 0 1.088-.636l.455-.517a1 1 0 0 0 .121-1.15l-1.26-2.25a1 1 0 0 0-.755-.503l-1.326-.157a1 1 0 0 1-.809-1.37l.527-1.299a1 1 0 0 0-.634-1.332l-1.416-.433a2 2 0 0 1-.832-.5l-.559-.56a2 2 0 0 0-1.53-.584l-1.952.111a2 2 0 0 0-1.243.528l-.781.722a2 2 0 0 1-2.109.385l-2.056-.833a1 1 0 0 0-.893.07l-3.26 1.967a.6.6 0 0 0-.279.636Z"/></svg>`,
})
export class Be {
  protected readonly b = inject(GeoIconBase);
}
