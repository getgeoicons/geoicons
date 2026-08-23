// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-bahoruco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M15.808 17.65a.6.6 0 0 0 .61-.826l-.347-.84a.6.6 0 0 1 .192-.707l3.717-2.817a2 2 0 0 1 1.274-.405l.641.021a.78.78 0 0 0 .235-1.532l-3.807-1.058a1 1 0 0 1-.596-.46l-.68-1.17a1 1 0 0 0-.826-.495l-4.156-.159a1 1 0 0 0-.696.247l-.723.631a1 1 0 0 1-.963.2L3.866 6.415a1 1 0 0 0-.895.145l-.588.43A1 1 0 0 0 2 7.56l-.674 2.755a.6.6 0 0 0 .376.705l4.34 1.6a1 1 0 0 1 .642 1.099l-.004.025a1 1 0 0 0 .384.959L8.49 15.78a.8.8 0 0 0 .812.09l2.326-1.05a.8.8 0 0 1 .976.258l1.512 2.077a1 1 0 0 0 .718.407z"/></svg>`,
})
export class DoBahoruco {
  protected readonly b = inject(GeoIconBase);
}
