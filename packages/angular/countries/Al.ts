// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-al',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.618 1.258a.53.53 0 0 1 .44.435l.07.397a.6.6 0 0 0 .771.47l.446-.14a1 1 0 0 1 1.024.262l1.147 1.2a2 2 0 0 1 .499.913l.303 1.256c.082.343.104.697.064 1.046l-.435 3.796a2 2 0 0 0 .134.98l.68 1.677a.6.6 0 0 0 .572.374l.571-.015a.6.6 0 0 1 .607.497l.147.846a2 2 0 0 1-.23 1.324l-1.352 2.395a2 2 0 0 1-.857.81l-.48.237a1 1 0 0 0-.559.906l.005.516a1 1 0 0 1-.243.662l-.191.222a1 1 0 0 1-1.018.312l-.28-.075a1 1 0 0 1-.724-.796l-.166-.963a1 1 0 0 0-.516-.712l-1.204-.641a2.97 2.97 0 0 1-1.572-2.766l.006-.126a3 3 0 0 1 .199-.937l.463-1.196a2 2 0 0 0 .133-.806l-.112-2.664a2 2 0 0 1 .195-.95l.498-1.037a1 1 0 0 0-.371-1.28l-.17-.106a1 1 0 0 1-.453-.67l-.341-1.89a1 1 0 0 1 .119-.68l1.636-2.824a.53.53 0 0 1 .545-.26Z"/></svg>`,
})
export class Al {
  protected readonly b = inject(GeoIconBase);
}
