// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-florida',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.713 2.898a.6.6 0 0 0-.585-.463H1.863a.6.6 0 0 0-.597.66l.141 1.399a.6.6 0 0 0 .626.54l2.75-.132a1 1 0 0 1 .741.28l1.774 1.71a1 1 0 0 0 1.052.215l2.394-.916a1 1 0 0 1 1.039.202l2.876 2.675a1 1 0 0 1 .306.898l-.386 2.29a2 2 0 0 0 .06.917l.303.987q.134.436.364.834l1.516 2.614c.22.38.5.72.831 1.008l1.036.904a1 1 0 0 1 .285.419l.276.778a1 1 0 0 0 1.177.637l.789-.19a1 1 0 0 0 .746-.777l.772-3.878a1 1 0 0 0-.082-.633l-1.567-3.215a1 1 0 0 1-.09-.588l.16-1.045a1 1 0 0 0-.076-.556l-.91-2.048a11 11 0 0 1-.678-2.045l-.577-2.559a.6.6 0 0 0-.386-.433l-.712-.25a.6.6 0 0 0-.766.368l-.126.362a.6.6 0 0 1-.604.402l-6.946-.423a.6.6 0 0 1-.548-.462z"/></svg>`,
})
export class UsFlorida {
  protected readonly b = inject(GeoIconBase);
}
