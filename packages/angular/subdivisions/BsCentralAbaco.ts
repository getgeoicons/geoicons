// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-central-abaco',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.198 22.411-.909-1.407a1 1 0 0 1-.073-.95l.776-1.735a1 1 0 0 0-.026-.872l-.597-1.14a1 1 0 0 1-.065-.772l1.495-4.623a1 1 0 0 1 .545-.606l1.31-.582a1 1 0 0 0 .593-.945l-.01-.316a1 1 0 0 0-.6-.886l-1.111-.484a3 3 0 0 0-1.233-.249l-2.603.03a2 2 0 0 1-1.07-.295L3.978 4.958a1 1 0 0 1-.471-.748l-.073-.685a1 1 0 0 1 .351-.87l1.107-.931a.6.6 0 0 1 .94.226l.053.128A3 3 0 0 0 7.032 3.44l1.695 1.084a3 3 0 0 0 1.825.466l1.18-.083a1 1 0 0 1 .709.228l2.354 1.952a3 3 0 0 0 1.915.69h.576a.6.6 0 0 1 .598.552l.164 2.005a1 1 0 0 1-.19.673l-.203.276a3 3 0 0 0-.58 1.719l-.003.156a3 3 0 0 0 .147.986l.059.18a3 3 0 0 0 1.714 1.846l.535.22a.727.727 0 0 1-.193 1.395l-.295.034a.803.803 0 1 0 .207 1.591l.43-.062a.6.6 0 0 1 .659.774l-.292.926a1 1 0 0 1-.538.608l-1.062.486a1 1 0 0 1-1.208-.3l-.35-.452a1 1 0 0 0-1.103-.34l-4.893 1.606a.6.6 0 0 1-.691-.245Z"/></svg>`,
})
export class BsCentralAbaco {
  protected readonly b = inject(GeoIconBase);
}
