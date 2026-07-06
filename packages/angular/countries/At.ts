// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-at',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.106 12.678-2.176-.633a.5.5 0 0 0-.278 0L4.46 13.25a.5.5 0 0 1-.285-.003l-2.331-.72a.5.5 0 0 0-.647.466l-.03 1.16a.5.5 0 0 0 .356.49l3.35 1.012a.5.5 0 0 0 .266.006l3.315-.84a.5.5 0 0 1 .61.374l.217.952a.5.5 0 0 0 .39.38l5.615 1.123a.5.5 0 0 0 .448-.133l.79-.773a.5.5 0 0 1 .3-.14l2.443-.239a.5.5 0 0 0 .27-.111l1.36-1.118a.5.5 0 0 0 .181-.351l.155-2.185a.5.5 0 0 1 .442-.461l.693-.08a.5.5 0 0 0 .441-.531l-.236-3.454a.5.5 0 0 0-.512-.465l-1.465.037a.5.5 0 0 1-.185-.03L17.225 6.45a.5.5 0 0 0-.616.241l-.674 1.314a.5.5 0 0 1-.623.238l-1.444-.55a.5.5 0 0 0-.488.075l-2.625 2.077a.5.5 0 0 0-.15.586l.802 1.91a.25.25 0 0 1-.3.337Z"/></svg>`,
})
export class At {
  protected readonly b = inject(GeoIconBase);
}
