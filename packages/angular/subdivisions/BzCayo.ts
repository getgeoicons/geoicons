// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bz-cayo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M7.098 4.286a1 1 0 0 0-.42.816l.01 4.3-.773 12.824a.526.526 0 0 0 .929.368l.666-.801a2 2 0 0 1 .877-.609l1.549-.54a3 3 0 0 0 .934-.53l1.794-1.5q.332-.278.572-.638l1.854-2.78c.133-.199.23-.42.284-.653l.343-1.466a1 1 0 0 1 .218-.426l1.26-1.456a1 1 0 0 0 .136-1.109l-.186-.363a1 1 0 0 1 .067-1.02l.695-1.012a1 1 0 0 0 .17-.673l-.525-4.932a.6.6 0 0 0-.88-.465l-2.136 1.144a2 2 0 0 1-.756.228l-5.345.505a1 1 0 0 0-.487.181z"/></svg>`,
})
export class BzCayo {
  protected readonly b = inject(GeoIconBase);
}
