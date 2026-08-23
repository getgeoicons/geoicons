// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni-madriz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.463 19.211a.6.6 0 0 0 .645.294l.815-.17a2 2 0 0 0 .947-.485l.362-.332a2 2 0 0 0 .607-1.077l.406-2.01a3 3 0 0 1 .223-.676l.745-1.593a1.5 1.5 0 0 1 1.799-.799l1.99.612a2 2 0 0 0 1.203-.01l2.845-.92a2 2 0 0 1 1.567.145l1.372.742a.6.6 0 0 0 .737-.133l.637-.728a1.58 1.58 0 0 1 1.164-.54l.335-.007a1.857 1.857 0 0 0 1.748-2.382l-.19-.64a3 3 0 0 0-.908-1.414l-.427-.37a3 3 0 0 0-1.656-.72l-1.688-.176a2 2 0 0 0-.983.145l-2.854 1.2a2 2 0 0 1-1.197.112l-2.99-.645A2 2 0 0 0 8.64 6.7l-1.115.386a1 1 0 0 1-.847-.09l-3.76-2.283a1 1 0 0 0-1.018-.01l-.011.005a1 1 0 0 0-.493.752l-.137 1.18a3 3 0 0 0 .058 1.021l1.72 7.424a1 1 0 0 1-.375 1.026l-.945.708a.6.6 0 0 0-.163.774z"/></svg>`,
})
export class NiMadriz {
  protected readonly b = inject(GeoIconBase);
}
