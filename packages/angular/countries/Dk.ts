// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dk',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.936 20.304 4.124.633a.763.763 0 0 0 .67-1.279l-.982-1.039a1 1 0 0 1-.272-.738l.113-2.167a1 1 0 0 1 .416-.762l.962-.688a1 1 0 0 0 .408-.952l-.035-.255a1 1 0 0 1 .96-1.138l.608-.018a.8.8 0 0 0 .734-.544l.165-.491a.8.8 0 0 0-.547-1.028l-.884-.241a1 1 0 0 1-.727-.826l-.12-.86a2 2 0 0 1 .216-1.222l.609-1.136c.114-.213.188-.445.22-.685l.402-3.084a.3.3 0 0 0-.44-.303L10.43 2.626a1 1 0 0 0-.374.355L8.72 5.155a1 1 0 0 1-.706.465l-2.221.328a1 1 0 0 0-.703.46l-.697 1.117a2 2 0 0 0-.3.948l-.401 7.213a1 1 0 0 0 .31.781l.974.922a1 1 0 0 1 .308.643l.145 1.729a.6.6 0 0 0 .507.543Zm6.877-3.626.51.72a.964.964 0 0 1-1.51 1.193l-.577-.657a1.01 1.01 0 0 1-.126-1.14c.351-.652 1.273-.72 1.703-.116Zm1.962 4.967 1.945.778a1 1 0 0 0 1.305-.57l.207-.541a1 1 0 0 0-.769-1.344l-2.1-.35a1 1 0 0 0-1.075.572l-.051.112a1 1 0 0 0 .538 1.343Zm4.524-9.284.34.125a1 1 0 0 1 .654.994l-.09 1.616a3 3 0 0 1-.217.968l-.383.938a3 3 0 0 1-.88 1.19l-.36.294a1 1 0 0 1-1.001.155l-1.858-.735a1 1 0 0 1-.55-.535l-.752-1.746a1 1 0 0 1 .433-1.27l3.419-1.897a1.5 1.5 0 0 1 1.245-.097Z"/></svg>`,
})
export class Dk {
  protected readonly b = inject(GeoIconBase);
}
