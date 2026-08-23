// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-puebla',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.528 22.75a.6.6 0 0 0 .314.015l2.964-.657a.6.6 0 0 0 .458-.707l-.178-.86a.6.6 0 0 1 .479-.712l.638-.118a.6.6 0 0 1 .656.344l.428.95a.6.6 0 0 0 .78.306l4.052-1.709a.6.6 0 0 0 .02-1.096l-2.626-1.227a1 1 0 0 1-.555-1.114l.313-1.474a.8.8 0 0 1 .617-.617l.583-.123a.8.8 0 0 0 .574-.476l.095-.229a.8.8 0 0 0-.553-1.084l-1.297-.312a1 1 0 0 1-.717-.66l-.177-.54a1 1 0 0 1 .064-.776l1.552-2.962a.6.6 0 0 0-.297-.83l-.905-.385a.8.8 0 0 0-.788.092l-.454.334a.859.859 0 0 1-1.27-1.093l.587-1.109a1 1 0 0 0 .035-.86l-.52-1.218a1.01 1.01 0 0 0-1.766-.16L9.845 4.386a1 1 0 0 0 .045 1.166l.108.139a1 1 0 0 1 .103 1.065l-.587 1.159a1 1 0 0 0 .302 1.258l3.15 2.306a.6.6 0 0 1-.116 1.035l-2.323 1.003a1 1 0 0 1-1.184-.302l-1.445-1.848a.705.705 0 0 0-1.26.4l-.292 6.002a.6.6 0 0 1-.348.516l-1.587.731a.6.6 0 0 0-.177.965l1.887 1.923q.104.105.245.15z"/></svg>`,
})
export class MxPuebla {
  protected readonly b = inject(GeoIconBase);
}
