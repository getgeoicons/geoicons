// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-western-south-america-without-chile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m15.972 21.342-.466.905a.6.6 0 0 1-.828.248l-2.79-1.569a1 1 0 0 1-.384-.385L9.129 16.27a1 1 0 0 0-.363-.373l-1.235-.735a.6.6 0 0 1-.266-.336l-.194-.615a.6.6 0 0 1 .114-.566l.48-.57a.6.6 0 0 0 .116-.556l-.397-1.346a1 1 0 0 1 .201-.935L9.319 8.22a1 1 0 0 0 .237-.755l-.217-2.094a1 1 0 0 1 .193-.7l1.382-1.857a1 1 0 0 1 .353-.296l2.159-1.084a.75.75 0 0 1 .782 1.272l-1.174.869a.6.6 0 0 0-.151.8l.489.781a.6.6 0 0 0 .408.273l2.54.43a.6.6 0 0 1 .497.54l.16 1.83a.6.6 0 0 1-.515.647l-.724.1a.6.6 0 0 0-.517.595v2.626a1 1 0 0 1-.8.98l-.704.144a1 1 0 0 0-.676.499l-.337.614a1 1 0 0 0 .05 1.042l.447.66a1 1 0 0 0 .428.355l1.427.622a1 1 0 0 1 .428.354l.506.744a1 1 0 0 1 .172.6l-.08 2.11a1 1 0 0 1-.11.42Z"/></svg>`,
})
export class WesternSouthAmericaWithoutChile {
  protected readonly b = inject(GeoIconBase);
}
