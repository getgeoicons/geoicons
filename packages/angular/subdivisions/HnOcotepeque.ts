// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-ocotepeque',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.202 3.445a1 1 0 0 0-.563.433l-.552.898a1 1 0 0 0-.133.697l.307 1.744a.902.902 0 0 1-1.012 1.049l-1.42-.198a1 1 0 0 0-.941.394l-1.273 1.711a3 3 0 0 1-.789.736l-1.127.723a1 1 0 0 0-.459.91l.03.427a1 1 0 0 0 .697.886l5.667 1.782a.6.6 0 0 0 .67-.226l.906-1.281a.6.6 0 0 1 .49-.254h.098a.6.6 0 0 1 .597.535l.152 1.388a.8.8 0 0 0 .473.645l.695.306a1 1 0 0 1 .589.781l.15 1.114a1 1 0 0 0 .19.463l1.174 1.574a.603.603 0 0 0 1.076-.48l-.4-1.983a1.675 1.675 0 0 1 1.318-1.974l.692-.137a1 1 0 0 0 .801-.878l.043-.412a1 1 0 0 1 1.128-.888l1.325.178a1 1 0 0 0 .525-.072l1.21-.515a1 1 0 0 0 .59-.727l.44-2.238a1 1 0 0 0-.972-1.193l-1.74-.015a.78.78 0 0 0-.787.766.78.78 0 0 1-1.043.721l-.854-.305a1 1 0 0 1-.58-.54l-1.013-2.313a1 1 0 0 0-.244-.34l-1.432-1.3a1 1 0 0 1-.257-.37l-.676-1.698a1 1 0 0 0-.748-.614l-.973-.18a3 3 0 0 0-1.411.079z"/></svg>`,
})
export class HnOcotepeque {
  protected readonly b = inject(GeoIconBase);
}
