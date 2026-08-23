// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gd-saint-mark',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M19.834 18.015a1 1 0 0 1 .42-1.094l.224-.146a1 1 0 0 0 .287-1.39l-.854-1.292a2 2 0 0 1-.293-.706l-.56-2.764a1 1 0 0 1 .241-.872l1.513-1.66a1 1 0 0 0 .221-.953l-.58-1.992a2 2 0 0 0-.392-.731L17.735 1.66a.8.8 0 0 0-.937-.215l-2.007.896a1 1 0 0 0-.506.507L13.71 4.14a1 1 0 0 1-.54.521l-1.231.495a1 1 0 0 0-.505.45L9.56 9.036a1 1 0 0 1-.46.43l-4.013 1.84a1 1 0 0 0-.297.21l-1.914 1.95a.6.6 0 0 0-.171.398l-.014.343a.6.6 0 0 0 .245.506l3.324 2.444a1 1 0 0 0 .184.107l5.52 2.47a1 1 0 0 1 .38.298l1.848 2.372a1 1 0 0 0 .808.386l2.682-.051a1 1 0 0 0 .764-.377l1.656-2.081a.8.8 0 0 0 .147-.704z"/></svg>`,
})
export class GdSaintMark {
  protected readonly b = inject(GeoIconBase);
}
