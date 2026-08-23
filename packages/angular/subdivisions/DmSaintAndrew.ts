// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-dm-saint-andrew',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.458 13.416a1 1 0 0 0-.724-1.016l-.995-.283a1 1 0 0 1-.7-.732l-.789-3.34a1 1 0 0 0-.674-.724l-5.622-1.763a2 2 0 0 0-1.053-.04l-1.706.399A1 1 0 0 1 8.14 5.5L5.634 1.78a1 1 0 0 0-.77-.44l-1.881-.112a.3.3 0 0 0-.294.417l.86 2.02a2 2 0 0 1 .153.938l-.11 1.405a.6.6 0 0 0 .264.545l1.7 1.14a1 1 0 0 1 .44.908L5.73 11.96a1 1 0 0 0 .313.808l.527.494a1 1 0 0 1 .301.557l.559 3.187a1 1 0 0 0 .325.579L9.022 18.7a1 1 0 0 0 1.05.17l.964-.41a1 1 0 0 1 .736-.017l1.56.576a7 7 0 0 1 1.695.906l.9.654a1 1 0 0 1 .37.525l.377 1.275a.3.3 0 0 0 .471.152l.906-.699a1 1 0 0 0 .333-.46l.287-.818a1 1 0 0 1 .483-.555l1.497-.779a1 1 0 0 0 .537-.833z"/></svg>`,
})
export class DmSaintAndrew {
  protected readonly b = inject(GeoIconBase);
}
