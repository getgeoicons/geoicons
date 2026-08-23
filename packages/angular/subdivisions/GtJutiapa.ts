// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-jutiapa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M16.627 2.53a1 1 0 0 1-.805.307l-2.263-.184a1 1 0 0 0-.411.052L8.413 4.36a1 1 0 0 0-.657.782l-.19 1.16a.7.7 0 0 1-.558.574l-1.967.382a1 1 0 0 0-.809.993l.002.187a1 1 0 0 0 .604.907l2.031.876a1 1 0 0 1 .57.66l.31 1.155a1 1 0 0 1-.312 1.014l-2.435 2.11a1 1 0 0 1-.607.243l-1.427.069a.978.978 0 0 0-.645 1.668l1.355 1.355a1 1 0 0 1 .128 1.258l-.384.58a.6.6 0 0 0 .25.877l2.558 1.175a.6.6 0 0 0 .85-.579l-.105-1.899a1 1 0 0 1 .315-.785l5.016-4.694a1 1 0 0 1 .935-.237l2.13.555a.6.6 0 0 0 .75-.566l.013-.548a2 2 0 0 1 .344-1.075l.894-1.32a2 2 0 0 1 1.167-.819l1.945-.49A.6.6 0 0 0 20.83 9l-.954-1.358a1 1 0 0 1-.177-.67l.086-.898a1 1 0 0 1 1.017-.903 1 1 0 0 0 .987-.737l.125-.46a1 1 0 0 0-.25-.961l-.736-.755A1 1 0 0 0 20.505 2l-2.02-.62a1 1 0 0 0-1.017.266z"/></svg>`,
})
export class GtJutiapa {
  protected readonly b = inject(GeoIconBase);
}
