// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-la-vega',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.28 1.376a1 1 0 0 0-.984.222L9.8 2.994a1 1 0 0 0-.285.982l.613 2.368a.6.6 0 0 1-.628.748l-.863-.067a.6.6 0 0 0-.573.31l-.523.956a.6.6 0 0 1-.235.236L5.26 9.668a2 2 0 0 1-.86.25l-1.823.104a.6.6 0 0 0-.561.524l-.079.622a.6.6 0 0 0 .317.607l2.44 1.281a1 1 0 0 1 .52.706l.62 3.397a2 2 0 0 0 .444.936l1.36 1.598a1 1 0 0 0 .652.346l.686.075a1 1 0 0 1 .884 1.109l-.096.836a.6.6 0 0 0 .575.668l1.8.063a.6.6 0 0 0 .486-.22l1.346-1.65a1 1 0 0 0 .184-.917l-1.218-4.09a1 1 0 0 1 .158-.885l1.378-1.845a1 1 0 0 0 .154-.896l-.583-1.87a.6.6 0 0 1 .449-.766l2.214-.47a.6.6 0 0 1 .635.272l1.264 2.045a.57.57 0 0 0 1.025-.12l.576-1.74a1 1 0 0 1 .657-.641l.768-.235a.615.615 0 0 0 .187-1.083L19.67 6.087a1 1 0 0 0-.603-.197l-.87.006a.6.6 0 0 1-.56-.376l-.955-2.373a1 1 0 0 0-.627-.58z"/></svg>`,
})
export class DoLaVega {
  protected readonly b = inject(GeoIconBase);
}
