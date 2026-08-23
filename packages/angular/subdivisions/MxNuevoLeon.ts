// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-nuevo-leon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.056 16.32a1 1 0 0 0 .095.354l.59 1.232a3 3 0 0 1 .28.994l.339 3.347a.6.6 0 0 0 .611.54l.72-.018a.6.6 0 0 0 .552-.403l.658-1.888a.6.6 0 0 1 .44-.39l.882-.19a.6.6 0 0 0 .441-.779l-.731-2.17a1 1 0 0 1 .34-1.113l4.122-3.16a.6.6 0 0 0 .233-.52l-.152-2.08a.6.6 0 0 0-.539-.553l-1.682-.168a1 1 0 0 1-.75-.466L13.06 6.572a2 2 0 0 1-.3-.97l-.139-3.134a1 1 0 0 0-.737-.92l-.937-.256a.6.6 0 0 0-.587.16L8.344 3.515a.6.6 0 0 0-.155.557l.369 1.564a1 1 0 0 1-.402 1.05l-1.369.954a.6.6 0 0 0-.186.776l.979 1.822a3 3 0 0 0 1.067 1.133l1.686 1.041a.6.6 0 0 1 .258.69l-.06.19a.6.6 0 0 1-.581.42l-1.004-.015a1 1 0 0 0-1.012 1.078z"/></svg>`,
})
export class MxNuevoLeon {
  protected readonly b = inject(GeoIconBase);
}
