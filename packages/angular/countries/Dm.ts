// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m13.64 22.695-1.527.258a.5.5 0 0 1-.553-.323L5.879 6.907a.5.5 0 0 1 .082-.485l1.292-1.587a.5.5 0 0 0 .108-.38l-.374-2.89A.5.5 0 0 1 7.502 1l1.646.064a.5.5 0 0 1 .407.238L10.69 3.15a.5.5 0 0 0 .358.233l3.527.488a.5.5 0 0 1 .362.24l3.138 5.316a.5.5 0 0 1 .01.49l-.883 1.656a.5.5 0 0 0-.048.338l.995 4.719a.5.5 0 0 1 0 .21l-.811 3.69a.5.5 0 0 1-.474.392l-1.844.056a.5.5 0 0 0-.432.276l-.585 1.17a.5.5 0 0 1-.364.27Z"/></svg>`,
})
export class Dm {
  protected readonly b = inject(GeoIconBase);
}
