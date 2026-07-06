// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ua',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.373 8.254 1.977 9.996a.5.5 0 0 0-.084.155l-.534 1.61a.5.5 0 0 0 .324.633l2.708.857a.5.5 0 0 0 .342-.015l3.045-1.259a.5.5 0 0 1 .444.031l1.29.758a.5.5 0 0 1 .202.222l.792 1.721a.5.5 0 0 1-.125.586l-1.603 1.397a.5.5 0 0 0 .172.852l1.031.34a.5.5 0 0 0 .546-.16l1.842-2.275a.5.5 0 0 1 .608-.135l1.611.785a.25.25 0 0 1 .058.41l-.691.624a.5.5 0 0 0-.09.636l.862 1.377a.5.5 0 0 0 .568.213l3.134-.947a.5.5 0 0 0 .343-.366l.212-.923a.25.25 0 0 0-.29-.302l-1.734.321a.5.5 0 0 1-.569-.342l-.123-.395a.5.5 0 0 1 .31-.62l3.545-1.259a.5.5 0 0 0 .323-.374l.12-.61a.5.5 0 0 1 .46-.402l.896-.055a.5.5 0 0 0 .464-.423l.355-2.323a.5.5 0 0 0-.295-.534l-2.725-1.18a.5.5 0 0 0-.172-.04l-1.773-.094a.5.5 0 0 1-.454-.362l-.198-.692a.5.5 0 0 0-.304-.33l-.708-.268a.5.5 0 0 1-.317-.39l-.223-1.428a.5.5 0 0 0-.567-.418l-2.758.41a.5.5 0 0 0-.346.224l-.66 1.022a.5.5 0 0 1-.524.219L5.078 5.295a.5.5 0 0 0-.274.02l-1.588.581a.5.5 0 0 0-.287.67l.512 1.176a.5.5 0 0 1-.068.512Z"/></svg>`,
})
export class Ua {
  protected readonly b = inject(GeoIconBase);
}
