// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-north-abaco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="M8.975 9.682 2.18 8.04a.944.944 0 0 1 .406-1.843l5.811 1.157a1 1 0 0 0 .634-.082l1.513-.737a1 1 0 0 1 1.093.143l3.884 3.365a10 10 0 0 1 1.49 1.61l.612.826a10 10 0 0 0 2.075 2.08l2.154 1.6a.994.994 0 0 1-.64 1.791l-1.008-.048a1 1 0 0 1-.721-.358l-.451-.541a1 1 0 0 0-1.097-.305l-.64.223a1 1 0 0 1-1.125-.34l-.847-1.113a1 1 0 0 1-.202-.554l-.114-2.198a1 1 0 0 0-.284-.647l-2.56-2.616a1 1 0 0 0-.99-.262l-1.687.482a1 1 0 0 1-.51.01Z"/></svg>`,
})
export class BsNorthAbaco {
  protected readonly b = inject(GeoIconBase);
}
