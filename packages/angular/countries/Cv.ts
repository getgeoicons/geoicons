// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cv',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.302 6.593-1.684.959a.5.5 0 0 0-.196.665l.529 1.016a.5.5 0 0 0 .685.207l1.91-1.056a.5.5 0 0 0 .145-.755l-.756-.919a.5.5 0 0 0-.633-.117Zm2.07 3.143-.916.477a.5.5 0 0 0-.209.683l.242.444a.5.5 0 0 0 .676.202l1.03-.553a.5.5 0 0 0 .123-.788l-.355-.368a.5.5 0 0 0-.591-.097Zm4.141 3.138-.436-.61a.5.5 0 0 1 .365-.788l2.852-.238a.5.5 0 0 1 .523.36l.084.294a.5.5 0 0 1-.373.626l-2.5.554a.5.5 0 0 1-.515-.198Zm9.966-1.226-.196-1.614a.5.5 0 0 1 .367-.543l.573-.153a.5.5 0 0 1 .627.43l.185 1.74a.5.5 0 0 1-.473.552l-.562.027a.5.5 0 0 1-.521-.44Zm1.331 3.256-.973.889a.5.5 0 0 0 .01.747l.93.803a.5.5 0 0 0 .639.012l.953-.762a.5.5 0 0 0 .045-.74l-.909-.93a.5.5 0 0 0-.694-.02Z"/></svg>`,
})
export class Cv {
  protected readonly b = inject(GeoIconBase);
}
