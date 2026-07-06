// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mr',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.27 11.805H2.222L3.385 13.5a.5.5 0 0 1 .062.441l-.393 1.181a.5.5 0 0 0 .021.37l.587 1.249a.5.5 0 0 1 .047.218l-.016 1.298a.5.5 0 0 1-.03.162l-.45 1.257a.5.5 0 0 0 .593.653l2.094-.523a.5.5 0 0 1 .443.102l3.047 2.56a.5.5 0 0 0 .715-.073l.477-.608a.5.5 0 0 1 .624-.134l.799.417a.5.5 0 0 0 .34.044l1.863-.414a.5.5 0 0 1 .112-.012l5.995.047a.5.5 0 0 0 .471-.321l.231-.605a.5.5 0 0 0-.139-.556l-.437-.38a.5.5 0 0 1-.169-.325L18.779 5.541h2.999L15.468 1.2l.071 2.024a.5.5 0 0 1-.508.518l-4.33-.072a.5.5 0 0 0-.508.505l.036 3.658a.5.5 0 0 1-.263.446l-1.29.692a.5.5 0 0 0-.262.465l.105 2.107a.25.25 0 0 1-.25.262Z"/></svg>`,
})
export class Mr {
  protected readonly b = inject(GeoIconBase);
}
