// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-om',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.244 16.84 4.91 22.8l2.17-.807a.5.5 0 0 1 .245-.026l1.654.236a.5.5 0 0 0 .32-.061l.626-.36a.5.5 0 0 0 .235-.306l.367-1.4a.5.5 0 0 1 .452-.373l1.78-.112a.5.5 0 0 0 .453-.372l.297-1.13a.5.5 0 0 1 .19-.28l.808-.584a.5.5 0 0 1 .236-.091l1.13-.129a.5.5 0 0 0 .437-.576l-.26-1.621a.5.5 0 0 1 .042-.297l.46-.957a.5.5 0 0 1 .451-.283h.583a.5.5 0 0 0 .407-.21l3.357-4.715a.5.5 0 0 0-.266-.77l-.854-.252a.5.5 0 0 1-.283-.215l-1.417-2.28a.5.5 0 0 0-.377-.233l-1.406-.137a.5.5 0 0 1-.113-.024l-1.56-.533a.5.5 0 0 1-.143-.076l-.633-.484a.5.5 0 0 1-.115-.123l-1.124-1.716a.5.5 0 0 0-.39-.225l-.754-.044a.5.5 0 0 0-.527.544l.112 1.241a.5.5 0 0 1-.036.236L9.966 6.87a.5.5 0 0 0 .043.464l.988 1.52a.5.5 0 0 1 .059.421l-1.474 4.749a.5.5 0 0 1-.31.323z"/></svg>`,
})
export class Om {
  protected readonly b = inject(GeoIconBase);
}
