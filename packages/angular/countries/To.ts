// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-to',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.385 3.553 1.812-1.945.327.541a.5.5 0 0 1 .018.484l-.673 1.336a.5.5 0 0 0-.014.42l.238.562a.5.5 0 0 0 .413.302l1.37.13a1 1 0 0 0 .54-.1l.907-.45a1 1 0 0 1 .921.017l2.523 1.37a1 1 0 0 0 .898.028l2.43-1.13a1 1 0 0 1 .63-.07l1.293.277a1 1 0 0 1 .497.27l.605.605a.868.868 0 0 1-.44 1.464l-.826.17a1 1 0 0 0-.592.37l-.865 1.123a1 1 0 0 0-.191.79l.2 1.09a1 1 0 0 1-.277.888l-.584.585a1 1 0 0 1-1.095.214l-1.596-.671a1 1 0 0 1-.533-.532l-.498-1.176a1 1 0 0 0-.68-.58L5.49 9.277a1 1 0 0 1-.31-.136l-3-1.978a.5.5 0 0 1-.21-.298l-.705-2.852a.5.5 0 0 1 .12-.461Zm17.445 12.97 1.536-2.664a1 1 0 0 1 .33-.345l.746-.474a.5.5 0 0 1 .767.384l.577 7.497a.5.5 0 0 1-.087.323l-.463.667a.5.5 0 0 1-.756.077l-2.863-2.735a.5.5 0 0 1-.15-.422l.237-1.93a1 1 0 0 1 .126-.378Z"/></svg>`,
})
export class To {
  protected readonly b = inject(GeoIconBase);
}
