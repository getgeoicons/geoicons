// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-transylvania',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.627 10.356-2.427.968 2.246 2.489a1 1 0 0 1 .247.526l.107.738a1 1 0 0 0 .528.743l1.513.787a1 1 0 0 1 .4.378l.894 1.51a1 1 0 0 0 .752.484l5.215.566a1 1 0 0 0 .774-.248l.81-.723a1 1 0 0 1 .449-.23l1.607-.358a1 1 0 0 1 .56.037l2.606.951a.6.6 0 0 0 .793-.44l.417-1.97a1 1 0 0 1 .64-.734l.574-.206a.6.6 0 0 0 .396-.53l.054-.93a.58.58 0 0 0-.212-.484.965.965 0 0 0-1.117-.07l-.319.197a1 1 0 0 1-.336.131l-.37.072a1 1 0 0 1-.875-.253l-.222-.209a1 1 0 0 1-.293-.522l-.121-.576a1 1 0 0 1 .024-.507l.506-1.604a1 1 0 0 0-.114-.844l-2.815-4.357a1 1 0 0 0-1.261-.364l-2.794 1.298a1 1 0 0 1-.666.063L8.678 5.35a1 1 0 0 0-.744.103l-1.61.93a1 1 0 0 0-.366.365l-1.835 3.18a1 1 0 0 1-.496.428Z"/></svg>`,
})
export class Transylvania {
  protected readonly b = inject(GeoIconBase);
}
