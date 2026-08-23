// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-michoacan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M10.75 18.967a1 1 0 0 1-1.217.53l-6.088-1.98a2 2 0 0 1-1.018-.751l-.829-1.18a1 1 0 0 1-.007-1.14l.624-.913a1 1 0 0 1 .9-.433l1.4.105a1 1 0 0 0 .618-.158l2.23-1.447a1 1 0 0 0 .417-1.12l-.705-2.407a1 1 0 0 0-.899-.717l-.492-.03a.896.896 0 0 1-.155-1.766l4.888-1.175a1 1 0 0 1 1.046.39l.226.315a1 1 0 0 0 .862.416l.207-.01a.75.75 0 0 0 .627-.396.75.75 0 0 1 .686-.396l.196.005a1 1 0 0 1 .931.719l.174.593a1 1 0 0 0 .669.676l1.356.411a3 3 0 0 0 1.276.102l1.005-.136a1 1 0 0 0 .682-.415l.596-.846a.987.987 0 0 1 1.79.659l-.326 3.533a1 1 0 0 1-.25.575l-2.738 3.06a1 1 0 0 0-.243.82l.222 1.425a.6.6 0 0 1-.719.68l-5.435-1.162a1 1 0 0 0-1.117.558z"/></svg>`,
})
export class MxMichoacan {
  protected readonly b = inject(GeoIconBase);
}
