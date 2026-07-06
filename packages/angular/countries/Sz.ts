// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sz',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.372 22.8 5.253-.047a.5.5 0 0 0 .494-.474l.305-5.698a.5.5 0 0 1 .591-.464l.5.093a.5.5 0 0 0 .593-.485l.042-3.317a.5.5 0 0 0-.036-.192l-.942-2.355a.5.5 0 0 1-.03-.256l.555-3.938a.5.5 0 0 0-.205-.477l-1.132-.803a.5.5 0 0 0-.461-.062l-1.053.386a.5.5 0 0 1-.456-.059l-4.818-3.338a.5.5 0 0 0-.36-.084l-.97.15a.5.5 0 0 0-.289.152L7.817 3.81a.5.5 0 0 0-.095.145L5.776 8.496a.5.5 0 0 1-.063.108l-1.757 2.28a.5.5 0 0 0-.104.314l.085 4.415a.5.5 0 0 0 .706.446l.272-.123a.5.5 0 0 1 .703.404l.221 2.1a.5.5 0 0 0 .105.256l1.93 2.448a.5.5 0 0 0 .224.162L12.2 22.77a.5.5 0 0 0 .173.03Z"/></svg>`,
})
export class Sz {
  protected readonly b = inject(GeoIconBase);
}
