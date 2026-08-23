// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-vc-saint-patrick',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.387 8.12a1 1 0 0 0-.168-1.145l-.915-.958A1 1 0 0 0 20.1 5.83l-1.334.734a3 3 0 0 1-.956.33l-4.314.716a1 1 0 0 1-.693-.139L5.467 2.893a.6.6 0 0 0-.812.17l-.232.338a.6.6 0 0 0 .024.712l.625.789a.6.6 0 0 1-.093.84L2.574 7.683a1 1 0 0 0-.368.684L1.181 19.234a1 1 0 0 0 .641 1.03l1.964.743a1 1 0 0 0 .918-.11l2.983-2.035a3 3 0 0 1 .997-.441l3.903-.928a1 1 0 0 0 .74-.74l.362-1.503a1 1 0 0 1 .339-.54l1.342-1.1a1 1 0 0 1 .624-.226l2.452-.024a1 1 0 0 0 .636-.236l.862-.73c.304-.257.554-.572.735-.927z"/></svg>`,
})
export class VcSaintPatrick {
  protected readonly b = inject(GeoIconBase);
}
