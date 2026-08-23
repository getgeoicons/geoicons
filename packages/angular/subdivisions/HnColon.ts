// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-colon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.798 5.473a.3.3 0 0 0-.432-.27l-2.48 1.22a3 3 0 0 1-1.042.295l-2.816.267a3 3 0 0 1-1.376-.193L9.583 4.809a.6.6 0 0 0-.744.27l-.396.719a1 1 0 0 1-.844.517l-1.577.05a3 3 0 0 0-1.83.698l-.368.308a2 2 0 0 1-.913.432l-.893.169a.8.8 0 0 0-.631.965l.586 2.547a1 1 0 0 0 .886.772l.847.075a.6.6 0 0 1 .548.587l.016.922a.6.6 0 0 0 .345.533l1.203.563a.6.6 0 0 0 .608-.06l4.77-3.48a1 1 0 0 1 .663-.19l.508.037a1 1 0 0 1 .631.288l1.887 1.875a2 2 0 0 0 .73.463l1.349.487c.386.14.72.395.956.73l1.206 1.716a2 2 0 0 0 .526.513l2.633 1.758a.3.3 0 0 0 .466-.249z"/></svg>`,
})
export class HnColon {
  protected readonly b = inject(GeoIconBase);
}
