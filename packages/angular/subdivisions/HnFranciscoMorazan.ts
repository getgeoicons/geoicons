// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-francisco-morazan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.208 22.024c.843.273 1.717.443 2.6.507l3.227.232a.6.6 0 0 0 .63-.475l.256-1.213a.6.6 0 0 1 .686-.468l.636.106a.6.6 0 0 0 .682-.45l.59-2.445c.068-.28.075-.57.02-.853l-.252-1.29a1 1 0 0 1 .243-.865l3.388-3.714a1 1 0 0 0 .24-.876l-.266-1.293a2 2 0 0 0-.545-1.01L17.295 6.87a2 2 0 0 1-.543-1.004l-.637-3.044a1 1 0 0 0-.178-.395l-.597-.797a1 1 0 0 0-.857-.398l-1.747.1a1 1 0 0 0-.908.737l-.993 3.67a2 2 0 0 1-.553.928L7.986 8.845a1 1 0 0 0-.302.866l.504 3.523a1 1 0 0 1-.545 1.037l-1.686.838a1 1 0 0 0-.548.779L4.8 21.06a.6.6 0 0 0 .411.64z"/></svg>`,
})
export class HnFranciscoMorazan {
  protected readonly b = inject(GeoIconBase);
}
