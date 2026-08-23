// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni-chinandega',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.273 7.662a2 2 0 0 1 0-1.703l.306-.65a.8.8 0 0 0-.242-.98l-1.389-1.048a1 1 0 0 0-1.111-.062l-.79.466a1 1 0 0 0-.49.838l-.049 2.133a2 2 0 0 1-.438 1.204l-.727.91a2 2 0 0 1-1.42.745l-5.014.357a2 2 0 0 0-.837.25l-1.247.7a1 1 0 0 1-1.157-.128l-2.093-1.88a1 1 0 0 0-1.348.01L2.8 9.22a6 6 0 0 0-1.051 1.287l-.063.104a1 1 0 0 0 .277 1.336l3.75 2.65q.383.271.693.622l2.012 2.284q.358.407.812.703l2.13 1.394 1.385 1.207a1 1 0 0 0 .835.23l2.001-.361a2 2 0 0 0 1.344-.914l2.258-3.64a3 3 0 0 1 1.417-1.197l1.536-.627a1 1 0 0 0 .62-.988l-.154-2.493a2 2 0 0 0-.186-.728z"/></svg>`,
})
export class NiChinandega {
  protected readonly b = inject(GeoIconBase);
}
