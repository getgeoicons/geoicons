// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-kp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.715 9.891-5.04 3.616a.5.5 0 0 0 .087.863l2.608 1.162a.5.5 0 0 1 .263.637l-1.731 4.485a.5.5 0 0 0 .31.655l4.307 1.42a.5.5 0 0 0 .413-.046l5.436-3.24a.5.5 0 0 0 .037-.836L12.52 17.25a.5.5 0 0 1-.204-.463l.282-2.43a.5.5 0 0 1 .23-.366l5.98-3.745a.5.5 0 0 0 .226-.511l-.379-2.147a.5.5 0 0 1 .145-.446l2.887-2.785a.5.5 0 0 0 .024-.694l-1.77-1.966a.5.5 0 0 0-.796.071l-1.923 3.108a.5.5 0 0 1-.419.237l-2.428.03a.5.5 0 0 0-.49.434L13.628 7.5a.5.5 0 0 1-.782.343L10.428 6.15a.5.5 0 0 0-.727.172l-1.837 3.4a.5.5 0 0 1-.149.17Z"/></svg>`,
})
export class Kp {
  protected readonly b = inject(GeoIconBase);
}
