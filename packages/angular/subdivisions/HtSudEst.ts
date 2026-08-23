// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-sud-est',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.161 9.67a.6.6 0 0 0-.73.53l-.186 2.067a.6.6 0 0 0 .44.632l1.654.453a2 2 0 0 0 1.056 0l1.984-.545a2 2 0 0 1 .79-.054l1.176.154a.6.6 0 0 0 .627-.352l.299-.676a.6.6 0 0 1 .571-.357l6.661.25a4 4 0 0 1 1.706.453l.48.25a4 4 0 0 1 1.183.943l1.472 1.72a.6.6 0 0 0 1.032-.224l.118-.405a1 1 0 0 0-.046-.683l-.442-.998a1 1 0 0 1-.008-.789l.51-1.222a.6.6 0 0 0-.46-.823l-11.66-1.873a2 2 0 0 0-1.223.191l-3.687 1.872a1 1 0 0 1-.673.083z"/></svg>`,
})
export class HtSudEst {
  protected readonly b = inject(GeoIconBase);
}
