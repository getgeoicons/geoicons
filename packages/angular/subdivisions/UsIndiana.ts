// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-indiana',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M10.23 1.2a.3.3 0 0 0-.054.005l-2.662.493a.3.3 0 0 0-.245.294L7.228 17.37a1 1 0 0 1-.194.589L5.57 19.954a1 1 0 0 0-.191.662l.097 1.378a.6.6 0 0 0 .812.518l1.077-.41a1 1 0 0 1 .54-.049l1.586.297a1 1 0 0 0 .837-.225l1.278-1.102a1 1 0 0 1 1.151-.11l.4.23a1 1 0 0 0 1.36-.358l1.54-2.61a1 1 0 0 1 .637-.466l1.72-.397a.3.3 0 0 0 .233-.293l-.043-15.52a.3.3 0 0 0-.3-.3z"/></svg>`,
})
export class UsIndiana {
  protected readonly b = inject(GeoIconBase);
}
