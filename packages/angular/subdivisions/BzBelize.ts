// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bz-belize',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M6.507 13.26a.3.3 0 0 0 .381.265l.76-.216a.3.3 0 0 1 .381.272l.33 6.014a3 3 0 0 1-.074.841l-.358 1.546a.6.6 0 0 0 .575.735l4.89.08a.6.6 0 0 0 .321-.087l.6-.363a.6.6 0 0 0 .289-.503l.05-2.86q.006-.4.092-.79l.852-3.872c.09-.41.5-.667.91-.57l.027.007a.914.914 0 0 0 .548-1.74l-1.338-.526a1 1 0 0 1-.58-1.254l.937-2.736q.09-.263.13-.537l.384-2.613q.05-.34.176-.66l.553-1.409a.6.6 0 0 0-.484-.814l-1.796-.225a2 2 0 0 0-.706.037L9.155 2.504a1 1 0 0 0-.71.627l-.28.758a1 1 0 0 0-.062.361l.048 3.123a1 1 0 0 1-.216.635l-1.421 1.8a1 1 0 0 0-.213.694z"/></svg>`,
})
export class BzBelize {
  protected readonly b = inject(GeoIconBase);
}
