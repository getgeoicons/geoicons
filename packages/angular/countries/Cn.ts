// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m16.635 18.504-1.824.77a.5.5 0 0 1-.23.038l-3.93-.278a.5.5 0 0 1-.424-.302L9.354 16.7a.5.5 0 0 0-.634-.272l-1.196.446a.5.5 0 0 1-.364-.005l-3.667-1.496a.5.5 0 0 1-.294-.593l.174-.647a.5.5 0 0 0-.152-.505l-1.433-1.264a.5.5 0 0 1 .13-.833l1.39-.61a.5.5 0 0 0 .299-.442l.034-1.145a.5.5 0 0 1 .179-.368l1.94-1.63a.5.5 0 0 1 .761.143l.754 1.382a.5.5 0 0 0 .258.227l4.471 1.737a.5.5 0 0 0 .397-.015l4.493-2.154a.5.5 0 0 0 .192-.74l-.628-.89a.5.5 0 0 1-.023-.541l.866-1.472a.5.5 0 0 1 .408-.246l1.456-.068a.5.5 0 0 1 .504.363l.369 1.292a.5.5 0 0 0 .328.34l1.858.593a.5.5 0 0 1 .288.714l-1.333 2.458a.5.5 0 0 1-.232.217l-1.864.848a.5.5 0 0 0-.2.165l-1.39 1.95a.5.5 0 0 0-.048.498l.776 1.693a.5.5 0 0 1-.037.484l-1.327 2.006a.5.5 0 0 1-.222.185Z"/></svg>`,
})
export class Cn {
  protected readonly b = inject(GeoIconBase);
}
