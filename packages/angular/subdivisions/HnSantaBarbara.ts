// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-santa-barbara',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.728 21.366a1 1 0 0 1 .333-.627l1.25-1.095a1 1 0 0 0 .268-1.127l-.92-2.274a1 1 0 0 1-.045-.606l.487-2.044a.6.6 0 0 0-.2-.6l-1.706-1.421a.6.6 0 0 1-.112-.8l.61-.891a.6.6 0 0 0 .082-.5l-.968-3.487a1 1 0 0 0-.676-.69l-1.213-.364a1 1 0 0 1-.696-.774l-.223-1.195a.8.8 0 0 0-.546-.616l-3.052-.96a.6.6 0 0 0-.548.097l-7.29 5.64a.6.6 0 0 0-.158.766l1.886 3.406a2 2 0 0 1 .106 1.716l-.85 2.111a.928.928 0 0 0 1.15 1.229l1.128-.37a1 1 0 0 1 1.173.444l1.047 1.781a.6.6 0 0 0 .513.296l2.035.016a.6.6 0 0 1 .583.48l.646 3.14a.6.6 0 0 0 .556.479l4.612.244a.6.6 0 0 0 .627-.524z"/></svg>`,
})
export class HnSantaBarbara {
  protected readonly b = inject(GeoIconBase);
}
