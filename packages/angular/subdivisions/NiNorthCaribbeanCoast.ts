// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni-north-caribbean-coast',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.205 20.13a2 2 0 0 0 1.607-.272l.935-.624c.265-.177.569-.288.886-.323l3.502-.394q.08-.008.16-.005l3.173.156a1 1 0 0 1 .886.643l.269.706a1 1 0 0 0 .368.468l1.126.774a.598.598 0 0 0 .935-.537l-.149-1.975a12 12 0 0 1 .1-2.687l.017-.112a12 12 0 0 1 1.344-3.983l1.012-1.845a3 3 0 0 0 .28-2.172l-.51-2.033a2 2 0 0 1 .05-1.138l.009-.028a2 2 0 0 1 .73-.976l.572-.408a.511.511 0 0 0-.309-.928l-2.292.053a2 2 0 0 0-.985.286l-3.035 1.827a4 4 0 0 1-.964.42l-3.553 1.014a4 4 0 0 1-1.563.127l-.27-.032a2 2 0 0 1-1.381-.805L7.989 5.1a1 1 0 0 0-1.335-.26l-.766.476a1 1 0 0 0-.462.999l.241 1.596a1 1 0 0 0 .663.796l.57.197a.6.6 0 0 1 .4.648l-.232 1.702a4 4 0 0 1-.693 1.764l-.815 1.156a.6.6 0 0 1-.68.224l-.684-.228a1 1 0 0 0-.881.123l-.792.542a2 2 0 0 0-.787 1.08l-.385 1.291a1 1 0 0 0 .182.916l.675.833a2 2 0 0 0 1.055.677z"/></svg>`,
})
export class NiNorthCaribbeanCoast {
  protected readonly b = inject(GeoIconBase);
}
