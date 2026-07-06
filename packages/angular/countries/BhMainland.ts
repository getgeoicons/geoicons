// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bh-mainland',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.207 17.053-.201-1.274a.5.5 0 0 1 .03-.266l.953-2.345a.5.5 0 0 0-.002-.38l-1.438-3.46a.5.5 0 0 1-.032-.112l-.49-3.048a.5.5 0 0 1 .155-.447l1.19-1.096a.5.5 0 0 1 .451-.12l2.003.46a.5.5 0 0 0 .476-.144l2.926-3.094a.5.5 0 0 1 .813.126l1.86 3.857a.5.5 0 0 1-.014.462l-2.484 4.425a.5.5 0 0 0-.062.197l-.893 9.502a.5.5 0 0 1-.088.24l-1.016 1.448a.5.5 0 0 1-.884-.13l-.73-2.22a.5.5 0 0 0-.135-.21L8.36 17.342a.5.5 0 0 1-.153-.288Z"/></svg>`,
})
export class BhMainland {
  protected readonly b = inject(GeoIconBase);
}
