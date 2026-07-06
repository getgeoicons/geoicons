// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.033 11.336-1.174-.799a.5.5 0 0 1 .033-.847l2.391-1.375a.5.5 0 0 1 .445-.027l2.778 1.18a.5.5 0 0 0 .686-.366l.31-1.606a.5.5 0 0 1 .656-.378l1.423.501a.5.5 0 0 1 .265.219l.528.898a.5.5 0 0 0 .542.234l1.275-.29a.5.5 0 0 1 .304.026l2.754 1.15a.5.5 0 0 0 .391-.004l2.165-.937a.5.5 0 0 1 .328-.024l1.468.391-.823 1.29a.5.5 0 0 0-.005.53l.066.107a.5.5 0 0 0 .585.214l.855-.285a.5.5 0 0 1 .51.12l.759.753a.389.389 0 0 1-.252.664l-1.23.072a.5.5 0 0 0-.239.076L18.81 14.1a.5.5 0 0 1-.321.074l-.72-.077a.5.5 0 0 0-.51.295l-.656 1.485a.5.5 0 0 1-.333.282l-3.44.889a.5.5 0 0 1-.21.009l-5.14-.87a.5.5 0 0 1-.341-.23l-.647-1.048a.5.5 0 0 0-.257-.208l-2.47-.881a.5.5 0 0 1-.33-.417l-.185-1.708a.5.5 0 0 0-.216-.359Z"/></svg>`,
})
export class Mn {
  protected readonly b = inject(GeoIconBase);
}
