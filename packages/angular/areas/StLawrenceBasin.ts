// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-st-lawrence-basin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.845 8.487-.682.897a1 1 0 0 1-.796.394h-.265a.803.803 0 0 0-.709 1.178l.192.363a1 1 0 0 0 .878.532l2.329.013a.6.6 0 0 1 .585.715l-.4 2.038a.6.6 0 0 0 .499.708l.488.075a1 1 0 0 1 .783.633l.551 1.448a1 1 0 0 0 .684.612l2.853.739a1 1 0 0 0 .68-.065l2.212-1.053c.15-.072.28-.18.378-.315l.986-1.355a1 1 0 0 1 1.16-.348l.356.133a1 1 0 0 0 .952-.137l.94-.706a1 1 0 0 0 .322-.414l.524-1.252a1 1 0 0 1 1.113-.596l.21.04a1 1 0 0 0 1.15-.7l.62-2.122a1 1 0 0 0-.925-1.28l-.113-.004a1 1 0 0 1-.93-1.261l.03-.116a1 1 0 0 0-.12-.795l-.297-.472a1 1 0 0 0-.74-.46l-.85-.09a1 1 0 0 0-1.095.853l-.021.146a1 1 0 0 1-.448.699l-.418.27a1 1 0 0 1-1.211-.098l-.167-.15a1 1 0 0 0-1.232-.082l-.68.463a1 1 0 0 0-.215.199l-.58.72a1 1 0 0 1-.695.37l-.836.07a1 1 0 0 1-.832-.331L8.417 6.74a1 1 0 0 0-.308-.234L5.813 5.383a1 1 0 0 0-1.13.175l-.53.506a1 1 0 0 0-.282.957l.15.628a1 1 0 0 1-.176.838Z"/></svg>`,
})
export class StLawrenceBasin {
  protected readonly b = inject(GeoIconBase);
}
