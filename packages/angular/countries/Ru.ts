// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ru',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.872 17.62 1.2 14.573l1.128-.424a.5.5 0 0 0 .295-.634l-.37-1.047a.5.5 0 0 1 .02-.38l.592-1.255a.5.5 0 0 1 .31-.265l1.057-.315a.5.5 0 0 0 .266-.19l.94-1.328a.5.5 0 0 1 .497-.203l.313.056a.5.5 0 0 1 .404.407l.151.874a.5.5 0 0 0 .387.404l1.355.294a.5.5 0 0 0 .455-.13l.424-.414a.5.5 0 0 1 .443-.133l.557.107a.5.5 0 0 0 .342-.057l1.72-.983a.5.5 0 0 1 .61.09l.366.384a.5.5 0 0 0 .412.153l1.146-.114a.5.5 0 0 0 .415-.314l.157-.397a.5.5 0 0 1 .328-.297l1.367-.388a.5.5 0 0 0 .34-.327l.338-1.046a.5.5 0 0 1 .157-.232l2.067-1.705.742 2.063a.5.5 0 0 1 .026.108l.237 1.913a.5.5 0 0 0 .048.16l1.558 3.153-1.907-.722a.5.5 0 0 1-.281-.267l-.825-1.88-.848 2.762a.5.5 0 0 0 .495.646l.572-.02a.5.5 0 0 1 .378.153l1.058 1.098a.5.5 0 0 1 .132.436l-.429 2.349a.5.5 0 0 1-.469.41l-.621.028a.5.5 0 0 1-.522-.523l.043-.924a.5.5 0 0 0-.382-.51l-1.62-.39a.5.5 0 0 0-.612.411l-.13.856a.5.5 0 0 1-.249.361l-.927.521a.5.5 0 0 1-.309.06l-1.638-.21a.5.5 0 0 0-.227.023l-1.996.691a.5.5 0 0 1-.359-.012l-1.171-.498a.5.5 0 0 1-.263-.26l-.308-.71a.5.5 0 0 0-.294-.272l-1.498-.524a.5.5 0 0 0-.608.24l-.113.213a.5.5 0 0 1-.707.192l-1.34-.837a.5.5 0 0 0-.707.192z"/></svg>`,
})
export class Ru {
  protected readonly b = inject(GeoIconBase);
}
