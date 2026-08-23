// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-hope-town',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.882 4.66-4.17-2.98a1 1 0 0 0-1.089-.048l-.205.12a1 1 0 0 0-.488.952l.017.192a1 1 0 0 0 .506.782l4.458 2.508a.906.906 0 0 0 .971-1.526Zm2.568 4.422-.788-.941a.832.832 0 1 1 1.317-1.015l.709 1.004a.781.781 0 0 1-1.237.952Zm.6 3.995 1.551-2.476a.712.712 0 0 1 1.25.675l-1.195 2.605a1 1 0 0 0-.09.457l.118 2.967a.682.682 0 0 1-1.36.105l-.42-3.688a1 1 0 0 1 .146-.645Zm.186 8.864.168-1.448a.72.72 0 0 1 1.431.149l-.133 1.452a.737.737 0 1 1-1.466-.153Z"/></svg>`,
})
export class BsHopeTown {
  protected readonly b = inject(GeoIconBase);
}
