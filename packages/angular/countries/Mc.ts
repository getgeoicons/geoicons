// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mc',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.604 19.23 4.928 3.57 2.337-2.138-3.1-2.226a.25.25 0 0 1-.044-.366l.617-.719a.25.25 0 0 1 .31-.056l2.915 1.604a.5.5 0 0 0 .409.033l1.4-.497a.5.5 0 0 0 .262-.214l1.791-2.976-3.598 1.087a.5.5 0 0 1-.632-.369l-.46-2.049a.5.5 0 0 1 .385-.6l3.66-.759a.5.5 0 0 0 .376-.343l.412-1.349a.5.5 0 0 1 .126-.208l1.505-1.495a.5.5 0 0 0 .124-.506l-.604-1.891a.5.5 0 0 1 .152-.532l1.386-1.186a.5.5 0 0 1 .735.095l.357.514a.5.5 0 0 0 .582.184l.639-.233a.5.5 0 0 0 .32-.557l-.545-3.07a.5.5 0 0 0-.293-.371l-.442-.192a.5.5 0 0 0-.671.293l-.277.791a.5.5 0 0 1-.316.31l-2.524.83a.5.5 0 0 0-.235.165l-1.064 1.341a.5.5 0 0 0-.104.246l-.271 2.073a.5.5 0 0 1-.097.237l-1.517 2.004a.5.5 0 0 1-.561.171l-.917-.315a.5.5 0 0 0-.502.107L5.13 14.704a.5.5 0 0 0-.148.473l.364 1.66a.5.5 0 0 1-.204.518l-1.53 1.058a.5.5 0 0 0-.008.816Z"/></svg>`,
})
export class Mc {
  protected readonly b = inject(GeoIconBase);
}
