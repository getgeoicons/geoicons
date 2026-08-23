// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm-saint-mark',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.371 6.57-.525 1.684a.6.6 0 0 0 .337.73l.535.228a2 2 0 0 1 1.007.953l.028.057a2 2 0 0 1 .198 1.086l-.162 1.617a5 5 0 0 1-.275 1.204l-.32.882a5 5 0 0 1-.51 1.025l-.93 1.429-.5 1.029a1 1 0 0 1-1.035.554l-.947-.13a1 1 0 0 1-.6-.312l-.37-.402a.86.86 0 0 0-1.485.487l-.01.083a.94.94 0 0 0 .328.824l.22.186a3 3 0 0 0 1.254.631l1.065.25q.372.087.709.263l1.192.625a4 4 0 0 0 .822.32l2.762.74a4 4 0 0 0 .934.135l1.037.027a4 4 0 0 0 1.9-.426l1.3-.654a1 1 0 0 1 .851-.023l.473.208a1 1 0 0 0 1.175-.281l.401-.49a1 1 0 0 1 .69-.361l.215-.018a1 1 0 0 1 .556.116l.303.163a1 1 0 0 0 .878.034l.827-.366a.6.6 0 0 0 .305-.792l-.752-1.69a6 6 0 0 1-.396-1.237l-1.134-5.543a3 3 0 0 0-.723-1.42l-1.013-1.11a3 3 0 0 1-.733-1.47l-.344-1.841-.284-3.393a.6.6 0 0 0-.916-.46l-3.676 2.3q-.601.377-1.25.665L7.92 5.954a1 1 0 0 0-.55.617Z"/></svg>`,
})
export class DmSaintMark {
  protected readonly b = inject(GeoIconBase);
}
