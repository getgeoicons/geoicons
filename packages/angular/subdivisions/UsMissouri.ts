// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-missouri',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.107 19.202a.3.3 0 0 0 .299.3l14.256.047-.652 2.076 1.993-.02a.6.6 0 0 0 .56-.402l1.113-3.183a1 1 0 0 0-.015-.702l-.98-2.45a1 1 0 0 0-.265-.376l-1.845-1.636a1 1 0 0 1-.257-1.137l.375-.888a1 1 0 0 0-.494-1.293l-1.022-.484a1 1 0 0 1-.407-.354l-1.884-2.859a1 1 0 0 1-.16-.656l.133-1.25a.6.6 0 0 0-.147-.46l-.792-.896a.6.6 0 0 0-.453-.202L1.886 2.45a.3.3 0 0 0-.217.505l2.041 2.18a1 1 0 0 1 .216 1.01l-.135.39a1 1 0 0 0 .164.951L4.982 8.77a.6.6 0 0 1 .131.376z"/></svg>`,
})
export class UsMissouri {
  protected readonly b = inject(GeoIconBase);
}
