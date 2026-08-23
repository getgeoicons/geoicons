// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-washington',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.483 5.378a.3.3 0 0 0-.297-.301l-15.097-.12a.3.3 0 0 0-.302.309l.062 2.044a1 1 0 0 1-1.217 1.006l-3.693-.82a.6.6 0 0 0-.729.547l-.001.026a.6.6 0 0 0 .039.256l1.266 3.268a7 7 0 0 1 .42 1.671l.294 2.381a.6.6 0 0 0 .515.521l1.866.253a1 1 0 0 1 .853.835l.12.753a1 1 0 0 0 .8.826l.767.146a1 1 0 0 0 .665-.104l.914-.498a1 1 0 0 1 .475-.122l2.955-.01a4 4 0 0 0 1.113-.163l2.332-.686c.358-.106.729-.16 1.102-.163l4.759-.032a.3.3 0 0 0 .296-.336l-.308-2.56z"/></svg>`,
})
export class UsWashington {
  protected readonly b = inject(GeoIconBase);
}
