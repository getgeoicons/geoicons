// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ecowas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.785 10.44-.318.387a1 1 0 0 0-.221.744l.09.82a1 1 0 0 0 .265.575l1.454 1.551a1 1 0 0 1 .255.508l.194 1.085a1 1 0 0 0 .377.619l2.493 1.906a1 1 0 0 0 .89.165l1.402-.412a1 1 0 0 1 .499-.017l1.192.265a1 1 0 0 0 .501-.018l3.252-.965a1 1 0 0 1 1.15.457l.269.465a1 1 0 0 0 1.061.48l.702-.141a1 1 0 0 0 .7-.535l.2-.402a1 1 0 0 1 .823-.552l.468-.034a1 1 0 0 0 .793-.495l1.315-2.269a1 1 0 0 0 .035-.937l-.38-.786a1 1 0 0 1 .24-1.186l.718-.633a1 1 0 0 0 .33-.62l.234-1.77a1 1 0 0 0-.054-.478l-.364-.983a1 1 0 0 0-.672-.617l-.951-.263a1 1 0 0 0-.725.076l-4.745 2.45a1 1 0 0 1-1.141-.157l-3.912-3.647a.837.837 0 0 0-1.408.62l.056 5.559-3.945.195a1 1 0 0 1-.842-.39l-.467-.606a1 1 0 0 0-.838-.389l-.248.011a1 1 0 0 0-.727.364Z"/></svg>`,
})
export class Ecowas {
  protected readonly b = inject(GeoIconBase);
}
