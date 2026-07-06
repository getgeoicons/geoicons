// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-rhine-basin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.333 6.434-3.075-.538a.6.6 0 0 1-.415-.894L6.22 2.657a1 1 0 0 1 .539-.44l1.999-.685a1 1 0 0 1 1.277.645l1.038 3.29a1 1 0 0 0 1.06.693l1.283-.137a.617.617 0 0 1 .575.962l-.531.775a1 1 0 0 0 .103 1.257l1.152 1.203a1 1 0 0 0 .812.304l2.831-.254a1 1 0 0 1 1.016.619l.142.35a1 1 0 0 1 .074.401l-.031 1.255a1 1 0 0 1-.241.626l-.582.68a.82.82 0 0 1-1.174.07.82.82 0 0 0-1.338.374l-.168.572a1 1 0 0 1-.624.66l-1.577.562a.835.835 0 0 0 .4 1.612l.933-.135a1 1 0 0 1 .851.282l.2.2a1 1 0 0 1 .293.746l-.062 1.594a1 1 0 0 1-.224.593l-.765.938a1 1 0 0 1-1.085.318l-1.292-.422a1 1 0 0 0-.573-.014l-1.92.524a1 1 0 0 1-.58-.016l-2.168-.723 1.83-1.892a1 1 0 0 0-.05-1.439l-1.328-1.192a1 1 0 0 1-.266-.385l-.967-2.516a1 1 0 0 1-.063-.446l.167-1.9a1 1 0 0 1 .418-.73l1.336-.946a1 1 0 0 0 .418-.904l-.2-2.255a1 1 0 0 0-.824-.897Z"/></svg>`,
})
export class RhineBasin {
  protected readonly b = inject(GeoIconBase);
}
