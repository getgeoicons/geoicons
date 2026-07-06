// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-southern-africa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.992 5.292-.94-3.656L4.857 1.2l.567 1.277a.6.6 0 0 0 .47.35l1.324.174.254-1.02 1.785.17.064 2.097a1 1 0 0 0 .696.923l2.562.816a1 1 0 0 0 1.297-.835l.21-1.764 1.407-.403 1.832 1.003a1 1 0 0 1 .42.443l.242.501a1 1 0 0 0 1.056.553l3.592-.563-.167 3.03a1 1 0 0 1-.07.314l-.35.887a1 1 0 0 1-.382.468l-3.017 1.976a1 1 0 0 0-.442.979l.225 1.564a1 1 0 0 1-.469.995l-1.142.698a1 1 0 0 0-.451.622l-.396 1.662a1 1 0 0 1-.35.55l-4.007 3.186a1 1 0 0 1-.415.195l-3.125.663a1 1 0 0 1-.774-.154l-1.111-.764a1 1 0 0 1-.424-.69l-.182-1.344a1 1 0 0 0-.117-.352L4.196 17.12a1 1 0 0 1-.113-.327l-.518-3.21a1 1 0 0 0-.103-.308L1.598 9.74a1 1 0 0 1-.021-.891l1.352-2.885a1 1 0 0 0 .063-.673Z"/></svg>`,
})
export class SouthernAfrica {
  protected readonly b = inject(GeoIconBase);
}
