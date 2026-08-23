// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pa-panama',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M1.585 8.832a.6.6 0 0 0-.023.812l1.235 1.42a.6.6 0 0 0 .773.113l.597-.376a2 2 0 0 1 1.102-.308l2.64.048a2 2 0 0 1 .689.135l2.362.918a2 2 0 0 1 .945.763l.349.529a2 2 0 0 0 .482.508l2.527 1.863a2 2 0 0 1 .757 1.139l.296 1.22q.06.253.184.481l.712 1.317a.75.75 0 0 0 1.387-.545l-1.175-4.546a1 1 0 0 1 .162-.841l.306-.419a1 1 0 0 1 .709-.403l1.97-.194a1 1 0 0 0 .757-.476l1.21-1.99a1 1 0 0 0 .073-.896l-.16-.392a1 1 0 0 0-.694-.597l-3.107-.74a2 2 0 0 1-.823-.415l-.706-.593a2 2 0 0 0-.952-.44l-1.7-.29a3 3 0 0 0-1.436.108l-2.286.749a2 2 0 0 1-.784.093l-2.16-.175a1 1 0 0 1-.64-.304l-1.7-1.772a.6.6 0 0 0-.418-.184l-1.052-.026a.6.6 0 0 0-.603.48l-.553 2.712a1 1 0 0 1-.263.497z"/></svg>`,
})
export class PaPanama {
  protected readonly b = inject(GeoIconBase);
}
