// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-au',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.473 15.944-.92-.342a.5.5 0 0 1-.326-.505l.149-2.008a.5.5 0 0 0-.035-.224l-.906-2.255a.5.5 0 0 1-.034-.235l.218-2.237a.5.5 0 0 1 .355-.43l3.176-.945a.5.5 0 0 0 .246-.164L7.844 3.58a.5.5 0 0 1 .655-.109l.665.418a.5.5 0 0 0 .652-.105l1.403-1.699a.5.5 0 0 1 .482-.172l1.665.325a.5.5 0 0 1 .32.768l-.4.601a.5.5 0 0 0 .171.714l1.707.955a.5.5 0 0 0 .731-.324l.695-3.001a.25.25 0 0 1 .474-.041l1.8 4.264a.5.5 0 0 0 .098.15l3.12 3.277a.5.5 0 0 1 .13.252l.374 1.986a.5.5 0 0 1-.022.264l-1.968 5.38a.5.5 0 0 1-.333.31l-2.136.604a.5.5 0 0 1-.25.006l-2.042-.48a.5.5 0 0 1-.367-.352l-.304-1.089a.5.5 0 0 0-.345-.346l-1.7-.482a.5.5 0 0 1-.198-.11L11 13.813a.5.5 0 0 0-.493-.103l-6.703 2.24a.5.5 0 0 1-.332-.006Zm16.145 4.332-1.35.151a.5.5 0 0 0-.417.659l.458 1.34a.5.5 0 0 0 .521.336l.722-.07a.5.5 0 0 0 .449-.438l.17-1.422a.5.5 0 0 0-.553-.556Z"/></svg>`,
})
export class Au {
  protected readonly b = inject(GeoIconBase);
}
