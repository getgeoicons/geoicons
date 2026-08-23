// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-texas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.607 1.908a.3.3 0 0 0-.298.295l-.128 7.594a1 1 0 0 1-.999.984l-4.982.003 2.575 2.282a2 2 0 0 1 .623 1.05l.187.816a1 1 0 0 0 .46.634l1.068.64a1 1 0 0 0 1.39-.373l.318-.576a.6.6 0 0 1 .568-.308l1.466.105a.6.6 0 0 1 .476.298l3.226 5.584a1 1 0 0 0 .623.47l1.843.46a.6.6 0 0 0 .725-.74l-.04-.145a3 3 0 0 1 .496-2.593l.171-.227a4 4 0 0 1 1.38-1.16l3.116-1.588a1 1 0 0 0 .532-.723l.288-1.697a2 2 0 0 0-.177-1.22l-.49-.99a2 2 0 0 1-.205-.926l.038-1.838a.6.6 0 0 0-.418-.584l-1.103-.352a3 3 0 0 0-1.233-.125l-1.821.196a3 3 0 0 1-1.096-.085l-3.596-.962a.6.6 0 0 1-.444-.595l.08-3.318a.3.3 0 0 0-.301-.308z"/></svg>`,
})
export class UsTexas {
  protected readonly b = inject(GeoIconBase);
}
