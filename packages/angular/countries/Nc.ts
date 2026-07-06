// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-nc',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.879 7.632 2.57 4.83a.53.53 0 0 0-.83.613l1.252 2.93a1 1 0 0 0 .268.365l2.098 1.803 2.112 2.313a1 1 0 0 0 .297.223l2.123 1.046a1 1 0 0 1 .166.103l2.097 1.605q.1.077.216.126l2.155.92a1 1 0 0 1 .265.165l.553.482a1.005 1.005 0 0 0 1.548-1.228l-.184-.348a1 1 0 0 0-.446-.432l-.962-.469a1 1 0 0 1-.238-.162l-1.986-1.823a1 1 0 0 0-.162-.12l-2.763-1.659a1 1 0 0 1-.289-.262L8.224 8.81a1 1 0 0 0-.421-.33l-1.66-.687a1 1 0 0 1-.264-.16ZM16.778 8.94l.096-.255a.884.884 0 0 1 1.6-.122l.632 1.128a.87.87 0 0 1-1.376 1.037l-.726-.733a1 1 0 0 1-.226-1.055Zm4.141 4.21-.038-.147a.95.95 0 1 1 1.866-.306l.01.152a.935.935 0 0 1-1.838.3ZM14.08 6.135l-.701 1.037a.728.728 0 1 0 1.226.781l.644-1.073a.694.694 0 0 0-1.17-.745Zm5.772 11.848-.068-.056a.887.887 0 1 0-.977 1.47l.078.042a.878.878 0 0 0 .967-1.456Z"/></svg>`,
})
export class Nc {
  protected readonly b = inject(GeoIconBase);
}
