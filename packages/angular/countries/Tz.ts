// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.155 1.333-2.244.051L3.6 2.85a.5.5 0 0 1-.028.477l-.65 1.045a.5.5 0 0 0-.027.48l.41.855a.5.5 0 0 1-.096.569L1.362 8.131a.5.5 0 0 0-.144.392l.26 3.263a.5.5 0 0 0 .082.236l2.77 4.188a.5.5 0 0 0 .239.19l5.516 2.113a.5.5 0 0 1 .285.28l1.428 3.52 2.998.36q.082.01.163-.007l5.213-1.107a.5.5 0 0 0 .147-.056l2.48-1.436-1.6-1.17a.5.5 0 0 1-.19-.277l-.69-2.644a.5.5 0 0 1 .005-.27l.64-2.142a.5.5 0 0 0-.148-.518L19.523 11.9a.5.5 0 0 1-.143-.53l.754-2.314a.5.5 0 0 0-.196-.57l-2.411-1.623a.5.5 0 0 1-.213-.326l-.174-.963a.5.5 0 0 0-.246-.346l-6.806-3.843-1.462 2.003a.5.5 0 0 1-.207.165L6.054 4.565a.5.5 0 0 1-.686-.357l-.15-.714a.5.5 0 0 1 .015-.258l.409-1.247a.5.5 0 0 0-.487-.656Z"/></svg>`,
})
export class Tz {
  protected readonly b = inject(GeoIconBase);
}
