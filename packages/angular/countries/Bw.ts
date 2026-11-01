// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.645 11.391.027 5.85a1 1 0 0 0 .19.581l1.479 2.043a1 1 0 0 1 .168.792l-.26 1.236a.6.6 0 0 0 .715.71l2.05-.446a1 1 0 0 0 .693-.552l1.102-2.344a1 1 0 0 1 .826-.571l.164-.013a1 1 0 0 1 .713.224l.797.653a2 2 0 0 0 1.289.453l1.443-.015a1 1 0 0 0 .922-.637l.587-1.505a1 1 0 0 1 .423-.498l1.32-.78a1 1 0 0 0 .461-.618L17 14.97a1 1 0 0 1 .465-.62l4.175-2.45a.6.6 0 0 0 .092-.968l-.425-.373a1 1 0 0 0-.424-.22l-1.161-.282a1 1 0 0 1-.711-.65l-.49-1.441a2 2 0 0 0-.735-.986l-2.247-1.597a2 2 0 0 1-.66-.796l-1.112-2.425a1 1 0 0 0-1.377-.467L9.93 2.996a.3.3 0 0 1-.405-.125l-.502-.95a.3.3 0 0 0-.314-.156l-4.387.72a.3.3 0 0 0-.252.299l.075 8.007a.3.3 0 0 1-.3.303l-1.9-.004a.3.3 0 0 0-.3.301Z"/></svg>`,
})
export class Bw {
  protected readonly b = inject(GeoIconBase);
}
