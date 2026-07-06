// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-coromandel-peninsula',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m16.604 22.8-7.13-7.319.845-1.609a1 1 0 0 0 .106-.592l-.21-1.628a1 1 0 0 0-.148-.408L8.877 9.37a1 1 0 0 1-.155-.551l.061-4.063a1 1 0 0 0-.43-.837l-.703-.486a1 1 0 0 1-.423-.704l-.032-.268a1 1 0 0 1 .714-1.079l.181-.053a1 1 0 0 1 .832.127l1.353.898a1 1 0 0 1 .382.477l1.088 2.858a.6.6 0 0 0 .794.34l1.454-.612a.6.6 0 0 1 .77.286l.165.333a.6.6 0 0 1-.14.719l-1.033.907a.6.6 0 0 0 .026.922l.845.663a1 1 0 0 1 .33.466l.73 2.153a1 1 0 0 1 .05.387l-.188 2.852a1 1 0 0 0 .057.404l1.227 3.413a1 1 0 0 1 .056.42z"/></svg>`,
})
export class CoromandelPeninsula {
  protected readonly b = inject(GeoIconBase);
}
