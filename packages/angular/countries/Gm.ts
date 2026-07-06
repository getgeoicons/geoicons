// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.522 14.337-.737.819a.25.25 0 0 1-.435-.152l-.137-2.277a.5.5 0 0 1 .126-.363l1.635-1.832a.5.5 0 0 1 .373-.167l7.225.009a.5.5 0 0 0 .491-.404l.157-.802a.5.5 0 0 1 .423-.4l2.483-.338a.5.5 0 0 1 .39.114L16.05 9.84a.5.5 0 0 0 .291.117l.994.062a.5.5 0 0 1 .333.157l.954 1.016a.5.5 0 0 0 .51.136l2.302-.705a.5.5 0 0 1 .602.272l.534 1.178a.5.5 0 0 1-.298.681l-3.424 1.13a.5.5 0 0 1-.419-.049l-4.746-2.918a.5.5 0 0 0-.678.149l-.872 1.31a.5.5 0 0 1-.422.222l-2.836-.034a.5.5 0 0 0-.506.504l.005.587a.5.5 0 0 1-.499.504l-4.983.013a.5.5 0 0 0-.37.165Z"/></svg>`,
})
export class Gm {
  protected readonly b = inject(GeoIconBase);
}
