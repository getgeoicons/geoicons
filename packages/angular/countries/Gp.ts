// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.852 19.839 1.375-.53c.328-.125.617-.336.837-.61l1.113-1.377a2 2 0 0 0 .43-1.492l-.187-1.58a3 3 0 0 0-.172-.705l-.503-1.335a.964.964 0 0 1 1.23-1.246l1.742.632a2 2 0 0 0 1.197.053l4.676-1.246a2 2 0 0 1 .925-.025l2.865.6a.639.639 0 0 0 .365-1.22L19.815 9a2 2 0 0 1-.685-.448l-.596-.597a2 2 0 0 0-1.164-.57l-.947-.12a2 2 0 0 1-1.478-.978l-.074-.129a2 2 0 0 1-.223-1.444l.017-.078a2 2 0 0 0-.02-.958l-.075-.28a2 2 0 0 0-.752-1.095l-.87-.635a1 1 0 0 0-1.242.05l-.979.842a2 2 0 0 0-.604.918l-.029.092a2 2 0 0 0-.06.951l.02.113c.08.447.314.852.661 1.145.367.31.453.842.204 1.252l-.45.741a2 2 0 0 1-.788.739l-.612.317a1 1 0 0 1-1.094-.114l-.953-.78a2 2 0 0 0-.307-.206L4.655 6.6a1.806 1.806 0 0 0-2.567.973l-.29.806a2 2 0 0 0-.118.677v.82a2 2 0 0 0 .119.678l.587 1.63a2 2 0 0 1 .117.588l.142 3.137a2 2 0 0 0 .332 1.015L4.66 19.46a1 1 0 0 0 1.192.38Zm10.824-.12.57-1.196a1 1 0 0 1 .746-.558l.469-.075a1 1 0 0 1 .816.236l1.231 1.078a1.597 1.597 0 0 1 .016 2.389l-.584.526a2 2 0 0 1-.858.455l-.093.022a2 2 0 0 1-1.543-.247l-.495-.311a1 1 0 0 1-.469-.847v-.612a2 2 0 0 1 .194-.86Z"/></svg>`,
})
export class Gp {
  protected readonly b = inject(GeoIconBase);
}
