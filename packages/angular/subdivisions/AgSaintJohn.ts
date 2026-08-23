// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ag-saint-john',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.202 2.116a.3.3 0 0 0-.344-.256l-1.934.304a2 2 0 0 1-1.206-.186l-1.116-.559a1 1 0 0 0-.88-.007l-1.218.585a3 3 0 0 0-1.415 1.426l-1.818 3.862a1 1 0 0 0 .354 1.26l2.037 1.345a.798.798 0 0 1-.743 1.405l-5.87-2.407a1 1 0 0 0-1.223.388L2.456 13a1 1 0 0 0 .073 1.173l.195.236a1 1 0 0 0 1.166.283l4.568-1.964a.3.3 0 0 1 .337.07l1.58 1.683a1 1 0 0 0 .596.306l2.564.343a1 1 0 0 1 .704.444l.12.183a1 1 0 0 1-.037 1.148L13.23 18.36a1 1 0 0 0-.194.486l-.367 3.198a.3.3 0 0 0 .392.32l3.28-1.08a.3.3 0 0 1 .332.104l.899 1.188a.3.3 0 0 0 .404.07l3.195-2.107a1 1 0 0 0 .44-.688l.276-1.867a.3.3 0 0 0-.266-.343l-1.399-.146a1 1 0 0 1-.711-.415l-.645-.907a1 1 0 0 1-.152-.833l.78-2.984c.057-.214.077-.437.06-.658l-.346-4.547a.3.3 0 0 0-.222-.267l-1.162-.309a.3.3 0 0 1-.223-.274l-.07-1.359a.3.3 0 0 1 .277-.314l2.389-.18a.3.3 0 0 0 .274-.34z"/></svg>`,
})
export class AgSaintJohn {
  protected readonly b = inject(GeoIconBase);
}
