// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-fm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.575 5.067-3.14 2.747a.5.5 0 0 0-.152.508l.734 2.686a.5.5 0 0 0 .545.364l1.308-.167a.5.5 0 0 1 .496.246l1.027 1.78a.5.5 0 0 1 .058.343l-.587 3.063a.5.5 0 0 0 .058.345l1.36 2.348a.5.5 0 0 0 .35.243l2.737.456a.5.5 0 0 1 .212.09l1.422 1.036a.5.5 0 0 0 .374.09l4.502-.72a.5.5 0 0 1 .237.02l2.203.734a.5.5 0 0 0 .612-.264l1.813-3.905a.5.5 0 0 0-.154-.61l-1.918-1.44a.5.5 0 0 1-.2-.374l-.06-1.207a.5.5 0 0 1 .552-.522l3.122.33a.5.5 0 0 0 .538-.62l-1.289-5.083a.5.5 0 0 0-.538-.374l-3.07.334a.5.5 0 0 1-.541-.385l-.738-3.187a.5.5 0 0 0-.494-.387l-3.856.053a.5.5 0 0 1-.12-.013l-3.884-.908a.5.5 0 0 0-.613.464l-.109 2.357a.5.5 0 0 1-.769.399l-1.43-.915a.5.5 0 0 0-.598.045Z"/></svg>`,
})
export class Fm {
  protected readonly b = inject(GeoIconBase);
}
