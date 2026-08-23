// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-tlaxcala',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.506 7.908a1 1 0 0 0-.562.353l-.344.432a1 1 0 0 0-.11 1.075l.47.926a1 1 0 0 0 .849.547l1.565.066a1 1 0 0 1 .806.47l3.032 4.86a2 2 0 0 0 .942.793l2.204.899a1 1 0 0 0 1.082-.217l1.568-1.558a1 1 0 0 1 1.264-.12l.673.454a1 1 0 0 0 1.357-.225l1.176-1.555a1 1 0 0 1 .868-.394l1.667.117a1 1 0 0 0 .802-.317l.288-.31a1 1 0 0 0-.069-1.429l-1.967-1.745a1 1 0 0 0-.816-.24l-.713.109a.83.83 0 0 1-.956-.827l.006-.802a1 1 0 0 0-.365-.78l-2.86-2.354a1 1 0 0 0-.831-.208l-1.797.358a1 1 0 0 1-.532-.04l-1.627-.582a.8.8 0 0 0-.992.41L8.023 7.25a1 1 0 0 1-1.005.565l-2.327-.24a3 3 0 0 0-.97.058z"/></svg>`,
})
export class MxTlaxcala {
  protected readonly b = inject(GeoIconBase);
}
