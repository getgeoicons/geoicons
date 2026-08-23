// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vc-grenadines',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.887 15.036-5.389 5.37a1 1 0 0 0 .17 1.551l.6.382a1 1 0 0 0 1.288-.184l4.93-5.629a1 1 0 0 0-.098-1.416l-.142-.122a1 1 0 0 0-1.36.048Zm2.14-10.424.295 1.3a1 1 0 0 0 1.083.774l.323-.035a1 1 0 0 0 .779-.533l1.879-3.61a.79.79 0 0 0-1.173-1.001l-2.806 2.08a1 1 0 0 0-.38 1.025Zm4.118 3.928-.657 1.84a.885.885 0 0 0 1.633.678l.842-1.773a.98.98 0 0 0-.487-1.313.99.99 0 0 0-1.331.569Zm3.657-2.652-.424.381a.84.84 0 1 1-1.123-1.252l.425-.38a.84.84 0 0 1 1.122 1.251Z"/></svg>`,
})
export class VcGrenadines {
  protected readonly b = inject(GeoIconBase);
}
