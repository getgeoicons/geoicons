// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-san-cristobal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.013 22.21a.6.6 0 0 0 .729.443l.39-.098a1 1 0 0 0 .568-.384l4.626-6.398a1 1 0 0 0 .172-.769l-.11-.59a1 1 0 0 0-.307-.554l-1.685-1.546a2 2 0 0 0-.812-.452l-.76-.213a1 1 0 0 1-.671-.625l-.44-1.227a2 2 0 0 1 .016-1.393l.196-.508a1 1 0 0 0 .01-.692l-1.087-3.078a1 1 0 0 0-.236-.374l-2.203-2.203a.6.6 0 0 0-.758-.075l-1.006.674a1 1 0 0 0-.434.693l-.085.615a1 1 0 0 1-.65.802l-.451.163a1.5 1.5 0 0 0-.898.896l-.364.997a1.5 1.5 0 0 0-.01 1l.242.707a1 1 0 0 1-.01.675l-.42 1.123a1 1 0 0 0 .018.748l.487 1.125a2 2 0 0 0 .538.729l3.084 2.627a.6.6 0 0 1-.039.944l-.459.33a.6.6 0 0 0-.126.852l2.268 2.957a2 2 0 0 1 .358.751z"/></svg>`,
})
export class DoSanCristobal {
  protected readonly b = inject(GeoIconBase);
}
