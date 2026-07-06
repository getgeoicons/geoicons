// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sea-of-marmara',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.14 11.022-3.144 1.11a1 1 0 0 0-.403.265L1.737 14.41a.775.775 0 0 0 1.118 1.071l1.784-1.795a1 1 0 0 1 .468-.266l1.887-.469a.93.93 0 0 1 .874.236.93.93 0 0 0 .492.25l.838.143a.595.595 0 0 0 .676-.738.595.595 0 0 1 .621-.744l.537.041a.6.6 0 0 1 .548.517l.01.068a.6.6 0 0 0 .575.519l3.247.104a.6.6 0 0 0 .601-.746l-.058-.233a.6.6 0 0 1 .368-.707l.622-.237a1 1 0 0 1 .32-.065l4.787-.18a.736.736 0 0 0-.009-1.472l-2.678-.068a1 1 0 0 1-.478-.136l-1.49-.868a1 1 0 0 0-.824-.084l-.746.252a1 1 0 0 1-.631.003l-2.081-.681a1 1 0 0 0-.74.047l-.968.46a1 1 0 0 1-.703.058l-.497-.141a1 1 0 0 0-.416-.029l-.58.083a1 1 0 0 0-.813.692l-.101.326a1 1 0 0 1-.138.278l-.534.757a1 1 0 0 1-.484.366Z"/></svg>`,
})
export class SeaOfMarmara {
  protected readonly b = inject(GeoIconBase);
}
