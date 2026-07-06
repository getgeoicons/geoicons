// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mesoamerica',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.051 6.09-.284-.416a.918.918 0 0 1 .95-1.414l1.59.339a1 1 0 0 1 .733.64l.312.871c.065.18.179.338.33.455.477.367 1.595 1.228 2.46 1.897a1 1 0 0 0 .918.161l.329-.105a1 1 0 0 0 .691-.877l.021-.277a.6.6 0 0 1 .755-.533l.825.223a.6.6 0 0 1 .443.547l.106 1.969a1 1 0 0 0 .162.493l.732 1.118a1 1 0 0 0 .305.3l.823.517a1 1 0 0 0 .575.152l1.36-.06a1 1 0 0 0 .698-.327l.522-.577a1 1 0 0 0 .257-.605l.036-.55a.6.6 0 0 1 .51-.553l2.095-.313a.83.83 0 0 1 .671 1.446l-.223.196a1 1 0 0 0-.314.525l-.297 1.282a1 1 0 0 0-.025.265l.053 1.33a1 1 0 0 0 .268.642l2.077 2.223a1 1 0 0 1 .27.675l.008 1.156a.802.802 0 0 1-1.604.042l-.03-.679a.6.6 0 0 0-.203-.423l-1.015-.893a1 1 0 0 0-.354-.201l-2.546-.823q-.182-.06-.329-.18l-1.554-1.278a1 1 0 0 0-.8-.215l-1.57.264a1 1 0 0 1-.494-.042l-5.136-1.784a1 1 0 0 1-.297-.165l-1.467-1.175a1 1 0 0 1-.341-1.035l.2-.765a1 1 0 0 0-.327-1.024L2.238 6.296a1 1 0 0 1-.187-.206Z"/></svg>`,
})
export class Mesoamerica {
  protected readonly b = inject(GeoIconBase);
}
