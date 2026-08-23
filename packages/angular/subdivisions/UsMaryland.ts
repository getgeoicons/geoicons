// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-maryland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.025 17.056a1 1 0 0 0 .57-.481l.746-1.407a.6.6 0 0 0-.521-.88l-1.541-.024a.6.6 0 0 1-.59-.565l-.424-7.116a.3.3 0 0 0-.3-.282l-17.47.073a.3.3 0 0 0-.299.296l-.037 2.69a.3.3 0 0 0 .432.274L3.812 8.55a4 4 0 0 1 1.478-.396l3.159-.218a1 1 0 0 1 .722.24l3.734 3.216a.6.6 0 0 1 .118.772l-.775 1.245a1 1 0 0 0 .327 1.38l3.268 2.003a.493.493 0 0 0 .733-.547l-.86-3.213a4 4 0 0 1-.133-1.17l.076-2.212a.855.855 0 0 1 1.707-.045l.419 4.773c.028.326.11.645.242.945l.68 1.546a1 1 0 0 0 1.228.547z"/></svg>`,
})
export class UsMaryland {
  protected readonly b = inject(GeoIconBase);
}
