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
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.054 17.638-4.656-4.957a.5.5 0 0 1-.105-.172l-.94-2.587a.5.5 0 0 1 .252-.62L7.7 6.34a.5.5 0 0 1 .432-.002l1.245.587a.5.5 0 0 0 .435-.004l1.263-.625a.5.5 0 0 1 .438-.003l2.7 1.297a.5.5 0 0 1 .264.59l-.206.712a.5.5 0 0 0 .185.543l1 .73a.5.5 0 0 0 .773-.256l.226-.735a.5.5 0 0 1 .624-.332l1.591.484a.5.5 0 0 1 .334.337l.221.747a.5.5 0 0 0 .347.34l1.919.53a.5.5 0 0 1 .314.26l.84 1.689a.25.25 0 0 1-.191.36l-1.096.143a.5.5 0 0 0-.355.225l-1.484 2.3a.5.5 0 0 1-.43.23l-1.639-.034a.5.5 0 0 0-.393.178l-.636.758a.5.5 0 0 1-.534.156l-5.102-1.618a.5.5 0 0 0-.615.29l-.458 1.131a.5.5 0 0 1-.427.311l-1.829.136a.5.5 0 0 1-.401-.157Z"/></svg>`,
})
export class Cz {
  protected readonly b = inject(GeoIconBase);
}
