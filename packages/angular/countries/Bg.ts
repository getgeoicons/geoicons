// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.265 17.974-4.431.51a.5.5 0 0 1-.557-.528l.1-1.576a.5.5 0 0 0-.186-.421l-1.752-1.404a.5.5 0 0 1-.176-.492l.465-2.227a.5.5 0 0 1 .245-.334l1.16-.651a.5.5 0 0 0 .175-.707L1.438 7.24a.5.5 0 0 1-.031-.485l.67-1.408a.5.5 0 0 1 .602-.262l.663.21a.5.5 0 0 1 .343.548l-.062.439a.5.5 0 0 0 .44.567l8.08.895a.5.5 0 0 0 .379-.116l1.642-1.397a.5.5 0 0 1 .273-.116l3.944-.41a.5.5 0 0 1 .224.028l3.86 1.42a.5.5 0 0 1 .328.48l-.018.86a.5.5 0 0 1-.399.48l-1.555.322a.5.5 0 0 0-.396.538l.157 1.594a.5.5 0 0 1-.169.426l-.967.842a.5.5 0 0 0-.073.675l1.279 1.721a.5.5 0 0 1-.22.764l-.895.349a.5.5 0 0 1-.516-.094l-.903-.813a.5.5 0 0 0-.541-.083l-3.213 1.463a.5.5 0 0 0-.285.54l.12.695a.5.5 0 0 1-.406.578l-3.036.53a.5.5 0 0 1-.31-.044l-1.901-.951a.5.5 0 0 0-.28-.05Z"/></svg>`,
})
export class Bg {
  protected readonly b = inject(GeoIconBase);
}
