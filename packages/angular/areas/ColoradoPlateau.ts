// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-colorado-plateau',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.965 11.632-.567 1.906a1 1 0 0 0 .146.868l1.415 1.972a1 1 0 0 0 .499.367l1.805.596a1 1 0 0 1 .55.447l.871 1.498a1 1 0 0 0 .487.424l3.388 1.381a1 1 0 0 1 .217.122l1.768 1.307a1 1 0 0 0 .836.166l3.397-.85a1 1 0 0 0 .652-.522l1.185-2.37a1 1 0 0 0 .097-.32l.3-2.318a1 1 0 0 1 .565-.776l.542-.255a1 1 0 0 0 .571-.982l-.022-.288a1 1 0 0 0-.202-.53l-1.132-1.485a1 1 0 0 0-.666-.386l-.974-.126a1 1 0 0 1-.858-1.152l.025-.157a1 1 0 0 1 .534-.731l.596-.303a1 1 0 0 0 .517-.65l.579-2.321A1 1 0 0 0 20 5.456l-1.565-2.974a1 1 0 0 0-.654-.507l-3.108-.736a1 1 0 0 0-.33-.022l-2.376.237a1 1 0 0 0-.65.333L7.913 5.641a1 1 0 0 0-.089.116L5.142 9.875a1 1 0 0 1-.312.305l-1.432.887a1 1 0 0 0-.433.565Z"/></svg>`,
})
export class ColoradoPlateau {
  protected readonly b = inject(GeoIconBase);
}
