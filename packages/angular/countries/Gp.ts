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
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.477 19.213-1.625.626a1 1 0 0 1-1.192-.38l-1.836-2.764a1 1 0 0 1-.166-.508l-.162-3.566a1 1 0 0 0-.058-.293L1.74 10.39a1 1 0 0 1-.06-.339V8.882a1 1 0 0 1 .06-.338l.468-1.303a1 1 0 0 1 .555-.584l.51-.214a1 1 0 0 1 1.093.215l.316.315a1 1 0 0 0 .39.242l1.632.544a1 1 0 0 1 .317.174l.954.781a1 1 0 0 0 1.094.114l.86-.447a1 1 0 0 0 .395-.369l.585-.964a1 1 0 0 0-.21-1.282l-.246-.208a1 1 0 0 1-.338-.587l-.124-.691a1 1 0 0 1 .03-.476l.188-.599a1 1 0 0 1 .302-.459l1.496-1.287a.5.5 0 0 1 .62-.025l1.475 1.076a1 1 0 0 1 .376.548l.231.858a1 1 0 0 1 .01.48l-.157.7a1 1 0 0 0 .111.723l.52.895a1 1 0 0 0 .74.488l1.777.225a1 1 0 0 1 .582.286l.986.986a1 1 0 0 0 .342.224l2.125.835a.639.639 0 0 1-.365 1.22l-3.098-.649a1 1 0 0 0-.462.013l-5.21 1.388a1 1 0 0 1-.598-.027l-2.037-.739a.963.963 0 0 0-1.23 1.246l.589 1.563a1 1 0 0 1 .057.235l.266 2.24a1 1 0 0 1-.215.747l-1.546 1.913a1 1 0 0 1-.419.305Zm9.769-.69-.667 1.4a1 1 0 0 0-.097.43v.838a1 1 0 0 0 .469.847l.855.537a1 1 0 0 0 .771.123l.748-.184a1 1 0 0 0 .429-.228l.968-.871a1 1 0 0 0 .33-.743v-.537a1 1 0 0 0-.34-.753l-1.435-1.256a1 1 0 0 0-.816-.236l-.47.075a1 1 0 0 0-.745.558Z"/></svg>`,
})
export class Gp {
  protected readonly b = inject(GeoIconBase);
}
