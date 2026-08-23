// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-nord-ouest',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.829 11.435a1 1 0 0 0 .491-.199l1.152-.88a.761.761 0 0 0-.297-1.348l-4.663-1.043a2 2 0 0 0-.785-.018l-3.65.646a2 2 0 0 1-.434.029l-4-.172a2 2 0 0 0-1.095.27l-3.1 1.811a1 1 0 0 1-.544.136l-.978-.039a1 1 0 0 0-.927.538l-.468.9a2.9 2.9 0 0 0-.324 1.353l.002.12a2.52 2.52 0 0 0 1.217 2.126c.468.28 1.015.4 1.558.341l2.567-.28a3 3 0 0 1 .976.054l.966.215a.6.6 0 0 0 .713-.443l.236-.967a1.744 1.744 0 0 1 1.935-1.313l3.715.517a1 1 0 0 0 .837-.275l1.264-1.235a2 2 0 0 1 1.165-.556z"/></svg>`,
})
export class HtNordOuest {
  protected readonly b = inject(GeoIconBase);
}
