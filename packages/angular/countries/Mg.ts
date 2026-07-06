// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m16.727 7.89-3.924 13.264a.5.5 0 0 1-.259.307l-2.468 1.215a.5.5 0 0 1-.489-.027l-1.833-1.166a.5.5 0 0 1-.224-.335l-.319-1.815-.022-.082-.746-2.08a.5.5 0 0 1 .045-.432l1.86-2.992a.5.5 0 0 0 .063-.376l-.787-3.436a.5.5 0 0 1 .019-.285l.646-1.748a.5.5 0 0 1 .282-.291l3.505-1.41a.5.5 0 0 0 .226-.181l3.038-4.425a.25.25 0 0 1 .44.053l1.765 4.678a.5.5 0 0 1-.063.469l-.681.943a.5.5 0 0 0-.074.151Z"/></svg>`,
})
export class Mg {
  protected readonly b = inject(GeoIconBase);
}
