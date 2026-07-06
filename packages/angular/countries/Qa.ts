// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-qa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.395 1.355-2.256 1.32a.5.5 0 0 0-.202.223l-3.105 6.75a.5.5 0 0 0-.046.213l.052 5.724a.5.5 0 0 0 .101.297l.875 1.158a.5.5 0 0 1 .085.427l-.434 1.664a.5.5 0 0 0 .036.348l1.106 2.227c.05.1.13.18.23.229l1.685.81a.5.5 0 0 0 .24.05l2.5-.112a.5.5 0 0 0 .351-.166l.56-.626a.5.5 0 0 0 .092-.15l1.378-3.506a.5.5 0 0 1 .043-.084l1.444-2.283a.5.5 0 0 0 .076-.295l-.14-2.578a.5.5 0 0 0-.239-.4l-.753-.46a.5.5 0 0 1-.23-.326l-.455-2.226a.5.5 0 0 1 .05-.336l1.189-2.218a.5.5 0 0 0 .059-.25l-.057-1.982a.5.5 0 0 0-.402-.476l-1.302-.26a.5.5 0 0 1-.382-.349l-.421-1.43a.5.5 0 0 0-.21-.279l-.995-.638a.5.5 0 0 0-.523-.01Z"/></svg>`,
})
export class Qa {
  protected readonly b = inject(GeoIconBase);
}
