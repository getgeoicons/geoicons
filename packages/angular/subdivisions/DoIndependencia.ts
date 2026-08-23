// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-independencia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.037 4.386a.3.3 0 0 0-.325.313l.037.746a.3.3 0 0 1-.373.305l-3.598-.907a.6.6 0 0 0-.493.092l-.492.348a.6.6 0 0 0-.068.923L4.683 9.04a.3.3 0 0 1 .019.414l-.615.706a.3.3 0 0 0 .078.458l5.384 3.063a.3.3 0 0 1 .109.416l-.499.821a.3.3 0 0 0 .114.42l7.27 3.949a.6.6 0 0 0 .864-.36l.982-3.396a.6.6 0 0 1 .815-.384l1.387.604a.6.6 0 0 0 .66-.122l1.124-1.102a.6.6 0 0 0 .012-.845l-1.616-1.674a1 1 0 0 0-1.086-.237l-1.752.69a1 1 0 0 1-.99-.149l-.736-.587a.88.88 0 0 1-.308-.882.88.88 0 0 0-.535-1.012l-3.206-1.259a.6.6 0 0 1-.327-.804l.94-2.093a.6.6 0 0 0-.496-.844z"/></svg>`,
})
export class DoIndependencia {
  protected readonly b = inject(GeoIconBase);
}
