// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pa-cocle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.555 15.606a.3.3 0 0 1-.112.426l-3.196 1.7a3 3 0 0 1-1.358.35l-1.952.033a2 2 0 0 0-1.382.587l-1.014 1.016a2 2 0 0 0-.584 1.405l-.005 1.278a.3.3 0 0 1-.384.287L5.61 21.24a.6.6 0 0 1-.395-.78l.624-1.721a2 2 0 0 0-.134-1.657l-2.18-3.906a.6.6 0 0 1 .162-.77l1.282-.969a2 2 0 0 0 .666-.89l.68-1.807a2 2 0 0 1 1.338-1.22l1.233-.343a1 1 0 0 0 .723-.83l.23-1.7a.6.6 0 0 1 .75-.5l2.807.752a1 1 0 0 0 1.015-.312l2.374-2.743a.6.6 0 0 1 .975.096l.94 1.656a.6.6 0 0 1 .015.563l-.66 1.33a1 1 0 0 0-.015.857l.591 1.31a3 3 0 0 1 .253.952l.44 4.656a2 2 0 0 0 .304.888z"/></svg>`,
})
export class PaCocle {
  protected readonly b = inject(GeoIconBase);
}
