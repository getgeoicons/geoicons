// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-az',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.733 4.338.453-.376a.6.6 0 0 1 .785.016l3.085 2.783a1 1 0 0 0 1.386-.045l1.976-2.027a.6.6 0 0 1 .95.118l2.623 4.526a1 1 0 0 0 .792.496l1.727.127a1 1 0 0 1 .784.483l.23.382a.6.6 0 0 1-.445.905l-2.028.238a1 1 0 0 0-.873.85l-.427 2.968a1 1 0 0 1-.516.738l-.841.452a1 1 0 0 0-.527.898l.028 1.586a.812.812 0 0 1-1.362.61l-1.464-1.352a.6.6 0 0 1-.11-.745l.937-1.596a1 1 0 0 0-.15-1.208l-.575-.584a.6.6 0 0 0-.805-.046l-3.791 3.061a.6.6 0 0 1-.96-.326l-.502-2.081a1 1 0 0 0-.479-.636l-1.497-.85a.6.6 0 0 1-.257-.755l.396-.937a.6.6 0 0 0-.215-.73l-1.217-.827a.6.6 0 0 1-.177-.805l.283-.471a.6.6 0 0 0-.198-.819l-1.339-.83a.6.6 0 0 1-.144-.895l.503-.604a.6.6 0 0 1 .74-.147l3.186 1.666a.943.943 0 0 0 .987-1.6l-.92-.662a.6.6 0 0 1-.032-.949ZM2.958 14.616l.808.753c.224.21.535.3.836.245a.97.97 0 0 1 1.076.595l.57 1.43a.6.6 0 0 1-.702.804l-1.069-.264a2 2 0 0 1-1.036-.638l-1.596-1.855a.773.773 0 0 1 1.113-1.07Z"/></svg>`,
})
export class Az {
  protected readonly b = inject(GeoIconBase);
}
