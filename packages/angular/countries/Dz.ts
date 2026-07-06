// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.937 21.292 1.41 13.225a.5.5 0 0 1-.214-.403l-.015-1.208a.5.5 0 0 1 .32-.473l4.766-1.849a.5.5 0 0 0 .306-.581l-.125-.527a.5.5 0 0 1 .451-.614l1.574-.112a.5.5 0 0 0 .438-.659l-.918-2.728a.5.5 0 0 1 .307-.63l6.149-2.173a.5.5 0 0 1 .162-.029l4.065-.033a.5.5 0 0 1 .47.683l-1.037 2.637a.5.5 0 0 0 .047.457l1.555 2.367q.066.102.08.222l.801 7.606a.5.5 0 0 0 .149.306l1.658 1.613a.5.5 0 0 1-.054.762L16.9 21.834a.5.5 0 0 1-.165.08l-2.8.754a.5.5 0 0 1-.615-.36l-.186-.73a.5.5 0 0 0-.198-.286Z"/></svg>`,
})
export class Dz {
  protected readonly b = inject(GeoIconBase);
}
