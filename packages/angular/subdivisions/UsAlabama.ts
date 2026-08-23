// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-alabama',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.362 21.968a.6.6 0 0 0 .55.571l2.33.195a.6.6 0 0 0 .641-.705l-.3-1.652a.6.6 0 0 1 .59-.707l8.965-.01a.3.3 0 0 0 .297-.34l-.447-3.22a1 1 0 0 1 .107-.606l.691-1.304a.6.6 0 0 0 .024-.51l-.94-2.27a2 2 0 0 1-.127-.44l-1.547-9.41a.3.3 0 0 0-.292-.251L6.41 1.203a.3.3 0 0 0-.303.278L5.081 15.617z"/></svg>`,
})
export class UsAlabama {
  protected readonly b = inject(GeoIconBase);
}
