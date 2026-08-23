// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-new-providence',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m1.844 12.24-.16.261a1.287 1.287 0 0 0 1.164 1.956l2-.102a1 1 0 0 1 .792.328l.9.995a1 1 0 0 0 .723.328l4.834.095a2 2 0 0 0 .946-.217l2.985-1.52q.376-.19.788-.27l4.092-.796a1 1 0 0 0 .59-.357l.62-.776a1 1 0 0 0-.226-1.457L19.195 8.91a3 3 0 0 0-1.128-.456l-2.195-.4a3 3 0 0 0-1.755.211l-1.094.486a1 1 0 0 1-.603.067l-2.091-.422a3 3 0 0 0-1.44.064l-3.192.94a3 3 0 0 0-.974.494l-2.458 1.878a1.7 1.7 0 0 0-.421.468Z"/></svg>`,
})
export class BsNewProvidence {
  protected readonly b = inject(GeoIconBase);
}
