// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gq',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.065 9.037 1.35 16.753a.5.5 0 0 0-.012.502l.148.268a.5.5 0 0 0 .583.237l.64-.194a.5.5 0 0 1 .604.281l.219.508a.5.5 0 0 0 .59.285l1.301-.351a.5.5 0 0 1 .449.097l1.388 1.146a.5.5 0 0 0 .708-.072l.32-.397a.5.5 0 0 1 .39-.186l13.59.028a.5.5 0 0 0 .502-.5l.028-11.792a.5.5 0 0 0-.498-.501L7.816 6.054a.5.5 0 0 1-.48-.366l-.321-1.155a.5.5 0 0 0-.51-.365l-.404.023a.5.5 0 0 0-.468.562l.501 3.96a.5.5 0 0 1-.07.324Z"/></svg>`,
})
export class Gq {
  protected readonly b = inject(GeoIconBase);
}
