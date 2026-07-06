// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tr',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.224 7.494-1.138.275a.5.5 0 0 0-.372.381l-.465 2.173a.5.5 0 0 0 .092.41l.862 1.12a.5.5 0 0 1 .088.429l-.248.966a.5.5 0 0 0 .055.38l.785 1.318a.5.5 0 0 0 .263.215l2.323.82a.5.5 0 0 0 .46-.068l.928-.677a.5.5 0 0 1 .564-.017l1.517.972a.5.5 0 0 0 .476.035l1.609-.731a.5.5 0 0 1 .477.034l1.25.802a.5.5 0 0 0 .664-.113l.594-.76a.5.5 0 0 1 .333-.189l5.505-.68a.5.5 0 0 1 .09-.004l2.163.124a.5.5 0 0 0 .51-.635l-.495-1.749a.5.5 0 0 1-.005-.25l.272-1.171a.5.5 0 0 0-.074-.396l-1.384-2.025a.5.5 0 0 0-.447-.217l-1.3.087a.5.5 0 0 0-.193.053l-1.265.641a.5.5 0 0 1-.255.053l-2.804-.162a.5.5 0 0 1-.193-.05l-2.615-1.29a.5.5 0 0 0-.237-.05l-2.346.077a.5.5 0 0 0-.278.096l-1.518 1.11a.5.5 0 0 1-.367.09l-2.418-.349a.5.5 0 0 1-.305-.165l-.664-.757a.5.5 0 0 0-.494-.156Z"/></svg>`,
})
export class Tr {
  protected readonly b = inject(GeoIconBase);
}
