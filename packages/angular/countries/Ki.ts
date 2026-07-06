// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ki',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.869 10.026-1.37 1.544a.5.5 0 0 0 .006.67l.915.995a.5.5 0 0 0 .561.123l1.353-.567a.5.5 0 0 1 .488.057l.936.683a.5.5 0 0 1 .179.24l.39 1.13a.5.5 0 0 0 .2.255l2.178 1.418a.5.5 0 0 0 .195.074l3.635.575q.102.015.188.07l6.993 4.402a.5.5 0 0 0 .402.058l2.317-.65a.5.5 0 0 0 .365-.48v-2.226a.5.5 0 0 0-.278-.448l-8.9-4.406a.5.5 0 0 1-.276-.397l-.255-2.469a.5.5 0 0 1 .029-.225l.657-1.768a.5.5 0 0 1 .282-.29l1.494-.6a.5.5 0 0 0 .31-.414l.047-.457a.5.5 0 0 0-.064-.299l-.29-.508a.5.5 0 0 0-.356-.246l-3.619-.577a.5.5 0 0 1-.277-.143l-2.26-2.293a.5.5 0 0 0-.183-.119l-1.397-.513a.5.5 0 0 0-.212-.03l-1.735.136a.5.5 0 0 0-.405.268l-.282.544a.5.5 0 0 0-.019.42l1.185 2.88a.5.5 0 0 1 .03.276l-.28 1.617a.5.5 0 0 1-.27.363L3.021 9.91a.5.5 0 0 0-.153.117Z"/></svg>`,
})
export class Ki {
  protected readonly b = inject(GeoIconBase);
}
