// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sv-la-libertad',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.209 18.765a.3.3 0 0 0 .157.502l3.36.671 5.937.403c.382.026.755.125 1.099.29l4.21 2.027a.3.3 0 0 0 .41-.164l.65-1.718a.3.3 0 0 0-.256-.405l-1.318-.107a1 1 0 0 1-.815-.555l-.381-.772a2 2 0 0 1-.206-.884v-3.544a1 1 0 0 0-.26-.673l-.793-.872a1 1 0 0 1-.239-.877l1.202-5.755a1 1 0 0 0-.21-.843l-1.069-1.287a1 1 0 0 1-.141-1.052l.177-.39a.83.83 0 0 0-.433-1.108l-.647-.273a1 1 0 0 0-.836.027l-1.32.66a1 1 0 0 0-.548.799l-.158 1.65a1 1 0 0 1-.311.634l-1.316 1.236a1 1 0 0 0-.315.719l-.037 3.689a1 1 0 0 1-.367.763l-1.414 1.159a1 1 0 0 0-.362.866l.094 1.014a1 1 0 0 1-.276.788z"/></svg>`,
})
export class SvLaLibertad {
  protected readonly b = inject(GeoIconBase);
}
