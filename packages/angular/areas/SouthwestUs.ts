// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-southwest-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.681 6.533-.43 3.44a.6.6 0 0 0 .31.603l2.932 1.579a1 1 0 0 0 .546.117l3.994-.287a1 1 0 0 1 .86.381l2.095 2.68a.6.6 0 0 0 .859.089l.505-.425a1 1 0 0 1 .906-.2l.484.131a1 1 0 0 1 .6.458l1.75 2.973a1 1 0 0 0 .708.48l1.646.256-.379-1.512a1 1 0 0 1 .05-.633l.037-.087a1 1 0 0 1 .251-.353l.39-.351a1 1 0 0 1 .128-.098l2.328-1.499a.6.6 0 0 0 .275-.49l.03-1.294a.6.6 0 0 0-.04-.23L21.49 9.59a1 1 0 0 1-.058-.228l-.417-3.153a.604.604 0 0 0-.644-.521c-7.953.58-14.546-.022-17.181-.445a.6.6 0 0 0-.516.16l-.81.77a.6.6 0 0 0-.182.36Z"/></svg>`,
})
export class SouthwestUs {
  protected readonly b = inject(GeoIconBase);
}
