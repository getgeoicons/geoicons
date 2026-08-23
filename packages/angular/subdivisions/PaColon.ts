// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pa-colon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.968 12.414a3 3 0 0 1 1.108-.548l4.25-1.094a3 3 0 0 0 1.129-.565l5.007-4.013a2 2 0 0 1 1.521-.422l5.231.713a.6.6 0 0 1 .518.55l.043.583a.6.6 0 0 1-.242.527l-1.51 1.111a.6.6 0 0 1-.615.058l-2.457-1.179a.6.6 0 0 0-.821.33l-1.084 2.88a1 1 0 0 1-1.35.559l-1.317-.6a.6.6 0 0 0-.81.334l-.512 1.358a1 1 0 0 1-1.049.641l-1.28-.146a1 1 0 0 0-.74.215l-1.199.964a.6.6 0 0 1-.437.13l-1.64-.17a.6.6 0 0 0-.567.276l-1.893 2.977a.3.3 0 0 1-.524-.034l-1.326-2.825a.6.6 0 0 1 .172-.726z"/></svg>`,
})
export class PaColon {
  protected readonly b = inject(GeoIconBase);
}
