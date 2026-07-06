// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cl',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m13.677 20.756-.012 1.365a.5.5 0 0 1-.652.472l-2.747-.878a.5.5 0 0 1-.34-.383l-.872-4.636a.5.5 0 0 1 .019-.255l1.391-4.04a.5.5 0 0 0 .009-.296l-.215-.772a.5.5 0 0 1 .025-.339l.928-2.074a.5.5 0 0 0 .04-.144l.756-6.33a.5.5 0 0 1 .176-.324l.65-.545a.5.5 0 0 1 .75.127l1.262 2.117a.5.5 0 0 1 .036.44l-1.375 3.492a.5.5 0 0 0-.01.337l.28.867a.5.5 0 0 1 0 .31l-1.323 4.018a.5.5 0 0 0-.013.266l.377 1.69a.5.5 0 0 1-.021.288l-.99 2.567a.5.5 0 0 0-.033.22l.104 1.34a.5.5 0 0 0 .423.455l.953.147a.5.5 0 0 1 .424.498Z"/></svg>`,
})
export class Cl {
  protected readonly b = inject(GeoIconBase);
}
