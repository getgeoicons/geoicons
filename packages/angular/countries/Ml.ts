// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ml',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.254 15.03-.836.799a.5.5 0 0 0-.136.498l.844 2.977a.5.5 0 0 0 .542.36l2.447-.304a.5.5 0 0 1 .51.276l1.144 2.33a.5.5 0 0 0 .508.275l2.585-.304a.5.5 0 0 0 .405-.31l1.326-3.286a.5.5 0 0 1 .23-.256l4.481-2.363a.5.5 0 0 1 .2-.056l4.994-.34a.5.5 0 0 0 .395-.242l.736-1.225a.5.5 0 0 0 .07-.243l.085-2.88a.5.5 0 0 0-.513-.514l-.828.023a.5.5 0 0 1-.514-.503l.004-.506a.5.5 0 0 0-.206-.408L11.1 1.827a.5.5 0 0 0-.291-.096l-1.514-.01a.5.5 0 0 0-.5.558l1.396 12.008a.5.5 0 0 1-.493.558l-7.103.047a.5.5 0 0 0-.342.138Z"/></svg>`,
})
export class Ml {
  protected readonly b = inject(GeoIconBase);
}
