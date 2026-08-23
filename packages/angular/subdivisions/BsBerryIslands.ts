// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-berry-islands',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.968 1.9-.326-.239a1 1 0 0 0-1.229.036l-1.057.876a1 1 0 0 0-.3 1.118l1.82 4.914a1 1 0 0 0 .896.651l2.067.085a1 1 0 0 1 .874.595l1.307 2.958a1 1 0 0 1-.016.842l-.395.811a1 1 0 0 0 .113 1.056l.907 1.156q.222.281.528.469l4.698 2.88a2 2 0 0 1 .619.596l.993 1.49c.22.33.67.407.986.17.368-.276.385-.856.133-1.24-1.024-1.566-1.834-4.83-2.076-6.87-.045-.38-.416-.642-.795-.589-2.864.398-3.949-1.918-4.21-3.627a1.27 1.27 0 0 0-.646-.92C9.265 7.703 7.847 4.37 7.362 2.494a1.06 1.06 0 0 0-.394-.594Z"/></svg>`,
})
export class BsBerryIslands {
  protected readonly b = inject(GeoIconBase);
}
