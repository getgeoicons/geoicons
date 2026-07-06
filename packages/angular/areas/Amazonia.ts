// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-amazonia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.782 5.696-.185-1.433a1 1 0 0 1 .174-.704l.707-1.003a1 1 0 0 1 .487-.368l1.447-.505a1 1 0 0 1 .654-.002l2.247.769a1 1 0 0 0 .56.025l.91-.22a1 1 0 0 1 .955.276l1.464 1.515a1 1 0 0 0 .704.305l.897.015a1 1 0 0 1 .49.137l.629.369a1 1 0 0 1 .442.546l.382 1.144a1 1 0 0 0 .432.54L18.16 8.3a1 1 0 0 0 .364.132l1.892.295a1 1 0 0 1 .414.165l1.521 1.05a1 1 0 0 1 .431.855l-.02.646a1 1 0 0 1-.302.683l-1.59 1.553a1 1 0 0 0-.286.535l-.364 1.984a1 1 0 0 1-.172.403l-.814 1.132a1 1 0 0 1-.637.401l-1.78.316a1 1 0 0 0-.813.826l-.146.913a1 1 0 0 1-.242.508l-1.415 1.58a.25.25 0 0 1-.314.049l-1.684-1.002a.25.25 0 0 1-.036-.404l1.118-.97a1 1 0 0 0 .225-1.23l-1.159-2.143a1 1 0 0 0-.886-.524l-.316.002a1 1 0 0 0-.927.64l-.221.576a.25.25 0 0 1-.178.154l-1.908.433a.25.25 0 0 1-.293-.168l-.515-1.617a1 1 0 0 0-.542-.608l-2.402-1.083a1 1 0 0 1-.496-.491l-1.063-2.294a1 1 0 0 0-.386-.433l-.521-.319a1 1 0 0 1-.478-.885l.042-1.323a1 1 0 0 1 .176-.535L2.614 6.39a1 1 0 0 0 .168-.694Z"/></svg>`,
})
export class Amazonia {
  protected readonly b = inject(GeoIconBase);
}
