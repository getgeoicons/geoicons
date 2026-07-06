// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-south-island',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.995 21.186.373.57a1 1 0 0 0 1.14.406l.915-.29a1 1 0 0 1 .76.062l1.423.73a1 1 0 0 0 .56.105l1.378-.142a1 1 0 0 0 .558-.245l.835-.736a1 1 0 0 0 .163-.184l1.495-2.178a1 1 0 0 0 .172-.479l.355-4.03a1 1 0 0 1 .367-.69l1.428-1.153a1 1 0 0 1 .723-.218l.86.082a.783.783 0 0 0 .43-1.477l-.434-.222a.843.843 0 0 1-.15-1.403l.717-.584a1 1 0 0 0 .28-.364L19.9 5.287A1 1 0 0 0 19.98 5l.207-1.674a1 1 0 0 0-.443-.958l-.144-.095a1 1 0 0 0-1.341.224l-.486.629a.6.6 0 0 1-.998-.074l-.636-1.135a.6.6 0 0 0-.961-.117l-.767.819a.6.6 0 0 0-.16.464l.111 1.211a1 1 0 0 1-.224.727l-.764.925a1 1 0 0 0-.22.513l-.264 2.11a1 1 0 0 1-.222.514l-2.718 3.28a1 1 0 0 1-.191.178L7.31 14.275a1 1 0 0 0-.262.274L4.48 18.53a1 1 0 0 0-.114.245l-.489 1.566a1 1 0 0 0 .118.845Z"/></svg>`,
})
export class SouthIsland {
  protected readonly b = inject(GeoIconBase);
}
