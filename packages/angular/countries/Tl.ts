// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tl',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.532 13.719-.49 1.651a.5.5 0 0 1-.35.34l-.471.127a.5.5 0 0 1-.396-.06l-1.23-.774a.25.25 0 0 1 .032-.44l2.563-1.144a.25.25 0 0 1 .342.3Zm3.599-3.304L7.468 11.6a.5.5 0 0 0 .383.74l.403.044a.5.5 0 0 1 .427.359l.163.563a.5.5 0 0 1-.315.611l-.543.191a.5.5 0 0 0-.283.692l.464.948 6.346-3.033a1 1 0 0 1 .393-.097l1.48-.057a1 1 0 0 0 .735-.366l.535-.653a1 1 0 0 1 .747-.366l.752-.02a1 1 0 0 0 .561-.192L22.8 8.72l-2.603-.546a1 1 0 0 0-.62.069l-1.566.712a1 1 0 0 1-.581.076l-.812-.138a1 1 0 0 0-.534.056l-1.075.424a1 1 0 0 1-.47.064l-1.844-.19a1 1 0 0 0-.328.02l-3.912.905a.5.5 0 0 0-.324.243Z"/></svg>`,
})
export class Tl {
  protected readonly b = inject(GeoIconBase);
}
