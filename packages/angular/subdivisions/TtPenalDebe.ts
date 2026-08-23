// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tt-penal-debe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.565 1.418a1 1 0 0 0-.294-.07l-1.613-.128a1 1 0 0 0-.48.08L4.423 3.806a.6.6 0 0 0-.158 1l1.578 1.392a1 1 0 0 0 .282.175l2.751 1.13a1 1 0 0 1 .62.964l-.228 5.883a1 1 0 0 1-.71.918l-2.424.73a1 1 0 0 0-.707.86l-.378 3.85a1 1 0 0 0 .208.715l.738.94a1 1 0 0 0 .898.375l5.486-.614a1 1 0 0 1 .171-.004l5.962.36a.6.6 0 0 0 .636-.605l-.11-11.697a.6.6 0 0 1 .55-.603l.192-.017a.6.6 0 0 0 .538-.71l-.394-2.056a1 1 0 0 1 .02-.46l.246-.873a1 1 0 0 0-.59-1.199z"/></svg>`,
})
export class TtPenalDebe {
  protected readonly b = inject(GeoIconBase);
}
