// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.002 16.513-.6-.826a1 1 0 0 1-.189-.515l-.159-2.164a1 1 0 0 0-.515-.802l-.23-.127a1 1 0 0 1-.468-1.183l.157-.487a1 1 0 0 0-.15-.907l-.398-.53a1 1 0 0 0-.634-.388L3.181 8.31a1 1 0 0 1-.31-.108l-1.106-.6a1 1 0 0 1-.52-.948l.043-.628a1 1 0 0 1 .59-.844l.838-.374a1 1 0 0 1 .622-.063l.466.102a1 1 0 0 1 .71.596l.33.8a1 1 0 0 0 .115.206l.411.567a.75.75 0 0 0 1.3-.154l.049-.117a.75.75 0 0 1 1-.397l.156.07a.75.75 0 0 1 .422.859l-.04.17a1 1 0 0 0 .832 1.222l.675.096a.98.98 0 0 0 1.096-.781.733.733 0 0 1 .829-.585l2.166.325a1 1 0 0 1 .576.3l.615.644a1 1 0 0 0 .522.29l.984.203a1 1 0 0 1 .724.602l.916 2.251a1 1 0 0 0 .347.44l1.927 1.366a1 1 0 0 0 .222.12l2.112.805-3.897 1.585a.86.86 0 0 1-1-.267l-.064-.082a.768.768 0 0 0-1.287.826l.06.115a.94.94 0 0 1-.138 1.068l-.667.737a1 1 0 0 1-.556.311l-1.216.23a1 1 0 0 1-.61-.077l-5.038-2.36a1 1 0 0 1-.385-.317Z"/></svg>`,
})
export class Hm {
  protected readonly b = inject(GeoIconBase);
}
