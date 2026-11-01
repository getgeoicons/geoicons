// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.516 19.716.055-.346a2 2 0 0 1 .96-1.411l4.482-2.642a2 2 0 0 1 1.225-.265l.394.041a1 1 0 0 1 .895 1.042l-.039.811a1 1 0 0 1-.366.727l-.425.348a1 1 0 0 0-.366.806l.058 1.795a1 1 0 0 1-.925 1.03l-2.667.2c-.37.027-.74-.049-1.07-.22l-1.683-.873a1 1 0 0 1-.528-1.043Zm17.51-16.263L21.06 2.27a.958.958 0 0 1 .983 1.645l-2.006 1.232a.986.986 0 1 1-1.012-1.693Zm-4.6 17.637-.069-.207a1 1 0 0 1 .311-1.087l.547-.453a1 1 0 0 1 1.462.204l.203.295a1 1 0 0 1-.351 1.447l-.681.366a1 1 0 0 1-1.422-.565Z"/></svg>`,
})
export class Gg {
  protected readonly b = inject(GeoIconBase);
}
