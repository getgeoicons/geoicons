// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-jm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.438 9.01-.153.946a.5.5 0 0 0 .444.577l1.715.173a.5.5 0 0 1 .378.238l.884 1.461a.5.5 0 0 0 .417.241l.642.014a.5.5 0 0 1 .488.493l.01.679a.5.5 0 0 0 .323.46l.807.306a.5.5 0 0 0 .208.031l2.57-.16a.5.5 0 0 1 .383.145l1.688 1.677a.5.5 0 0 0 .68.024l.253-.22a.5.5 0 0 0 .087-.658l-.339-.502a.5.5 0 0 1 .019-.585l.343-.445a.5.5 0 0 1 .708-.085l.586.468a.5.5 0 0 0 .752-.154l.338-.626a.5.5 0 0 1 .705-.186l2.224 1.39 3.389-.352a.5.5 0 0 0 .367-.77l-1.47-2.259a.5.5 0 0 0-.294-.21l-3.924-1.018a.5.5 0 0 1-.203-.107l-1.397-1.217a.5.5 0 0 0-.218-.11l-4.315-.977-.077-.012-4.22-.285a.5.5 0 0 0-.357.118l-.722.612a.5.5 0 0 1-.362.117l-2.03-.159a.5.5 0 0 0-.308.078l-.795.509a.5.5 0 0 0-.224.34Z"/></svg>`,
})
export class Jm {
  protected readonly b = inject(GeoIconBase);
}
