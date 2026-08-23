// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni-granada',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M16.86 1.803a1 1 0 0 0-.923-.598l-2.276.016a1 1 0 0 0-.5.137L10.4 2.978a.6.6 0 0 0-.11.952l.958.915a1 1 0 0 1 .293.902l-.418 2.298a1 1 0 0 1-.27.521l-.934.953a1 1 0 0 0-.21 1.083l.172.413a1 1 0 0 1-.355 1.206L7.77 13.432a1 1 0 0 0-.432.843l.08 4.06a.6.6 0 0 1-.494.602l-.562.1a.6.6 0 0 0-.495.611l.027.778a2 2 0 0 0 .287.966l.544.9a1 1 0 0 0 .9.482l1.062-.046a2 2 0 0 0 1.01-.326l4.671-3.064a1 1 0 0 1 .595-.163l2.02.093a1 1 0 0 0 1.045-1.022l-.017-.735a1 1 0 0 0-.861-.967l-1.948-.273a1 1 0 0 1-.8-.647l-1.516-4.146a3 3 0 0 1-.099-1.734l.494-2.046a2 2 0 0 1 .303-.674l.427-.612a2 2 0 0 1 1.08-.776l2.402-.702a.6.6 0 0 0 .381-.817z"/></svg>`,
})
export class NiGranada {
  protected readonly b = inject(GeoIconBase);
}
