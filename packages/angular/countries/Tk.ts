// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tk',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="M21.221 16.729a1.079 1.079 0 1 1 0 2.157 1.079 1.079 0 0 1 0-2.157Zm-8.908-3.232a1.277 1.277 0 1 1-.001 2.554 1.277 1.277 0 0 1 .001-2.554ZM2.741 4.854A1.073 1.073 0 1 1 2.74 7a1.073 1.073 0 0 1 0-2.146Z"/><path d="M21.221 16.729a1.079 1.079 0 1 1 0 2.157 1.079 1.079 0 0 1 0-2.157Zm-8.908-3.232a1.277 1.277 0 1 1-.001 2.554 1.277 1.277 0 0 1 .001-2.554ZM2.741 4.854A1.073 1.073 0 1 1 2.74 7a1.073 1.073 0 0 1 0-2.146Z"/></svg>`,
})
export class Tk {
  protected readonly b = inject(GeoIconBase);
}
