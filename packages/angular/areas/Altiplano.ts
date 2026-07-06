// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-altiplano',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.41 3.454.132 1.078a1 1 0 0 0 .723.841l1.152.323a1 1 0 0 1 .559.403l2.75 4.07q.088.13.132.28l1.299 4.453a1 1 0 0 1 .04.256l.116 4.734a1 1 0 0 0 .262.65l1.624 1.775a1 1 0 0 0 1.061.271l1.929-.66a1 1 0 0 0 .675-1l-.12-2.23a1 1 0 0 1 .05-.375l.774-2.282a1 1 0 0 0 .049-.406l-.402-4.718a3 3 0 0 0-.343-1.157l-1.497-2.807a3 3 0 0 0-.72-.888l-4.242-3.551a3 3 0 0 0-1.355-.646l-2.79-.54a1 1 0 0 0-1.026.43l-.674 1.025a1 1 0 0 0-.158.671Z"/></svg>`,
})
export class Altiplano {
  protected readonly b = inject(GeoIconBase);
}
