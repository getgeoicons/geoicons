// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-mayabeque',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.674 10.135a1 1 0 0 0-.706.56l-.42.911a3 3 0 0 0-.26 1.577l.167 1.552a2 2 0 0 0 .206.695l.704 1.381a.6.6 0 0 0 .51.328l4.098.17q.3.012.594.07l2.25.435q.492.095.991.066l4.263-.246a4 4 0 0 1 1.71.277l1.344.535a6 6 0 0 1 1.44.819l.606.466a1 1 0 0 0 1.211.007l.692-.52a1 1 0 0 0 .384-.625l.244-1.379a.8.8 0 0 0-.39-.833l-1.029-.59a1 1 0 0 1-.48-.658l-1.276-5.925a1 1 0 0 1 .134-.748l.826-1.295a1 1 0 0 0 .152-.637l-.134-1.337a.6.6 0 0 0-.543-.538l-8.777-.79a.6.6 0 0 0-.654.592l-.02 2.166a.6.6 0 0 1-.618.594l-1.925-.056a.6.6 0 0 0-.617.622l.02.532a1 1 0 0 1-.797 1.017z"/></svg>`,
})
export class CuMayabeque {
  protected readonly b = inject(GeoIconBase);
}
