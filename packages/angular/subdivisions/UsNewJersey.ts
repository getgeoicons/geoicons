// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-new-jersey',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.184 14.875a2 2 0 0 0-.418 1l-.092.753a1 1 0 0 0 .267.809l1.107 1.169a2 2 0 0 0 .923.553l1.03.282a.6.6 0 0 1 .385.833l-.472 1.011a.933.933 0 0 0 1.655.857l3.292-5.77c.58-1.018.994-2.12 1.226-3.268l.632-3.12a.6.6 0 0 0-.313-.653L15.4 8.812a.6.6 0 0 1-.182-.92l1.01-1.192a4 4 0 0 0 .654-1.08l.306-.755a.6.6 0 0 0-.25-.742l-4.495-2.658a.6.6 0 0 0-.774.143L9.716 4.056a2 2 0 0 0-.401.873l-.406 2.13a1 1 0 0 0 .218.83l2.261 2.686a.9.9 0 0 1-.1 1.261l-1.636 1.415a2 2 0 0 1-.618.364l-.675.248a2 2 0 0 0-.876.635z"/></svg>`,
})
export class UsNewJersey {
  protected readonly b = inject(GeoIconBase);
}
