// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sc',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.45 13.515-1.18.475a.5.5 0 0 0-.12.86l3.186 2.472a.5.5 0 0 1 .12.656l-.367.598a.5.5 0 0 0 .117.654l1.56 1.229a.5.5 0 0 0 .332.107l.972-.045a.5.5 0 0 0 .398-.77l-.972-1.516a.5.5 0 0 1-.064-.393l.39-1.538a.5.5 0 0 0-.192-.528l-1.908-1.381a.5.5 0 0 1-.207-.42l.047-1.623a.5.5 0 0 0-.448-.512l-.634-.065a.5.5 0 0 0-.542.404l-.183.965a.5.5 0 0 1-.304.37Zm-5.848-2.641L1.565 9.78a.5.5 0 0 1 .042-.727l.787-.66a.5.5 0 0 1 .687.04l1.055 1.131a.5.5 0 0 1-.06.737l-.806.623a.5.5 0 0 1-.668-.051Zm15.072-3.895-2.37-1.988a.5.5 0 0 1 .008-.772l.723-.583a.5.5 0 0 1 .554-.049l2.692 1.478a.5.5 0 0 1 .12.784l-1.045 1.093a.5.5 0 0 1-.682.037Zm4.884.163-.327.525a.5.5 0 0 1-.685.162l-.665-.407a.5.5 0 0 1-.159-.699l.375-.579a.5.5 0 0 1 .72-.128l.616.462a.5.5 0 0 1 .125.664Z"/></svg>`,
})
export class Sc {
  protected readonly b = inject(GeoIconBase);
}
