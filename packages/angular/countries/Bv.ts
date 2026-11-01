// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bv',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.602 8.868.708-.889a2 2 0 0 1 1.5-.753l2.148-.07a4 4 0 0 0 1.046-.174l3.036-.935a1 1 0 0 0 .672-.698l.192-.722a.6.6 0 0 1 1.034-.238l.705.815a1 1 0 0 0 .803.344l1.314-.061a3 3 0 0 1 1.359.255l2.546 1.132a3 3 0 0 1 1.147.896l2.035 2.608c.19.243.341.515.448.805l.268.724a2 2 0 0 1 .031 1.295l-1.004 3.184c-.107.34-.274.658-.493.94l-.274.351a3 3 0 0 1-2.008 1.137l-3.966.478a2 2 0 0 1-.637-.026l-1.517-.308a2 2 0 0 0-1.292.171L9.19 20.235a2 2 0 0 1-.983.21l-1.402-.064a1 1 0 0 1-.912-.707l-.266-.875a1 1 0 0 0-.268-.434L2.963 16.09a3 3 0 0 1-.713-1.045l-.328-.804a3 3 0 0 1-.202-1.478l.19-1.638a1 1 0 0 0-.104-.572l-.311-.606a1 1 0 0 1 .107-1.08Z"/></svg>`,
})
export class Bv {
  protected readonly b = inject(GeoIconBase);
}
