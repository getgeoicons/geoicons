// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-central-andros',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.373 7.382a1 1 0 0 0-.506.692l-.269 1.41a1 1 0 0 1-.263.509l-1.598 1.653a1 1 0 0 0-.255.468l-.13.555a1 1 0 0 0 .4 1.045l1.952 1.371a3 3 0 0 1 .676.655l1.225 1.634a3 3 0 0 1 .395.71l.727 1.863a.6.6 0 0 0 .797.333l.592-.256a.6.6 0 0 0 .362-.536l.012-.466a1 1 0 0 1 .502-.843l1.524-.874a1 1 0 0 1 .702-.111l1.194.25a1 1 0 0 0 .955-.317l1.938-2.195a1 1 0 0 0 .054-1.257l-.446-.602a.6.6 0 0 1 .354-.943l5.751-1.252a2 2 0 0 0 1.232-.833l.081-.121a2 2 0 0 0 .325-.85l.06-.44a2 2 0 0 0-.192-1.166l-1.832-3.663a.6.6 0 0 0-.537-.331h-3.998a3 3 0 0 0-.49.04l-5.496.91a3 3 0 0 0-.939.323z"/></svg>`,
})
export class BsCentralAndros {
  protected readonly b = inject(GeoIconBase);
}
