// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-me',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.022 14.72.571.882q.072.109.187.17l2.837 1.493a.5.5 0 0 1 .141.111l2.425 2.74a.5.5 0 0 1 .115.229l.257 1.224a.5.5 0 0 0 .27.346l1.815.885.032-2.52a.5.5 0 0 0-.151-.365l-2.513-2.449 2.65-.35a.5.5 0 0 0 .356-.226l2.752-4.283a.25.25 0 0 1 .455.083l.46 2.132a.25.25 0 0 0 .335.18l1.854-.715a.5.5 0 0 0 .313-.385l.14-.84a.5.5 0 0 0-.21-.494l-.47-.323a.5.5 0 0 1-.16-.64l.224-.438a.5.5 0 0 1 .665-.22l.88.43a.5.5 0 0 0 .606-.13l.91-1.107a.5.5 0 0 0-.154-.76l-5.929-3.125a.5.5 0 0 1-.126-.094l-4.315-4.447a.5.5 0 0 0-.26-.142l-1.735-.347a.25.25 0 0 0-.22.062l-.465.43a.25.25 0 0 0-.02.345L9.16 3.965a.5.5 0 0 1-.042.69l-.504.465a.5.5 0 0 1-.765-.106l-.526-.857a.5.5 0 0 0-.748-.122l-1.133.951a.5.5 0 0 0-.177.344l-.18 2.27a.25.25 0 0 1-.207.227l-.87.147a.5.5 0 0 0-.408.402l-.413 2.226a.5.5 0 0 0 .109.413l.777.927a.5.5 0 0 1 .033.597l-1.082 1.633a.5.5 0 0 0-.003.548Z"/></svg>`,
})
export class Me {
  protected readonly b = inject(GeoIconBase);
}
