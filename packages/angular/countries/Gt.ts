// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m17.41 5.785.047-4.281a.3.3 0 0 0-.3-.303l-8.673.018a.3.3 0 0 0-.299.295l-.04 2.381a.3.3 0 0 1-.31.295l-1.417-.047a.3.3 0 0 0-.197.534l4.695 3.742a.6.6 0 0 1 .22.546l-.11.858a.6.6 0 0 1-.577.522l-5.561.168a1 1 0 0 0-.836.5L2.063 14.47a1 1 0 0 0-.133.498l-.002 3.163a1 1 0 0 0 .458.84l3.613 2.333c.324.21.686.354 1.066.426l5.109.973a1 1 0 0 0 .89-.271l3.892-3.846a1 1 0 0 0 .293-.614l.168-1.708a1 1 0 0 1 .402-.707l3.73-2.746a.6.6 0 0 0-.026-.984l-.925-.612a1 1 0 0 0-.675-.158l-2.485.31a.3.3 0 0 1-.337-.316z"/></svg>`,
})
export class Gt {
  protected readonly b = inject(GeoIconBase);
}
