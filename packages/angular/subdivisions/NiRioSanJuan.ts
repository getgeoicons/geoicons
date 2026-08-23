// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni-rio-san-juan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.424 11.757a2 2 0 0 1 .513 1.287l.011.43A1.51 1.51 0 0 1 5.162 15l-3.169-.589a.6.6 0 0 0-.706.53l-.04.385a.6.6 0 0 0 .39.624l3.45 1.268a.6.6 0 0 0 .514-.047l2.759-1.64a1 1 0 0 1 .815-.094l3.216 1.026a2 2 0 0 1 .948.649l1.366 1.692a1 1 0 0 0 .788.372l1.801-.017a1 1 0 0 1 .574.174l.905.619a1 1 0 0 0 .846.134l2.223-.654a1 1 0 0 0 .678-1.24l-.17-.582a2 2 0 0 0-.444-.788l-.927-1.015a2 2 0 0 0-.918-.571l-4.355-1.266a2 2 0 0 1-.753-.41l-3.907-3.39a2 2 0 0 1-.686-1.624l.161-2.844a1 1 0 0 0-.335-.805l-.973-.863a1 1 0 0 0-.663-.251H6.631a1 1 0 0 0-.637.229L2.722 6.713a.6.6 0 0 0-.064.864z"/></svg>`,
})
export class NiRioSanJuan {
  protected readonly b = inject(GeoIconBase);
}
