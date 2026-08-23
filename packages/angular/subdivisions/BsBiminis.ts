// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-biminis',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M14.263 22.234c-.417-.498-.995-.88-1.511-1.141-.562-.285-1.19-.39-1.817-.455L7.71 20.31a1 1 0 0 0-1.026.612l-.43 1.042a.905.905 0 0 1-1.713-.572l1.188-4.627a3 3 0 0 0 .094-.818l-.026-1.062a2 2 0 0 1 .307-1.113l7.022-11.17a2 2 0 0 1 .983-.806l1.17-.444a1 1 0 0 1 .784.031l.42.2a1 1 0 0 1 .524.602l2.5 7.916c.074.235.12.48.134.725l.014.25a3 3 0 0 1-.656 2.057l-.238.296a.87.87 0 0 1-1.355-1.089l.31-.386a.663.663 0 0 0-.828-1.002l-.572.303a1 1 0 0 0-.428.437l-.774 1.55a1 1 0 0 1-.9.552l-1.32-.007a1 1 0 0 1-.914-1.392l3.18-7.465a.727.727 0 0 0-1.293-.656L7.84 14.424a1 1 0 0 0 .32 1.353l.75.479a2 2 0 0 1 .464.41l.923 1.117a1 1 0 0 0 .792.363l1.328-.028a2 2 0 0 1 .912.198l4.374 2.11a.702.702 0 0 1 .17 1.15l-1.02.94a1 1 0 0 1-.73.262l-.98-.05c-.35-.019-.656-.226-.88-.494Z"/></svg>`,
})
export class BsBiminis {
  protected readonly b = inject(GeoIconBase);
}
