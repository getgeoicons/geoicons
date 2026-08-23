// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ag-saint-philip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.47 18.596a.6.6 0 0 0 .508.496l2.319.325a2 2 0 0 1 .732.254l4.435 2.593a3 3 0 0 0 1.444.41l4.842.114a1 1 0 0 0 .825-.401l1.462-1.958a3 3 0 0 1 .889-.794l1.954-1.143a1 1 0 0 0 .476-1.057l-1.198-6.069a.6.6 0 0 0-.887-.404l-.949.544a2 2 0 0 1-1.038.265l-1.12-.025a2 2 0 0 1-1.37-.585l-1.391-1.39a1 1 0 0 1 .17-1.552l2.234-1.42a1 1 0 0 1 .923-.079l1.134.475a.6.6 0 0 0 .826-.47l.288-2.048a3 3 0 0 1 .325-.998l.704-1.315a.6.6 0 0 0-.464-.88l-.97-.105a1 1 0 0 0-.596.121l-1.04.582a1 1 0 0 1-1.038-.038l-1.02-.672a1 1 0 0 0-.57-.166l-.962.02a1 1 0 0 0-.775.394l-1.037 1.36a1 1 0 0 1-1.644-.076l-.31-.496a.6.6 0 0 0-.71-.247L6.912 3.215a1 1 0 0 0-.541.462l-.813 1.484a3 3 0 0 1-.94 1.038L3.054 7.264a1 1 0 0 0-.435.867l.052 1.296a3 3 0 0 1-.261 1.351l-.657 1.462a2 2 0 0 0-.149 1.147z"/></svg>`,
})
export class AgSaintPhilip {
  protected readonly b = inject(GeoIconBase);
}
