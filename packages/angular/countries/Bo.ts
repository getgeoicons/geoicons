// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.873 13.027.883-1.276a.6.6 0 0 0 .068-.554L3.292 9.79a2 2 0 0 1-.052-1.26l.73-2.54a1 1 0 0 0-.102-.786L2.874 3.53a.3.3 0 0 1 .224-.451l1.366-.157a3 3 0 0 0 1.248-.437l1.198-.75a3 3 0 0 1 1.329-.445l.387-.034a.6.6 0 0 1 .652.586l.037 1.907a1 1 0 0 0 .593.894l5.936 2.643A2 2 0 0 1 17.028 9l.122 2.156a.6.6 0 0 0 .59.566l1.89.028a.6.6 0 0 1 .54.357l1.02 2.303a1 1 0 0 1 .014.779l-.782 1.944a.3.3 0 0 1-.434.144l-1.09-.662a1 1 0 0 0-.693-.13l-2.874.506a1 1 0 0 0-.774.664l-1.022 3.021a.6.6 0 0 1-.555.408l-.7.015a.6.6 0 0 0-.431.198l-.636.704a.6.6 0 0 1-.719.132l-1.92-.981a.8.8 0 0 0-1.027.265l-.541.802a1 1 0 0 1-.702.433l-.299.038a1 1 0 0 1-1.089-.718l-.775-2.726a2 2 0 0 1-.07-.706l.09-1.122a2 2 0 0 0-.146-.928L2.812 13.6a.6.6 0 0 1 .061-.572Z"/></svg>`,
})
export class Bo {
  protected readonly b = inject(GeoIconBase);
}
