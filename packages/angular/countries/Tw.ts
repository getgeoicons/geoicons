// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.064 10.825-.63 4.193a.5.5 0 0 0 .085.362l.776 1.098a.5.5 0 0 1 .073.155l.539 1.941a.5.5 0 0 0 .169.256l1.394 1.12a.5.5 0 0 1 .185.343l.173 1.84a.5.5 0 0 0 .686.416l.716-.29a.5.5 0 0 0 .31-.52l-.207-1.794a.5.5 0 0 1 .015-.19l.515-1.879a.5.5 0 0 1 .188-.272l.913-.664a.5.5 0 0 0 .15-.174l.926-1.786a.5.5 0 0 0 .044-.122l1.243-5.62a.5.5 0 0 1 .039-.112l1.406-2.882a.5.5 0 0 0 .046-.283l-.2-1.573a.5.5 0 0 1 .107-.378l.526-.648a.5.5 0 0 0-.111-.73l-1.777-1.188a.5.5 0 0 0-.653.087l-.572.652a.5.5 0 0 1-.21.142l-1.76.62a.5.5 0 0 0-.256.202L7.137 10.63a.5.5 0 0 0-.073.194Z"/></svg>`,
})
export class Tw {
  protected readonly b = inject(GeoIconBase);
}
