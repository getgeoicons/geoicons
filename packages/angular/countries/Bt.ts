// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bt',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.648 13.166-1.035.809a.5.5 0 0 0-.07.72l1.746 2.024a.5.5 0 0 0 .541.146l1.387-.477a.5.5 0 0 1 .395.03l2.118 1.114a.5.5 0 0 0 .403.028l3.61-1.302a.5.5 0 0 1 .394.023l1.63.815a.5.5 0 0 0 .324.043l6.645-1.359a.5.5 0 0 1 .204.001l1.198.254a.5.5 0 0 0 .602-.534l-.279-3.11a.5.5 0 0 0-.463-.453l-2.088-.148a.5.5 0 0 1-.46-.574l.29-1.904a.5.5 0 0 0-.211-.487l-1.54-1.059a.5.5 0 0 0-.602.027l-1.074.891a.5.5 0 0 1-.47.092L8.43 6.434a.5.5 0 0 0-.411.05l-2.001 1.22a.5.5 0 0 0-.169.17l-3.08 5.156a.5.5 0 0 1-.121.137Z"/></svg>`,
})
export class Bt {
  protected readonly b = inject(GeoIconBase);
}
