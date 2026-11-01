// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.959 14.031-.753-.208a.5.5 0 0 1-.35-.609l.19-.72a.5.5 0 0 1 .613-.356l.752.203a.5.5 0 0 1 .353.608l-.187.726a.5.5 0 0 1-.618.356Zm9.748 1.919 4.397-.133q.226-.007.445-.064l1.488-.389a.756.756 0 0 0 .195-1.38l-.727-.434a3 3 0 0 0-.566-.262l-2.828-.965a4 4 0 0 1-1.082-.566l-2.402-1.77a1 1 0 0 0-.546-.194l-1.229-.058a2 2 0 0 1-.8-.21l-1.607-.803a4 4 0 0 0-1.323-.395l-1.709-.2a4 4 0 0 0-1.522.114l-2.588.708a2 2 0 0 0-1.082.742l-.532.721a.6.6 0 0 0 .291.925l.298.1a1 1 0 0 0 .717-.03l2.469-1.074a2 2 0 0 1 1.263-.111l6.023 1.44a2 2 0 0 1 1.111.715l.39.499a1 1 0 0 0 .729.383l1.173.07a.539.539 0 0 1 .217 1.013l-.953.497a.589.589 0 0 0 .29 1.11Z"/></svg>`,
})
export class Cu {
  protected readonly b = inject(GeoIconBase);
}
