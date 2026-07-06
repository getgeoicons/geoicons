// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-na',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linecap="round" stroke-linejoin="round" d="m1.654 4.196-.343-1.47a.5.5 0 0 1 .358-.597l1.608-.428a.5.5 0 0 1 .424.08l.82.598a.5.5 0 0 0 .3.096l6.655-.058a.5.5 0 0 1 .328.119l.63.536a.5.5 0 0 0 .308.118l2.578.09a.5.5 0 0 0 .103-.008l5.35-.923a.5.5 0 0 1 .305.044l1.722.843-2.612 1.65-.426-.831-3.556.659a.5.5 0 0 0-.408.492l.001 4.488a.5.5 0 0 1-.5.5h-.58a.5.5 0 0 0-.5.5V21.07a.5.5 0 0 1-.166.373l-.862.77a.5.5 0 0 1-.389.123l-2.173-.245a.5.5 0 0 1-.377-.248l-.374-.648a.5.5 0 0 0-.771-.119l-.338.31a.5.5 0 0 1-.747-.08l-1.204-1.708a.5.5 0 0 1-.086-.214L5.567 11.56a.5.5 0 0 0-.054-.163L1.7 4.319a.5.5 0 0 1-.047-.123"/></svg>`,
})
export class Na {
  protected readonly b = inject(GeoIconBase);
}
