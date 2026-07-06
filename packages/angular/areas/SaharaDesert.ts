// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sahara-desert',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.604 10.888-1.22 2.195a1 1 0 0 0-.102.702l.274 1.235 2.855 1.018a1 1 0 0 0 .411.055l2.246-.17q.11-.01.219.007l6.125.881a1 1 0 0 0 .537-.07l1.146-.492a1 1 0 0 1 .365-.08l4.17-.122q.108-.003.214-.03l2.956-.738-2.59-5.369a1 1 0 0 0-.753-.554l-3.122-.467a.6.6 0 0 0-.445.11l-.908.67a.6.6 0 0 1-.613.06l-1.451-.688a1 1 0 0 1-.397-.34l-.616-.9a1 1 0 0 0-.689-.427L9.79 7.177a1 1 0 0 0-.472.049l-1.187.423a1 1 0 0 0-.596.58l-.194.498a1 1 0 0 1-.398.483l-2.267 1.43a1 1 0 0 1-.475.153z"/></svg>`,
})
export class SaharaDesert {
  protected readonly b = inject(GeoIconBase);
}
