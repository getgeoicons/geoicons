// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.546 9.456.127 2.98a.5.5 0 0 0 .159.345l1.82 1.692a.5.5 0 0 1 .16.353l.022.813a.5.5 0 0 0 .234.41l.512.321a.5.5 0 0 1 .145.71l-1.87 2.677a.5.5 0 0 0 .023.602l.52.638a.5.5 0 0 0 .326.18l1.581.193a.5.5 0 0 1 .415.34l.243.741a.5.5 0 0 0 .481.344l1.583-.02a.5.5 0 0 0 .45-.293l.437-.967a.5.5 0 0 1 .39-.29l1.551-.205a.5.5 0 0 1 .319.064l2.26 1.323.039-2.978a.5.5 0 0 1 .073-.254l2.506-4.108a.5.5 0 0 0 .069-.197l.282-2.187a.5.5 0 0 0-.372-.549l-3.364-.863a.5.5 0 0 1-.253-.156l-1.789-2.053a.5.5 0 0 1-.077-.12L11.714 4.96a.5.5 0 0 1-.037-.304l.328-1.69a.5.5 0 0 0-.012-.238l-.212-.713a.5.5 0 0 0-.33-.335l-1.431-.446a.5.5 0 0 0-.217-.018l-.66.091a.5.5 0 0 0-.43.527l.031.509a.5.5 0 0 1-.319.498l-.714.276a.5.5 0 0 0-.27.248L4.597 9.216a.5.5 0 0 0-.05.24Z"/></svg>`,
})
export class Lu {
  protected readonly b = inject(GeoIconBase);
}
