// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb-saint-joseph',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M14.012 22.15a.6.6 0 0 0 .56-.5l.788-4.657a1 1 0 0 1 .58-.747l2.4-1.067c.267-.119.504-.293.695-.513l3.496-4.005a.3.3 0 0 0-.105-.473l-1.45-.634a2 2 0 0 0-.725-.167l-.576-.022a2 2 0 0 1-1.061-.355L16.87 7.803a2 2 0 0 1-.332-.289l-2.634-2.857a3 3 0 0 1-.356-.471l-1.231-2.02a.6.6 0 0 0-.855-.18l-.424.295a1 1 0 0 0-.416.662l-.198 1.235a.8.8 0 0 1-.733.672l-4.457.316a.8.8 0 0 0-.661.445l-3.122 6.341a1 1 0 0 0 .061.99l1.099 1.677a.6.6 0 0 0 .683.242l1-.317a.6.6 0 0 1 .598.139l1.628 1.561a.6.6 0 0 1 .183.467l-.215 3.843a.6.6 0 0 0 .359.583l2.394 1.05a2 2 0 0 0 .908.166z"/></svg>`,
})
export class BbSaintJoseph {
  protected readonly b = inject(GeoIconBase);
}
