// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-central-eleuthera',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M15.788 22.792a.6.6 0 0 0 .587-.433l1.044-3.606q.109-.379.143-.77l.255-2.98a3 3 0 0 0-.2-1.362l-.551-1.389a1 1 0 0 1 .022-.789l.548-1.184a1 1 0 0 0-.087-.993l-1.275-1.824a3 3 0 0 0-.943-.87L7.077 1.758a.6.6 0 0 0-.903.546l.064 1.347a2 2 0 0 0 .506 1.239l.915 1.023a2 2 0 0 0 .565.44l3.756 1.962a3 3 0 0 1 .57.386l1.257 1.083a1 1 0 0 1 .266 1.152l-.16.371a1 1 0 0 0 .213 1.102l.643.643a1 1 0 0 1 .291.758l-.275 5.397a3 3 0 0 1-.068.502l-.522 2.333a.6.6 0 0 0 .575.731z"/></svg>`,
})
export class BsCentralEleuthera {
  protected readonly b = inject(GeoIconBase);
}
