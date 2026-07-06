// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pampas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.03 20.563 2.43 1.532 3.106-1.326a1 1 0 0 0 .604-1.012l-.15-1.62a.6.6 0 0 1 .537-.653l2.493-.253a1 1 0 0 0 .245-.057l2.612-.962a1 1 0 0 0 .548-.491l.831-1.662a1 1 0 0 0-.138-1.101l-2.055-2.377a.739.739 0 0 1 .836-1.168l3.457 1.395a1 1 0 0 0 .75-.001l1.441-.584a1 1 0 0 0 .346-.234l1.545-1.61a1 1 0 0 0 .247-.44l.869-3.342a1 1 0 0 0-.574-1.171l-2.894-1.24a3 3 0 0 0-1.363-.238l-4.635.281a3 3 0 0 0-.96.22L8.78 3.842a3 3 0 0 0-1.147.835l-5.29 6.246a3 3 0 0 0-.699 1.663l-.41 4.448a3 3 0 0 0 .02.726l.32 2.107a1 1 0 0 0 .456.697Z"/></svg>`,
})
export class Pampas {
  protected readonly b = inject(GeoIconBase);
}
