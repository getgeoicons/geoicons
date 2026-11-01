// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bt',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.732 13.678 6.28 7.626a2 2 0 0 1 .75-.61l.534-.25a2 2 0 0 1 1.458-.094l3.453 1.104a3 3 0 0 0 .914.143h3.961a2 2 0 0 1 1.026.283l.749.447a1 1 0 0 1 .47 1.043l-.185.983a1 1 0 0 0 .196.803l.07.088a1 1 0 0 0 .889.377l.696-.072a1 1 0 0 1 1.095.87l.32 2.554a1 1 0 0 1-.872 1.117l-3.555.43q-.284.035-.57.028l-3.263-.072a4 4 0 0 1-1.23-.223l-.842-.294a1 1 0 0 0-.841.085l-.816.486a3 3 0 0 1-.88.35l-.732.163a3 3 0 0 1-1.767-.142l-1.341-.536a2 2 0 0 0-.794-.142l-1.266.033a1 1 0 0 1-.719-.28L1.838 15a1 1 0 0 1-.106-1.322Z"/></svg>`,
})
export class Bt {
  protected readonly b = inject(GeoIconBase);
}
