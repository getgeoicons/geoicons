// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-las-tunas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.469 16.629a.6.6 0 0 0 .512.803l6.576.562a1 1 0 0 0 .993-.578l.06-.131a1 1 0 0 1 1.05-.57l4.944.713a1 1 0 0 0 .67-.14l.658-.408a1 1 0 0 0 .473-.836l.022-1.635a1 1 0 0 1 .951-.985l.711-.035a1 1 0 0 0 .832-.525l.357-.664a1 1 0 0 1 .463-.434l1.304-.6a1 1 0 0 0 .571-.758l.098-.638a.6.6 0 0 0-.475-.679l-2.95-.595a3 3 0 0 1-.708-.238l-4.455-2.144a1 1 0 0 0-.716-.058l-1.208.356a1 1 0 0 0-.698.767L10.8 10.77a2 2 0 0 1-.705 1.17l-1.031.835a1 1 0 0 1-1.272-.011l-.42-.352a1 1 0 0 0-1.17-.084L2.55 14.6a1.5 1.5 0 0 0-.618.76z"/></svg>`,
})
export class CuLasTunas {
  protected readonly b = inject(GeoIconBase);
}
