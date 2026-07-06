// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ne',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.746 17.954 6.3 19.865a.5.5 0 0 1-.597.374l-.948-.215a.5.5 0 0 1-.276-.17l-2.7-3.275a.5.5 0 0 1 .324-.815l3.508-.435a.5.5 0 0 0 .394-.29l.863-1.906a.5.5 0 0 0 .044-.207V9.9l2.019-.42a.5.5 0 0 0 .237-.121l2.04-1.88a.5.5 0 0 1 .071-.055l5.703-3.625a.5.5 0 0 1 .479-.031L19.898 4.9a.5.5 0 0 0 .393.013l1.101-.431.186 1.923a.5.5 0 0 0 .096.25L22.8 8.172l-.535 1.168a.5.5 0 0 0-.044.19l-.14 3.679a.5.5 0 0 1-.111.296l-3.777 4.647a.5.5 0 0 1-.488.175l-1.83-.373a.5.5 0 0 0-.335.05l-1.163.623a.5.5 0 0 1-.317.053l-6.747-1.106a.5.5 0 0 0-.567.38Z"/></svg>`,
})
export class Ne {
  protected readonly b = inject(GeoIconBase);
}
