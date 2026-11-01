// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.422 14.23 3.425 3.232a1 1 0 0 0 .76.27l1.341-.1a1 1 0 0 0 .827-.563l.33-.685a.8.8 0 0 1 .933-.424l5.28 1.448a1 1 0 0 0 .625-.032l1.445-.558a4 4 0 0 0 1.196-.725l2.693-2.363a.8.8 0 0 0 .14-1.04l-.634-.967a1 1 0 0 0-.696-.44l-1.128-.16a1 1 0 0 1-.8-.65l-.211-.581a1 1 0 0 0-.642-.614l-1.046-.327a.6.6 0 0 0-.72.312l-.328.68a.6.6 0 0 1-.894.224l-.914-.668a.6.6 0 0 1-.223-.651l.16-.552a.6.6 0 0 0-.316-.708l-2.553-1.226a.6.6 0 0 0-.526.004l-1.162.574a.6.6 0 0 1-.522.005l-1.144-.539a.6.6 0 0 0-.518.003l-5.555 2.7a1 1 0 0 0-.488 1.28l1.15 2.798a3 3 0 0 0 .715 1.042Z"/></svg>`,
})
export class Cz {
  protected readonly b = inject(GeoIconBase);
}
