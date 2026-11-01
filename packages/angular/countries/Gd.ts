// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gd',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m4.537 21.88 1.48-1.36a1 1 0 0 0 .319-.837L6.11 17.45a2 2 0 0 1 .233-1.154l.821-1.513a4 4 0 0 1 .944-1.156l1.13-.948a2 2 0 0 1 1.423-.464l.902.063a1 1 0 0 1 .93 1.053l-.203 3.61a2 2 0 0 1-.148.65l-1.193 2.893a2 2 0 0 1-.851.971l-1.726.993a2 2 0 0 1-1.31.242l-2.395-.38a.25.25 0 0 1-.13-.43ZM15.975 3.67l.784-.264a1 1 0 0 0 .626-.624l.264-.772a1.006 1.006 0 0 1 1.126-.66c.572.1.948.667.806 1.23l-.42 1.666a1 1 0 0 1-.576.675l-1.923.824a1 1 0 0 1-1.386-1.05l.028-.207a1 1 0 0 1 .67-.817Z"/></svg>`,
})
export class Gd {
  protected readonly b = inject(GeoIconBase);
}
