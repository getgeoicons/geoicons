// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cu-isle-of-youth',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.903 6.96-.661 1.493a.6.6 0 0 0 .044.568l3.442 5.347a1 1 0 0 1-.082 1.192l-.635.74a1 1 0 0 1-.898.34l-1.437-.202A1 1 0 0 1 4.982 16l-.493-.745a2 2 0 0 0-.493-.515l-1.519-1.102a.652.652 0 0 0-.934.875l1.665 2.647a1 1 0 0 0 .465.392l.722.297a1 1 0 0 1 .482.42l.441.754a1 1 0 0 0 .687.48l4.836.866a4 4 0 0 0 1.543-.025l3.45-.739q.411-.087.796-.259l5.567-2.488a1 1 0 0 0 .592-.93l-.006-.315a2 2 0 0 0-.478-1.265l-1.178-1.38a1 1 0 0 1-.19-.963l.39-1.183a1 1 0 0 0-.076-.8l-.419-.75a1 1 0 0 0-.498-.44l-1.518-.611a1 1 0 0 1-.615-1.07l.157-1.087a1 1 0 0 0-.68-1.094l-3.67-1.2a4 4 0 0 0-1.133-.196l-2.666-.073a1 1 0 0 0-.631.203L6.834 5.783a3 3 0 0 0-.931 1.177Z"/></svg>`,
})
export class CuIsleOfYouth {
  protected readonly b = inject(GeoIconBase);
}
