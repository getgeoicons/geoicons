// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm-saint-david',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.817 8.2a2 2 0 0 0-.337.62l-1.294 3.885a1 1 0 0 0 .022.691l.457 1.128a2 2 0 0 1 .1 1.174l-.377 1.741a1 1 0 0 0 .013.479l.378 1.364a1 1 0 0 0 .506.623l1.085.557a1 1 0 0 1 .536.77l.145 1.194a.3.3 0 0 0 .4.245l5.375-1.95a.3.3 0 0 0 .197-.3l-.22-3.825a1 1 0 0 1 .546-.949l.063-.032a.93.93 0 0 0 .507-.813v-.042a.876.876 0 0 0-.69-.869.876.876 0 0 1-.682-.972l.162-1.218a1 1 0 0 0-.217-.766l-.211-.258a1 1 0 0 1-.092-1.133l1.196-2.072a1 1 0 0 0 .101-.755l-.482-1.824a3 3 0 0 0-.393-.88l-.3-.458a2 2 0 0 1-.328-1.094v-.194a1 1 0 0 0-1.067-.996l-.338.023a1 1 0 0 0-.93 1.07l.15 2.052a1 1 0 0 1-.566.976l-1.676.8a1 1 0 0 0-.35.277z"/></svg>`,
})
export class DmSaintDavid {
  protected readonly b = inject(GeoIconBase);
}
