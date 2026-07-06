// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-il',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.536 22.8-3.648-9.266a.5.5 0 0 1 .107-.531l1.483-1.528a.5.5 0 0 0 .135-.428l-.14-.88a.5.5 0 0 1 .023-.25l1.16-3.185.929-3.577a.5.5 0 0 1 .504-.374l1.426.058a.5.5 0 0 0 .486-.316l.522-1.323 1.707.44-.895 4.773a.5.5 0 0 1-.666.377l-1.27-.473a.5.5 0 0 0-.648.308l-.54 1.595a.5.5 0 0 0 .049.425l.538.863a.5.5 0 0 1-.17.695l-.487.288a.5.5 0 0 0-.225.286l-.507 1.686 2.802-.396a.5.5 0 0 1 .547.647z"/></svg>`,
})
export class Il {
  protected readonly b = inject(GeoIconBase);
}
