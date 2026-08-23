// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca-manitoba',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.077 22.799a.3.3 0 0 0 .3-.3l.002-6.504a.3.3 0 0 1 .076-.199l6.624-7.477a.3.3 0 0 0-.112-.477L17.55 7.27a1 1 0 0 0-.682-.025l-.728.235a.6.6 0 0 1-.767-.427L14.68 4.24a.3.3 0 0 0-.272-.227l-.903-.057a.6.6 0 0 1-.56-.547l-.17-1.935a.3.3 0 0 0-.3-.274H4.95a.3.3 0 0 0-.3.3l-.01 8.629.713 12.362a.3.3 0 0 0 .298.283z"/></svg>`,
})
export class CaManitoba {
  protected readonly b = inject(GeoIconBase);
}
