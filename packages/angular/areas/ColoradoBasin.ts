// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-colorado-basin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.386 6.257-.936 4.429a1 1 0 0 1-1.15.778l-.844-.147a1 1 0 0 1-.444-.198l-1.006-.787a.6.6 0 0 0-.923.242l-1.078 2.583a1 1 0 0 0 .008.788l.936 2.123a1 1 0 0 1-.079.951l-.477.729a1 1 0 0 0-.006 1.087l.58.906a1 1 0 0 0 .481.393l1.601.62a1 1 0 0 0 1.056-.213l.039-.038a1 1 0 0 1 1.34-.044l.014.011a1 1 0 0 1 .353.704l.003.052a1 1 0 0 0 .615.864l1.041.432a.67.67 0 0 0 .828-.97l-.471-.764a.897.897 0 0 1 1.501-.982l.687.99a.6.6 0 0 0 1.078-.208l.427-1.862a.6.6 0 0 0-.244-.628l-.379-.262a1 1 0 0 1-.432-.828l.007-1.287a1 1 0 0 1 .362-.766l1.26-1.042a1 1 0 0 0 .353-.64l.097-.741a1 1 0 0 0-.181-.716l-.244-.337a1 1 0 0 1 .113-1.304l.599-.581q.148-.144.227-.334l.784-1.889a1 1 0 0 0-.271-1.141l-2.036-1.752a1 1 0 0 0-.615-.242l-.909-.033a1 1 0 0 1-.812-.471l-.964-1.55a.948.948 0 0 0-1.751.469l-.117 3.433a1 1 0 0 1-.02.173Z"/></svg>`,
})
export class ColoradoBasin {
  protected readonly b = inject(GeoIconBase);
}
