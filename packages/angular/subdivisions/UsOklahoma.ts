// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-oklahoma',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.2 6.783v1.973l7.27.01a.3.3 0 0 1 .3.3v4.588a1 1 0 0 0 .682.948l6.305 2.12q.268.09.552.102l1.26.054a2 2 0 0 0 .699-.095l1.6-.517a1 1 0 0 1 .704.034l1.708.74a.3.3 0 0 0 .419-.27l.1-4.891a1 1 0 0 0-.01-.163l-.443-3.077a1 1 0 0 1-.01-.156l.02-1.386a.3.3 0 0 0-.3-.304z"/></svg>`,
})
export class UsOklahoma {
  protected readonly b = inject(GeoIconBase);
}
