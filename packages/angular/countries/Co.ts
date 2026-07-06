// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-co',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.689 17.135-4.929-1.95a.5.5 0 0 1-.31-.537l.077-.525a.5.5 0 0 1 .418-.422l.56-.086a.5.5 0 0 0 .313-.18l.684-.847a.5.5 0 0 0 .094-.444l-1.001-3.7a.5.5 0 0 1 .028-.341l.702-1.52a.5.5 0 0 1 .245-.245l1.742-.804a.5.5 0 0 0 .248-.254l.678-1.55a.5.5 0 0 1 .348-.287l1.489-.337a.5.5 0 0 0 .16-.067l2.492-1.601a.5.5 0 0 1 .653.099l.287.341a.5.5 0 0 1-.108.74L12.973 3.66a.5.5 0 0 0-.17.189l-.874 1.695a.5.5 0 0 0-.013.431l.806 1.822a.5.5 0 0 0 .448.298l2.098.037a.5.5 0 0 1 .41.227l.625.962a.5.5 0 0 0 .45.226l2.025-.122a.5.5 0 0 1 .485.706l-.406.891a.5.5 0 0 0-.03.333l.612 2.348a.5.5 0 0 1-.395.619l-2.57.46a.5.5 0 0 0-.41.444l-.15 1.525a.5.5 0 0 0 .097.348l.886 1.188a.5.5 0 0 1 .09.399l-.69 3.403a.5.5 0 0 1-.758.323l-.866-.548a.5.5 0 0 1-.209-.574l.268-.842a.5.5 0 0 0-.488-.652l-1.977.047a.5.5 0 0 1-.396-.18L9.89 17.28a.5.5 0 0 0-.2-.145Z"/></svg>`,
})
export class Co {
  protected readonly b = inject(GeoIconBase);
}
