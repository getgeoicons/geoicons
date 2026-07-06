// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tv',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.954 21.933-1.159.654a1 1 0 0 1-.793.082l-.125-.04a1 1 0 0 1-.645-1.277l.291-.851a1 1 0 0 0 .026-.56l-.808-3.338a1 1 0 0 0-.236-.441l-1.28-1.391a1 1 0 0 1-.227-.406l-1.175-4.161a1 1 0 0 1 .25-.974l3.42-3.47a1 1 0 0 0 .283-.594l.23-2.12a1 1 0 0 1 .692-.845l2.942-.934a1 1 0 0 1 .43-.04l4.281.547a1 1 0 0 1 .754.517l1.966 3.644a1 1 0 0 1 .118.418l.08 1.387a1 1 0 0 0 .058.287l.742 2.028a1 1 0 0 1-.372 1.167l-8.532 5.874a1 1 0 0 0-.365.46l-.693 1.776a1 1 0 0 0 .021.778l.245.538a1 1 0 0 1-.419 1.285Z"/></svg>`,
})
export class Tv {
  protected readonly b = inject(GeoIconBase);
}
