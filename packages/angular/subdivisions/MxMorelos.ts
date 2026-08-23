// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-morelos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.852 2.02a1 1 0 0 0-1.014.294l-.28.312a1 1 0 0 0-.252.768l.268 2.69a1 1 0 0 1-.388.893l-2.06 1.576a1 1 0 0 0-.299.371l-1.42 3.04a1 1 0 0 0 .016.879l2.89 5.637a1 1 0 0 0 .695.524l2.445.486a1 1 0 0 0 .569-.053l.944-.38a1 1 0 0 1 1.263.47l1.013 1.968a.6.6 0 0 0 .908.195l4.581-3.66a1 1 0 0 1 1.344.086l1.503 1.557a.599.599 0 0 0 1.025-.483l-.703-6.212a3 3 0 0 1 .188-1.433l2.487-6.338a.61.61 0 0 0-1.029-.625l-1.181 1.35a2 2 0 0 1-.929.598l-.214.064a2 2 0 0 1-1.4-.093l-.468-.211a2 2 0 0 1-1.009-1.022l-.486-1.112a1 1 0 0 0-.677-.57l-1.943-.48a1 1 0 0 0-.996.316l-.155.18a1 1 0 0 1-1.002.315l-.533-.134a1 1 0 0 1-.612-.455L9.83 3.14a1 1 0 0 0-.587-.449z"/></svg>`,
})
export class MxMorelos {
  protected readonly b = inject(GeoIconBase);
}
