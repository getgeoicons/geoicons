// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-py',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m14.007 17.243-2.278 4.234a.5.5 0 0 0 .394.735l6.002.565a.5.5 0 0 0 .415-.16l2.216-2.412a.5.5 0 0 0 .123-.244l1.172-6.139a.5.5 0 0 0-.518-.593l-1.83.099a.5.5 0 0 1-.515-.396l-.775-3.646a.5.5 0 0 0-.446-.394l-4.094-.355a.5.5 0 0 1-.455-.453l-.441-4.926a.5.5 0 0 0-.208-.362l-2.071-1.48a.5.5 0 0 0-.36-.088l-6.023.85a.5.5 0 0 0-.407.345L1.921 8.729a.5.5 0 0 0 .126.505l3.61 3.569q.063.062.144.099l7.974 3.65a.5.5 0 0 1 .232.69Z"/></svg>`,
})
export class Py {
  protected readonly b = inject(GeoIconBase);
}
