// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pa-darien',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M10.797 22.371c-2.775-2.093-4.751-5.96-5.656-8.317a.955.955 0 0 1 .532-1.216l.6-.258a2 2 0 0 0 1.039-1.027l.559-1.26A.923.923 0 0 0 6.546 9.13l-.588.358a.6.6 0 0 1-.889-.344l-.74-2.536a2 2 0 0 1-.005-1.107l.156-.55a1 1 0 0 1 .848-.72l2.046-.235a1 1 0 0 0 .738-.47l1.056-1.72a.6.6 0 0 1 .907-.137l2.953 2.587a.6.6 0 0 1-.01.911l-1.474 1.238a1 1 0 0 0-.187 1.324l3.164 4.713a1 1 0 0 0 1.399.265l1.78-1.23a.6.6 0 0 1 .892.253l.995 2.284a.6.6 0 0 1-.326.795l-1.056.427a2 2 0 0 0-.96.817l-1.628 2.681a.6.6 0 0 1-.894.153l-.85-.698a.6.6 0 0 0-.947.267l-1.261 3.631c-.127.365-.56.517-.868.284Z"/></svg>`,
})
export class PaDarien {
  protected readonly b = inject(GeoIconBase);
}
