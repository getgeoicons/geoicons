// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-espaillat',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.782 7.072a.6.6 0 0 0-.704-.606l-1.017.178a9 9 0 0 1-3.585-.097l-1.638-.38a8.3 8.3 0 0 1-3.775-2.008l-.623-.58a.3.3 0 0 0-.482.105l-.524 1.274a1 1 0 0 1-.952.619l-3.333-.09a.3.3 0 0 0-.308.301l.01 2.2a1 1 0 0 1-.496.87l-.51.296a1 1 0 0 0-.493.782l-.12 1.48a1 1 0 0 1-.55.812l-.665.333a1 1 0 0 0-.552.856l-.11 2.832a1 1 0 0 1-.262.638l-.207.226a1 1 0 0 0 .071 1.422l.161.144a1 1 0 0 0 .694.253l2.468-.069a.3.3 0 0 1 .307.274l.105 1.184a.3.3 0 0 0 .266.272l.89.099a.3.3 0 0 0 .312-.188l.566-1.437 1.207-4.428a1 1 0 0 0-.017-.582L8.35 12.38a1 1 0 0 1 .057-.774l.503-.985a.6.6 0 0 1 .8-.264l1.742.862a.6.6 0 0 0 .86-.462l.074-.57a.6.6 0 0 1 .552-.522l.564-.04a.6.6 0 0 1 .588.347l.389.845a.6.6 0 0 0 .45.342l2.55.409a.6.6 0 0 0 .695-.613l-.015-.473a.6.6 0 0 1 .564-.62l1.402-.082a3 3 0 0 0 1.117-.287l1.165-.557a.6.6 0 0 0 .342-.527z"/></svg>`,
})
export class DoEspaillat {
  protected readonly b = inject(GeoIconBase);
}
