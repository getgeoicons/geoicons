// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-california',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M3.333 1.23a.3.3 0 0 0-.299.272l-.31 3.243a1 1 0 0 0 .065.465l1.868 4.694a.6.6 0 0 0 .463.371l.942.15a.6.6 0 0 1 .506.577l.044 1.697a2 2 0 0 0 .254.925l2.706 4.837a1 1 0 0 0 .671.492l2.771.568a1 1 0 0 1 .587.365l2.093 2.683a.6.6 0 0 0 .534.227l3.927-.4a.6.6 0 0 0 .53-.492l.423-2.359a1 1 0 0 0-.06-.558l-.55-1.333a1 1 0 0 0-.243-.35l-9.373-8.746a.6.6 0 0 1-.19-.439V1.54a.3.3 0 0 0-.3-.3z"/></svg>`,
})
export class UsCalifornia {
  protected readonly b = inject(GeoIconBase);
}
