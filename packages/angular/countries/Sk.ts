// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sk',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.287 11.268-.955 2.12a.5.5 0 0 0 .08.535L4.2 17.095a.5.5 0 0 0 .393.17l3.666-.132a.5.5 0 0 0 .47-.387l.186-.808a.5.5 0 0 1 .303-.353l2.217-.875a.5.5 0 0 1 .388.008l.979.437a.5.5 0 0 0 .609-.163l1.369-1.891a.5.5 0 0 1 .372-.206l2.893-.193a.5.5 0 0 1 .47.256l.448.805a.5.5 0 0 0 .499.254l1.226-.154a.5.5 0 0 0 .392-.286l1.72-3.728-3.733-1.903a.5.5 0 0 0-.355-.038l-1.715.452a.5.5 0 0 1-.298-.013l-1.354-.492a.5.5 0 0 0-.388.02l-1.859.897a.5.5 0 0 1-.628-.166l-1.024-1.482a.5.5 0 0 0-.68-.137l-.985.628a.5.5 0 0 1-.314.076l-1.675-.153a.5.5 0 0 0-.43.178L4.615 11.01a.5.5 0 0 1-.46.174l-1.335-.205a.5.5 0 0 0-.532.289Z"/></svg>`,
})
export class Sk {
  protected readonly b = inject(GeoIconBase);
}
