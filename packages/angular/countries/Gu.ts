// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.362 13.272 5.833-4.411a2 2 0 0 0 .578-.694l1.54-3.047a.5.5 0 0 0-.378-.72l-1.863-.262a1 1 0 0 1-.752-.538l-.82-1.61a1 1 0 0 0-.509-.471l-.05-.021a1 1 0 0 0-1.185.326l-.787 1.057a1 1 0 0 0-.198.615l.02 1.227a2 2 0 0 1-.366 1.19L11.059 9.26a3 3 0 0 1-1.564 1.134l-5.408 1.67a.5.5 0 0 0-.237.797l1.216 1.47a1 1 0 0 1 .128 1.077l-1.016 2.08a.5.5 0 0 0-.005.427l.59 1.293c.3.657.457 1.37.702 2.049.082.226.187.445.32.608.474.582.94.845 1.687.92.688.071 1.105-.125 1.71-.46.987-.546 1.076-1.239 1.513-2.28.438-1.043.403-2.636.335-3.554a3.5 3.5 0 0 1 .166-1.405l.143-.408a3 3 0 0 1 1.023-1.406Z"/></svg>`,
})
export class Gu {
  protected readonly b = inject(GeoIconBase);
}
