// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kn-saint-paul-charlestown',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.036 12.956-5.761-.125a.3.3 0 0 0-.307.285l-.092 1.893a.6.6 0 0 1-.502.562l-.472.078a.6.6 0 0 0-.468.79l.394 1.131a.75.75 0 0 0 .812.497l3.345-.468q.293-.04.588-.024l1.709.099c.47.027.942-.057 1.374-.246l2.353-1.029q.52-.226 1.078-.332l1.174-.221q.492-.092.992-.086l1.13.015a.6.6 0 0 0 .511-.273l5.649-8.703a.507.507 0 0 0-.79-.63l-6.446 6.643a2 2 0 0 1-.88.528l-1.206.35a2 2 0 0 1-1.073.01l-2.402-.642a3 3 0 0 0-.71-.102Z"/></svg>`,
})
export class KnSaintPaulCharlestown {
  protected readonly b = inject(GeoIconBase);
}
