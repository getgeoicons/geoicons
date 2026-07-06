// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-li',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.658 21.324.138.532a.5.5 0 0 0 .63.353l3.329-1.015a.5.5 0 0 1 .569.213l.656 1.044a.5.5 0 0 0 .603.2l2.64-1.017a.5.5 0 0 0 .319-.421l.1-1.114a.5.5 0 0 1 .352-.433l.938-.288a.5.5 0 0 0 .347-.401l.113-.722a.5.5 0 0 0-.136-.426l-.846-.867a.5.5 0 0 1-.078-.594l.584-1.04a.5.5 0 0 0 .033-.418l-.686-1.86a.5.5 0 0 0-.236-.27l-2.95-1.551a.5.5 0 0 1-.233-.628l.977-2.454a.5.5 0 0 0-.142-.567l-1.5-1.265a.5.5 0 0 1-.094-.659l.674-1.015a.5.5 0 0 0-.037-.602l-1.74-2.031a.5.5 0 0 0-.873.24l-.292 1.7a.5.5 0 0 1-.065.173L8.77 5.755a.5.5 0 0 0-.062.157L8.45 7.164a.5.5 0 0 1-.044.125l-.648 1.279a.5.5 0 0 0-.05.162l-.167 1.293a.5.5 0 0 0 .007.171l.43 1.956a.5.5 0 0 0 .072.17l.861 1.294a.5.5 0 0 1 .075.18l.743 3.772a.5.5 0 0 1-.01.232l-.301 1.08a.5.5 0 0 1-.197.277l-2.363 1.631a.5.5 0 0 0-.2.538Z"/></svg>`,
})
export class Li {
  protected readonly b = inject(GeoIconBase);
}
