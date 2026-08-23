// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-illinois',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M12.22 21.825a1 1 0 0 0 1.12.847l1.374-.18a1 1 0 0 0 .652-.368l.768-.963a1 1 0 0 0 .216-.542l.19-2.324a1 1 0 0 1 .214-.54l1.061-1.336a1 1 0 0 0 .217-.63l-.096-11.34q0-.129-.035-.253l-.736-2.726a.3.3 0 0 0-.288-.222l-8.175-.045a.3.3 0 0 0-.244.477l1.386 1.904a1 1 0 0 1 .005 1.17l-.26.365a1 1 0 0 1-.557.385l-1.094.29a1 1 0 0 0-.706.698l-.919 3.284a3 3 0 0 0 .317 2.351l1.36 2.268a1 1 0 0 0 .389.369l1.083.575a1 1 0 0 1 .49 1.166l-.297 1.008a1 1 0 0 0 .34 1.068l1.667 1.315a1 1 0 0 1 .37.64z"/></svg>`,
})
export class UsIllinois {
  protected readonly b = inject(GeoIconBase);
}
