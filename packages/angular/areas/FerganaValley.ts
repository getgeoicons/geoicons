// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-fergana-valley',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.776 12.865-4.133 1.977a.594.594 0 0 0-.012 1.067l.398.2q.185.094.392.107l1.125.066a1 1 0 0 0 .277-.022l2.365-.525a1 1 0 0 1 .488.013l1.434.404a1 1 0 0 0 .59-.015l1.848-.621a1 1 0 0 1 .328-.053l4.388.04a1 1 0 0 0 .42-.088l1.669-.754q.159-.071.332-.085l2.162-.171a1 1 0 0 0 .272-.061l.942-.353a1 1 0 0 0 .4-.277l1.028-1.17a1 1 0 0 0 .236-.818l-.055-.343a1 1 0 0 0-.317-.584l-2.547-2.3a1 1 0 0 0-.546-.25l-4.135-.515a1 1 0 0 0-.389.028l-2.284.628a1 1 0 0 1-.287.036L11.036 8.4a1 1 0 0 0-.401.074l-.524.215a1 1 0 0 0-.331.221l-3.726 3.757a1 1 0 0 1-.278.197Z"/></svg>`,
})
export class FerganaValley {
  protected readonly b = inject(GeoIconBase);
}
