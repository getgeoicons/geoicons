// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ls',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.758 15.72-1.514-3.18a.5.5 0 0 1 .246-.672l2.114-.95a.5.5 0 0 0 .219-.19l3.74-5.984a.5.5 0 0 1 .346-.23l2.088-.325a.5.5 0 0 0 .331-.206l.998-1.417a.5.5 0 0 1 .271-.193l3.835-1.1a.5.5 0 0 1 .455.094l5.885 4.835a.5.5 0 0 1 .148.203l.933 2.367a.5.5 0 0 1-.117.543l-.76.734a.5.5 0 0 0-.153.335l-.054 1.12a.5.5 0 0 1-.284.427l-1.165.556a.5.5 0 0 0-.284.475l.088 1.817a.5.5 0 0 1-.237.45l-3.318 2.047a.5.5 0 0 1-.294.074l-2.22-.14a.5.5 0 0 0-.27.06l-1.684.92a.5.5 0 0 0-.239.584l.267.872a.5.5 0 0 1-.007.312l-.856 2.43a.5.5 0 0 1-.574.323l-2.622-.546A.5.5 0 0 1 7.793 22l-1.731-2.013a.5.5 0 0 0-.192-.137l-1.328-.538a.5.5 0 0 1-.286-.622l.358-1.07a.5.5 0 0 0-.173-.557l-1.533-1.16a.5.5 0 0 1-.15-.184Z"/></svg>`,
})
export class Ls {
  protected readonly b = inject(GeoIconBase);
}
