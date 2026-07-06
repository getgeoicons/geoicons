// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-the-red-sea',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.197 14.61-.39-2.63a1 1 0 0 0-.48-.713l-.71-.42a1 1 0 0 1-.482-.737l-.125-.996a1 1 0 0 0-.132-.386L5.306 2.719a.687.687 0 0 1 1.18-.703l1.173 1.961a.5.5 0 0 0 .913-.128l.371-1.395a.687.687 0 0 1 1.332.336l-.482 2.032a1 1 0 0 0 .086.693l1.449 2.782a1 1 0 0 0 .401.413l.659.366a1 1 0 0 1 .405.42l.465.912a1 1 0 0 1 .109.457l-.003.794q0 .16.049.311l.194.6a1 1 0 0 0 .511.59l.665.326a1 1 0 0 1 .452.446l.814 1.608a1 1 0 0 0 .162.23L17.359 17a1 1 0 0 1 .27.683v.787q0 .2.076.383l1.085 2.62a.692.692 0 0 1-1.149.731l-1.907-2.088a1 1 0 0 0-.343-.244l-1.09-.47a1 1 0 0 1-.438-.366l-.517-.78q-.095-.144-.137-.31l-.389-1.555a1 1 0 0 0-.422-.594l-.76-.498a1 1 0 0 1-.441-.69Z"/></svg>`,
})
export class TheRedSea {
  protected readonly b = inject(GeoIconBase);
}
