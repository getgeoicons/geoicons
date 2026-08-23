// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-olancho',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.792 9.575a1 1 0 0 0-.202-.627l-.482-.637a1 1 0 0 0-.59-.375l-.789-.168a1 1 0 0 1-.57-.35l-1.3-1.614a2 2 0 0 0-.473-.426l-2.714-1.751a1 1 0 0 0-1.068-.01l-2.583 1.596a3 3 0 0 1-.844.357l-2.526.637a1 1 0 0 1-.747-.105L7.213 5.7a1 1 0 0 0-.841-.077L3.109 6.796a1 1 0 0 0-.546.474L1.428 9.422a1 1 0 0 0-.026.88L4.09 16.22a1 1 0 0 0 .52.507l2.612 1.107a1 1 0 0 0 .706.028l1.478-.492a1 1 0 0 1 .952.177l2.206 1.82a1 1 0 0 0 .847.206l1.691-.365a1 1 0 0 1 1.004.369l.333.432a.8.8 0 0 0 1.186.092l.73-.695a3 3 0 0 1 1.464-.767l.323-.067a1 1 0 0 0 .772-1.208l-.15-.64a1 1 0 0 1 .255-.924l1.392-1.436a1 1 0 0 0 .282-.672z"/></svg>`,
})
export class HnOlancho {
  protected readonly b = inject(GeoIconBase);
}
