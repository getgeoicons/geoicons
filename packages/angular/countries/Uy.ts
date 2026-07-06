// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-uy',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.159 16.818.754 2.306a.5.5 0 0 0 .118.195l1.245 1.272a.5.5 0 0 0 .358.15h2.374a.5.5 0 0 1 .262.074l3.028 1.86a.5.5 0 0 0 .43.045l1.876-.668a.5.5 0 0 1 .31-.009l2.34.697a.5.5 0 0 0 .384-.04l3.837-2.109a.5.5 0 0 0 .21-.222l1.292-2.694a.5.5 0 0 0 .04-.316l-.497-2.454a.5.5 0 0 1 .073-.375l1.09-1.648a.5.5 0 0 0-.058-.624L16.88 7.37a.5.5 0 0 0-.177-.118l-2.37-.92a.5.5 0 0 1-.243-.2l-.813-1.291a.5.5 0 0 0-.722-.135l-.628.468a.5.5 0 0 1-.689-.088L8.332 1.458a.5.5 0 0 0-.525-.17l-2.524.706a.5.5 0 0 0-.348.35L3.145 8.92a.5.5 0 0 0-.017.156l.243 4.86a.5.5 0 0 1-.053.25l-1.13 2.252a.5.5 0 0 0-.03.38Z"/></svg>`,
})
export class Uy {
  protected readonly b = inject(GeoIconBase);
}
