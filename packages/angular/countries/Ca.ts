// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ca',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.987 20.86 5.525-.111a1 1 0 0 1 .743.308l1.388 1.453a.6.6 0 0 0 .65.145l1.777-.688q.341-.133.703-.178l1.845-.237a.8.8 0 0 0 .684-.944l-.223-1.167a1 1 0 0 0-.387-.616l-3.145-2.324a.684.684 0 0 0-1.078.685l.397 1.983a.748.748 0 0 1-1.234.702l-1.73-1.563a1.5 1.5 0 0 1-.18-2.032l1.656-2.136a.587.587 0 0 0-.435-.947l-.731-.035a3 3 0 0 0-.85.08l-2.884.697a1 1 0 0 1-.68-.077l-2.5-1.245a1 1 0 0 0-.61-.091l-1.648.273a.6.6 0 0 0-.502.592v3.585a1 1 0 0 0 .234.644l2.43 2.888a1 1 0 0 0 .785.356Zm4.94-14.747.607 1.594a1 1 0 0 0 .83.638l1.44.152a.8.8 0 0 0 .779-.4l3.037-5.354a.6.6 0 0 0-.253-.833l-.893-.446a2 2 0 0 0-1.112-.2l-.892.097a2 2 0 0 0-1.254.633l-1.89 2.051a2 2 0 0 0-.4 2.068Zm2.216 5.434 2.053 1.119a1 1 0 0 1 .503 1.07l-.13.667a.6.6 0 0 0 .269.623l.86.541a.6.6 0 0 0 .872-.273l.412-.968a1 1 0 0 0-.005-.794l-.728-1.653a1 1 0 0 0-.533-.522l-2.908-1.202a.773.773 0 0 0-.665 1.392Zm-7.264-.771 1.745 1.297a1 1 0 0 0 .729.188l1.39-.185a.6.6 0 0 0 .503-.733l-.317-1.34a.6.6 0 0 0-.655-.458l-1.077.128a1 1 0 0 1-.628-.133l-.937-.556a.6.6 0 0 0-.902.45l-.09.793a.6.6 0 0 0 .239.549Z"/></svg>`,
})
export class Ca {
  protected readonly b = inject(GeoIconBase);
}
