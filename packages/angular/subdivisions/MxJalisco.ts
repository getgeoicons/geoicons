// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-jalisco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.39 21.197a1 1 0 0 1-.984.115l-1.407-.598a1 1 0 0 1-.414-.326l-2.39-3.238a1 1 0 0 1-.132-.242l-.627-1.668a1 1 0 0 1 .255-1.084l2.22-2.063a1 1 0 0 1 .373-.22l1.568-.507a1 1 0 0 1 .939.175l1.011.822a.6.6 0 0 0 .959-.312l.778-2.947a1 1 0 0 0-.071-.7l-1.3-2.62a1 1 0 0 1 .177-1.139l.788-.816a1 1 0 0 0 .256-.476l.289-1.29a.6.6 0 0 1 .834-.415l.644.293a.6.6 0 0 1 .344.641l-.157.99a.875.875 0 0 0 1.716.338l.043-.185a.6.6 0 0 1 .968-.324l.622.518a.6.6 0 0 1 .197.613l-.222.848a1 1 0 0 1-.54.65l-.975.462a1 1 0 0 0-.518.579l-.678 1.974a1 1 0 0 0 .634 1.275l1.257.412a1 1 0 0 0 1.233-.563l1.022-2.432a1 1 0 0 1 .922-.612h2.075a1 1 0 0 0 .724-.311l.691-.726a1 1 0 0 1 1.183-.2l.547.282a1 1 0 0 1 .54.913l-.044 1.864a1 1 0 0 1-.344.73l-1.798 1.565a1 1 0 0 0-.343.787l.055 1.683a1 1 0 0 1-.73.996l-2.962.828A1 1 0 0 0 16 16.958l1.38 2.672a1 1 0 0 1-.277 1.25l-1.57 1.215a1 1 0 0 1-.463.198l-1.428.216a1 1 0 0 1-1.137-.839l-.142-.929a1 1 0 0 0-.679-.8l-1.304-.425a1 1 0 0 0-.903.145z"/></svg>`,
})
export class MxJalisco {
  protected readonly b = inject(GeoIconBase);
}
