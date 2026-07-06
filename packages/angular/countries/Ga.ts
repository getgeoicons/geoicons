// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ga',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M10.516 5.621 5.34 5.595a.5.5 0 0 0-.493.408l-.92 4.897a.5.5 0 0 1-.51.407l-.604-.022a.5.5 0 0 0-.477.697l1.487 3.452a.5.5 0 0 0 .087.135l6.162 6.882a.5.5 0 0 0 .681.06l2.019-1.583a.5.5 0 0 0 .154-.583l-.994-2.432a.5.5 0 0 1 .487-.689l1.826.09a.5.5 0 0 0 .524-.509l-.014-.822a.5.5 0 0 1 .465-.508l.492-.034a.5.5 0 0 1 .49.293l.497 1.103a.5.5 0 0 0 .388.29l3.191.438a.5.5 0 0 0 .517-.275l.804-1.634a.5.5 0 0 0 .05-.183l.305-4.072a.5.5 0 0 0-.252-.473l-1.949-1.105a.5.5 0 0 1-.146-.744l2.067-2.635a.5.5 0 0 0 .035-.566l-.907-1.513a.5.5 0 0 0-.565-.224l-2.167.614a.5.5 0 0 1-.634-.526l.222-2.456a.5.5 0 0 0-.496-.545l-5.689-.026a.5.5 0 0 0-.502.507l.047 3.405a.5.5 0 0 1-.502.507Z"/></svg>`,
})
export class Ga {
  protected readonly b = inject(GeoIconBase);
}
