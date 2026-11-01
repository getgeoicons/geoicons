// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bb',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m7.264 20.654 3.412.618a1 1 0 0 1 .6.356l.524.65a1 1 0 0 0 1.056.333l.746-.216a4 4 0 0 0 1.323-.667l2.305-1.766c.352-.27.657-.595.902-.965l1.783-2.689a2 2 0 0 0 .227-1.75l-.01-.03a2 2 0 0 0-.91-1.098l-1.59-.898-4.483-2.298a3 3 0 0 1-1.125-1.002l-1.838-2.75a3 3 0 0 1-.359-.736l-.574-1.762a3 3 0 0 0-1.068-1.481L7.15 1.738a2 2 0 0 0-1.624-.344l-.04.009a2 2 0 0 0-1.173.763l-.33.447A2 2 0 0 0 3.6 3.975l1.206 13.871a2 2 0 0 0 .44 1.087l.821 1.013a2 2 0 0 0 1.197.708Z"/></svg>`,
})
export class Bb {
  protected readonly b = inject(GeoIconBase);
}
