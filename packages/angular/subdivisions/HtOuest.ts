// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-ouest',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.81 14.352a.962.962 0 0 0-.788 1.629l.96.982a1 1 0 0 0 .715.302h1.94a1 1 0 0 0 .467-.116l3.153-1.662a1 1 0 0 1 .67-.094l8.168 1.697 1.482.146a.8.8 0 0 0 .783-.417l.033-.061a.8.8 0 0 0-.376-1.109l-1.619-.73a2 2 0 0 1-.944-.884l-.547-1.03a.6.6 0 0 1 .557-.88l1.093.049a.795.795 0 0 0 .21-1.57l-1.561-.351a2 2 0 0 0-.797-.017l-1.686.307a1 1 0 0 1-.811-.21l-3.334-2.72a2 2 0 0 0-.653-.355l-.687-.22a1 1 0 0 0-1.276.71l-.083.332a1 1 0 0 0 .211.893l.53.617a2 2 0 0 0 .73.537l1.82.78a1 1 0 0 1 .584 1.122l-.07.341a1 1 0 0 1-1.124.787l-1.966-.288a1 1 0 0 0-.926.365l-.858 1.073a1 1 0 0 1-.884.37z"/></svg>`,
})
export class HtOuest {
  protected readonly b = inject(GeoIconBase);
}
