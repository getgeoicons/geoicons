// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-sonora',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.11 3.028a.6.6 0 0 0 .351.544L7.16 5.708a1 1 0 0 1 .585.866l.038.842a3 3 0 0 0 .291 1.163l2.242 4.68a4 4 0 0 0 .606.916l2.345 2.662a1 1 0 0 0 .52.312l1.006.238a1 1 0 0 1 .769.988l-.01.67a1 1 0 0 0 .348.774l3.075 2.643a1 1 0 0 0 .896.211l.287-.072a1 1 0 0 0 .569-.387l.819-1.144a1 1 0 0 0 .08-1.03l-1.55-3.096a.6.6 0 0 1 .409-.855l.64-.138a.6.6 0 0 0 .455-.73l-.598-2.425a3 3 0 0 1-.07-1.043l.294-2.698a3 3 0 0 0-.062-1.014l-.499-2.112a.6.6 0 0 0-.586-.462l-5.64.025a3 3 0 0 1-1.041-.182L2.912 1.495a.6.6 0 0 0-.806.565z"/></svg>`,
})
export class MxSonora {
  protected readonly b = inject(GeoIconBase);
}
