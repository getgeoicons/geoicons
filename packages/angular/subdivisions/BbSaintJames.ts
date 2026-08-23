// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb-saint-james',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M15.615 2.444a.6.6 0 0 0-.51-.578l-3.962-.601a.3.3 0 0 0-.339.358l.236 1.12a.6.6 0 0 1-.583.725l-2.662.014a.6.6 0 0 0-.586.713l.537 2.793a2 2 0 0 1-.039.917l-.39 1.393a1 1 0 0 0 .082.744l.522.971a2 2 0 0 1 .238 1.028l-.323 8.112a3 3 0 0 0 .052.69l.266 1.37a.6.6 0 0 0 .702.474l.502-.096a.6.6 0 0 0 .477-.698l-.163-.881a.3.3 0 0 1 .247-.351l2.583-.424a.6.6 0 0 0 .503-.59l.016-9.844a.6.6 0 0 1 .416-.57l1.096-.353a2 2 0 0 0 1.077-.836l1.045-1.654a.8.8 0 0 0-.003-.859l-.699-1.092a2 2 0 0 1-.315-1.029z"/></svg>`,
})
export class BbSaintJames {
  protected readonly b = inject(GeoIconBase);
}
