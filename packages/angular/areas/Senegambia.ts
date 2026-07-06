// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-senegambia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.654 10.045-1.454.803 1.516.879a.5.5 0 0 1 .186.19l1.432 2.572a1 1 0 0 1 .075.801l-.466 1.405a1 1 0 0 0-.05.307L3.88 18.58a1 1 0 0 0 1.254.975l4.176-1.1q.127-.032.26-.032l7.018.036a1 1 0 0 1 .442.105l2.073 1.037a1 1 0 0 0 .567.098l2.178-.262a1 1 0 0 0 .879-.937l.048-.849a1 1 0 0 0-.268-.74l-1.793-1.915a1 1 0 0 1-.263-.573l-.366-3.293a1 1 0 0 0-.253-.562l-3.85-4.245a1 1 0 0 0-.48-.294l-1.492-.402a1 1 0 0 1-.498-.313l-.717-.833a1 1 0 0 0-.804-.346l-5.823.264a1 1 0 0 0-.848.55L2.859 9.831a.5.5 0 0 1-.205.213Z"/></svg>`,
})
export class Senegambia {
  protected readonly b = inject(GeoIconBase);
}
