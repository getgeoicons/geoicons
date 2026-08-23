// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-princes-town',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.728 6.83a1 1 0 0 0 .69 1.174l2.562.765a1 1 0 0 1 .308.154l1.558 1.151a1 1 0 0 1 .337 1.168l-.861 2.207a1 1 0 0 0-.069.358l-.045 8.29a.6.6 0 0 0 .69.596l8.626-1.322a1 1 0 0 1 .475.042l2.533.867a2 2 0 0 0 .843.098l2.342-.23a.6.6 0 0 0 .54-.585l.216-10.355-.413-3.526a1 1 0 0 0-.562-.786l-.887-.425a1 1 0 0 0-.812-.023l-.545.224a1 1 0 0 1-1.285-.499l-1.213-2.579a1 1 0 0 0-.624-.534l-5.807-1.699a2 2 0 0 0-1.103-.006l-3.47.977-2.78 1.018a1 1 0 0 0-.633.723z"/></svg>`,
})
export class TtPrincesTown {
  protected readonly b = inject(GeoIconBase);
}
