// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bj',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.086 4.635 1.207.06a1.5 1.5 0 0 0 1.203-.509l.284-.323c.289-.33.42-.772.356-1.206a1 1 0 0 1 .666-1.092l.517-.177a1 1 0 0 1 .984.195l1.53 1.345a2 2 0 0 1 .607.972l.841 3.06a2 2 0 0 1-.15 1.445l-1.976 3.835a.8.8 0 0 1-.462.394l-.706.231a.8.8 0 0 0-.55.77l.09 7.927a1 1 0 0 1-.896 1.006l-1.607.166a1 1 0 0 1-.963-.485l-.266-.448a2 2 0 0 1-.28-1.012l-.023-6.86a2 2 0 0 0-.24-.942l-.465-.863a2 2 0 0 1-.239-.87l-.039-.971a1 1 0 0 0-.474-.81l-.874-.541a1 1 0 0 1-.434-1.133l.44-1.498a1 1 0 0 1 .238-.41l.91-.95a1 1 0 0 1 .771-.306Z"/></svg>`,
})
export class Bj {
  protected readonly b = inject(GeoIconBase);
}
