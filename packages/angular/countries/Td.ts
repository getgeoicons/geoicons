// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-td',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.973 22.488-1.725-2.084a.5.5 0 0 1 .23-.794l.952-.311a.5.5 0 0 0 .332-.584l-.591-2.663a.5.5 0 0 0-.125-.234L5.43 14.103a.5.5 0 0 1-.038-.641l2.226-2.99a.5.5 0 0 0 .096-.253l.418-4.558a.5.5 0 0 0-.022-.199L7.08 2.268a.5.5 0 0 1 .273-.61l.809-.36a.5.5 0 0 1 .433.013l9.995 5.188a.5.5 0 0 1 .27.444v4.516a.5.5 0 0 1-.5.5h-.975a.5.5 0 0 0-.457.297l-.84 1.894a.5.5 0 0 0-.015.368l1.088 3.108a.5.5 0 0 1-.24.608l-8.329 4.377a.5.5 0 0 1-.618-.123Z"/></svg>`,
})
export class Td {
  protected readonly b = inject(GeoIconBase);
}
