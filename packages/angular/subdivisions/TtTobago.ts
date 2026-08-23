// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-tobago',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.22 18.146a.6.6 0 0 0 .509.585l2.566.394a1 1 0 0 0 .87-.292l2.09-2.153a1 1 0 0 1 1.128-.215l.408.184a1 1 0 0 0 1.05-.143l1.141-.948a1 1 0 0 1 .627-.231l2.413-.031a1 1 0 0 0 .693-.292l2.956-2.943a1 1 0 0 1 .705-.291l1.614-.001a1 1 0 0 0 .577-.184l.889-.63a1 1 0 0 0 .391-.568l.865-3.39a1 1 0 0 0-.062-.668l-.356-.766a1 1 0 0 0-1.17-.544l-4.256 1.163a1 1 0 0 0-.157.058L11.12 8.827a1 1 0 0 0-.18.108l-5.43 4.074a1 1 0 0 0-.232.246l-1.829 2.75a1 1 0 0 1-.685.435l-1.046.156a.6.6 0 0 0-.512.602z"/></svg>`,
})
export class TtTobago {
  protected readonly b = inject(GeoIconBase);
}
