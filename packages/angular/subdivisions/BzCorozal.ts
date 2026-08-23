// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bz-corozal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M13.644 21.576a2 2 0 0 0 1.016.496l3.86.654a.6.6 0 0 0 .636-.32l.83-1.633c.377-.74.66-1.524.843-2.334l.943-4.18a10 10 0 0 0 .242-2.447l-.135-5.46a.6.6 0 0 0-.808-.549l-2.391.885a2 2 0 0 1-.88.116l-4.484-.417a2 2 0 0 0-.917.13l-.821.322a.819.819 0 0 1-.828-1.387l2.69-2.274a.8.8 0 0 0 .134-1.076l-.382-.534a.8.8 0 0 0-.645-.334l-5.2-.032a1 1 0 0 0-.62.21l-1.088.846a1 1 0 0 0-.353.535L4.435 6.02a2 2 0 0 1-.357.72L2.563 8.681a2 2 0 0 0-.405.96l-.138 1.01a.6.6 0 0 0 .375.639l3.632 1.426a1 1 0 0 1 .574.588l.835 2.286a2 2 0 0 0 .529.79z"/></svg>`,
})
export class BzCorozal {
  protected readonly b = inject(GeoIconBase);
}
