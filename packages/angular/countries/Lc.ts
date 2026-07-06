// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lc',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.207 6.045-3.478 7.35a.5.5 0 0 0 .15.612l.612.464a.5.5 0 0 1 .197.383l.03.963a.5.5 0 0 1-.133.354l-.554.602a.5.5 0 0 0-.027.646l1.868 2.396a.5.5 0 0 0 .337.19l1.502.174q.12.016.221.082l1.541 1.04a.5.5 0 0 1 .217.353l.084.682a.5.5 0 0 0 .524.438l.588-.033a.5.5 0 0 0 .452-.64l-.235-.796a.5.5 0 0 1 .036-.371l.657-1.268a.5.5 0 0 1 .239-.225l.76-.342a.5.5 0 0 0 .28-.343l.949-4.064a.5.5 0 0 0 .002-.215l-.577-2.797a.5.5 0 0 1 .063-.361l.66-1.083a.5.5 0 0 0 .07-.198l.189-1.505a.5.5 0 0 0-.019-.21L16.6 5.694a.5.5 0 0 1-.018-.215l.146-1.083a.5.5 0 0 0-.227-.488l-.92-.587a.5.5 0 0 1-.222-.335l-.197-1.12a.5.5 0 0 0-.383-.402l-.86-.193a.5.5 0 0 0-.516.196l-.246.344a.5.5 0 0 0-.092.242l-.074.737a.5.5 0 0 1-.247.383l-.58.336a.5.5 0 0 0-.24.344l-.275 1.523a.5.5 0 0 1-.523.41l-.435-.027a.5.5 0 0 0-.483.285Z"/></svg>`,
})
export class Lc {
  protected readonly b = inject(GeoIconBase);
}
