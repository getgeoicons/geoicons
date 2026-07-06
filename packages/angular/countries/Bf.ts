// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bf',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.594 15.848.483 4.04-2.648-1.298a.5.5 0 0 0-.35-.033l-1.68.453a.5.5 0 0 1-.402-.064l-2.536-1.649a.5.5 0 0 1-.223-.48l.425-3.505a.5.5 0 0 1 .298-.399l2.266-.983a.5.5 0 0 0 .299-.505l-.15-1.593a.5.5 0 0 1 .167-.421l.841-.745a.5.5 0 0 1 .407-.12l1.686.259a.5.5 0 0 0 .486-.209L9.479 6.42a.5.5 0 0 1 .21-.172l4.774-2.08a.5.5 0 0 1 .263-.038l1.89.24a.5.5 0 0 1 .433.439l.24 2.077a.5.5 0 0 0 .242.372l1.511.897a.5.5 0 0 1 .24.503l-.108.733a.5.5 0 0 0 .351.552l2.08.62a.5.5 0 0 1 .319.288l.707 1.703a.5.5 0 0 1-.212.625l-3.528 2.033a.5.5 0 0 1-.34.058l-2.46-.455a.5.5 0 0 0-.294.035l-1.305.58a.5.5 0 0 1-.22.042l-5.164-.182a.5.5 0 0 0-.514.559Z"/></svg>`,
})
export class Bf {
  protected readonly b = inject(GeoIconBase);
}
